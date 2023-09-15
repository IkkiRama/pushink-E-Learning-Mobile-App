import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants";

const ArtikelCard = ({ navigation, artikel }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("DetailArtikel", { artikel })}
      style={styles.artikel}
    >
      <Image
        source={{
          uri: artikel.image,
        }}
        style={styles.imageArtikel}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleArtikel} numberOfLines={3}>
          {artikel.judul}
        </Text>
        <Text style={styles.tanggalArtikel}>Ditulis pada {artikel.terbit}</Text>
      </View>
    </Pressable>
  );
};

export default ArtikelCard;

const styles = StyleSheet.create({
  artikel: {
    flexDirection: "row",
    marginVertical: 7,
  },
  imageArtikel: {
    width: "40%",
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  titleArtikel: {
    color: COLORS.font,
    fontSize: 19,
    fontWeight: "600",
    lineHeight: 25,
  },
  tanggalArtikel: {
    color: COLORS.font,
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.7,
  },
});
