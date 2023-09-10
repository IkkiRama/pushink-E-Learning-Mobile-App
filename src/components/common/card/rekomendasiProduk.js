import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

import { COLORS, images } from "../../../constants";

const RenderImage = ({ merchData }) => {
  const [isLoadedImage, setIsLoadedImage] = useState(true);
  return (
    <Image
      onLoad={() => setIsLoadedImage(false)}
      source={
        isLoadedImage
          ? images.defaultBanner
          : {
              uri: merchData.images[0].image,
            }
      }
      style={styles.imageProduk}
    />
  );
};

const RekomendasiProduk = ({ navigation, merchData }) => {
  const hargaCoretProduk = (130 / 100) * merchData.harga;
  const diskonProduk =
    ((hargaCoretProduk - merchData.harga) / hargaCoretProduk) * 100;
  return (
    <Pressable
      onPress={() =>
        navigation.replace("DetailMerch", {
          merchData,
          hargaCoretProduk,
          diskonProduk,
        })
      }
      style={styles.perProduk}
    >
      <RenderImage merchData={merchData} />

      <View style={styles.infoProduk}>
        <Text style={styles.namaProduk} numberOfLines={2}>
          {merchData.nama}
        </Text>
        <View style={styles.hargaContainer}>
          <View style={styles.hargaProduk}>
            <Text numberOfLines={1} style={styles.hargaAsliProduk}>
              {numberFormat(merchData.harga)}
            </Text>
            <View style={styles.diskonProdukContainer}>
              <Text numberOfLines={1} style={styles.hargaCoretProduk}>
                {numberFormat(hargaCoretProduk)}
              </Text>
              <View style={styles.diskonProduk}>
                <Text style={styles.diskonProdukText}>{`${diskonProduk.toFixed(
                  0
                )}%`}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default RekomendasiProduk;

const styles = StyleSheet.create({
  perProduk: {
    margin: 5,
    elevation: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.borderColor,
    backgroundColor: COLORS.lightWhite,
    width: 200,
  },
  infoProduk: {
    padding: 10,
  },
  imageProduk: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  namaProduk: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.font,
  },
  hargaContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  hargaProduk: {},
  hargaAsliProduk: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.tertiary,
  },
  hargaCoretProduk: {
    color: COLORS.gray,
    fontWeight: "500",
    textDecorationLine: "line-through",
  },
  diskonProdukContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  diskonProduk: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginLeft: 15,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.diskon,
  },
  diskonProdukText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.white,
  },
});
