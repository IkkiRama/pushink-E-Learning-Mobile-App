import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants";

const RekomendasiArtikel = ({ navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("DetailArtikel")}
      style={styles.rekomendasiArtikel}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FArtikel%2FArtikelSatu.jpg?alt=media&token=403be7ef-fe73-4d88-857b-5b604e72b46e",
        }}
        style={styles.imageArtikel}
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleArtikel} numberOfLines={3}>
          Ganjar, Prabowo, Anies Berebut Suara di Jawa Timur Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Unde, magni.
        </Text>
        <Text style={styles.tanggalArtikel}>Ditulis pada 12 November 2098</Text>
      </View>
    </Pressable>
  );
};

export default RekomendasiArtikel;

const styles = StyleSheet.create({
  rekomendasiArtikel: {
    marginHorizontal: 7,
    width: 200,
  },
  imageArtikel: {
    width: "100%",
    height: 100,
  },
  textContainer: {
    marginTop: 10,
  },
  titleArtikel: {
    fontSize: 16,
    color: COLORS.font,
    fontWeight: "600",
    marginBottom: 5,
  },
  tanggalArtikel: {
    color: COLORS.font,
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.7,
  },
});
