import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Foundation } from "@expo/vector-icons";
import numberFormat from "../../../utils/numberFormat";
import { COLORS, SHADOWS, images } from "../../../constants";

const RenderImage = ({ kos }) => {
  const [isLoadedImage, setIsLoadedImage] = useState(true);
  return (
    <Image
      onLoad={() => setIsLoadedImage(false)}
      style={styles.imageKos}
      source={
        isLoadedImage
          ? images.defaultBanner
          : {
              uri: `https://api.bem-unsoed.com/api/kost/image/${kos.kost_images[0].image}`,
            }
      }
    />
  );
};

const KosItem = ({ kos, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("InfoKosDetail", { id: kos.id })}
      style={styles.perKos}
    >
      <RenderImage kos={kos} />
      <View style={styles.kosInfoContainer}>
        <View style={styles.namaKosContainer}>
          <Text style={styles.namaKos} numberOfLines={1}>
            {kos.name}
          </Text>
          <View style={styles.jenisKelaminKos(kos.type)}>
            <Text style={styles.jenisKelaminKosText(kos.type)}>
              {kos.type === "l" ? "Putra" : "Putri"}
            </Text>
          </View>
        </View>
        <View style={styles.kosInfo}>
          <View style={styles.lokasiKos}>
            <Foundation name="marker" size={24} color={COLORS.font} />
            <Text style={styles.textLokasiKos}>{kos.region}</Text>
          </View>
          <Text style={styles.hargaKos}>
            {numberFormat(parseInt(kos.price_start))} / tahun
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default KosItem;

const styles = StyleSheet.create({
  perKos: {
    borderRadius: 10,
    ...SHADOWS.medium,
    marginVertical: 10,
  },
  imageKos: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  kosInfoContainer: {
    padding: 15,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomColor: COLORS.borderColor,
    borderLeftColor: COLORS.borderColor,
    borderRightColor: COLORS.borderColor,
  },
  namaKosContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  namaKos: {
    width: "75%",
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.font,
    marginRight: 20,
  },
  jenisKelaminKos: (jenisKelamin) => ({
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: jenisKelamin === "l" ? COLORS.secondary : COLORS.kostWanita,
    borderRadius: 10,
  }),
  jenisKelaminKosText: (jenisKelamin) => ({
    fontWeight: "500",
    color: jenisKelamin === "l" ? COLORS.secondary : COLORS.kostWanita,
  }),
  kosInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lokasiKos: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  textLokasiKos: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 10,
    color: COLORS.font,
  },
  hargaKos: {
    fontSize: 16,
    color: COLORS.gray,
    marginTop: 10,
    fontWeight: "400",
  },
});
