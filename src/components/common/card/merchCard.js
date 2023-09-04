import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

import { COLORS } from "../../../constants";

const MerchCard = ({ navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("DetailMerch")}
      style={styles.perProduk}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FMerch%2Fpaket2-1.jpeg?alt=media&token=d71b676a-d612-4064-aee3-157590bf0b78",
        }}
        style={styles.imageProduk}
      />
      <View style={styles.infoProduk}>
        <Text style={styles.namaProduk} numberOfLines={2}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          facere.
        </Text>
        <View style={styles.hargaContainer}>
          <View style={styles.hargaProduk}>
            <Text numberOfLines={1} style={styles.hargaAsliProduk}>
              {numberFormat(100000)}
            </Text>
            <View style={styles.diskonProdukContainer}>
              <Text numberOfLines={1} style={styles.hargaCoretProduk}>
                {numberFormat(345000)}
              </Text>
              <View style={styles.diskonProduk}>
                <Text style={styles.diskonProdukText}>6%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MerchCard;

const styles = StyleSheet.create({
  perProduk: {
    margin: 5,
    elevation: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.borderColor,
    backgroundColor: COLORS.lightWhite,
    width: "47%",
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
