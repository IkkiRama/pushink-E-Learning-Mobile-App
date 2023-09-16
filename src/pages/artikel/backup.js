import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { Fragment, useState } from "react";
import HTML from "react-native-render-html";
import { COLORS, SAFEAREAVIEW } from "../../constants";
import { Navbar } from "../../components";
import BottomMenu from "../../components/common/BottomMenu";

const DetailArtikel = ({ route, navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { artikel } = route.params;
  // const konten = artikel.konten;
  // const konten = JSON.parse(artikel.konten);
  const asu = JSON.parse(artikel.konten);
  console.log(typeof JSON.stringify(asu));
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar isBack={true} goBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>
        <View style={styles.containerWrapper}>
          <Text style={styles.titleArtikel} numberOfLines={3}>
            {artikel.judul}
          </Text>
          <Text style={styles.authorArtikelContainer}>
            Ditulis oleh{" "}
            <Text style={styles.authorArtikel}>{artikel.penulis}</Text>{" "}
            {artikel.terbit}
          </Text>
          <View style={styles.kategoriContainer}>
            <View style={styles.kategori}>
              <Text style={styles.textKategori}>Konsep Pelajaran</Text>
            </View>
            <View style={styles.kategori}>
              <Text style={styles.textKategori}>Kimia X</Text>
            </View>
            <View style={styles.kategori}>
              <Text style={styles.textKategori}>Kelas 10</Text>
            </View>
            <View style={styles.kategori}>
              <Text style={styles.textKategori}>SMA</Text>
            </View>
          </View>
          <Image
            style={styles.imageArtikel}
            source={require("../../../assets/Images/Artikel/BABI.jpg")}
            resizeMode="contain"
          />
          {/* <View style={styles.kontent}>{konten}</View> */}

          <Text style={styles.textKonten}></Text>
          <Text style={styles.textKonten}></Text>
          <Text style={styles.textKonten}></Text>
          <Text style={styles.textKonten}></Text>
          <Text style={styles.textKonten}></Text>
          <Text style={styles.textKonten}></Text>
          <Text style={styles.textKonten}></Text>
          <Text style={styles.textKonten}></Text>
        </View>
      </ScrollView>
      <BottomMenu focused="Artikel" navigationHandle={navigation}></BottomMenu>
    </SafeAreaView>
  );
};

export default DetailArtikel;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.lightWhite,
  },
  titleArtikel: {
    fontWeight: "800",
    fontSize: 28,
    lineHeight: 32,
    color: COLORS.font,
    marginBottom: 5,
  },
  authorArtikelContainer: {
    color: COLORS.font,
    fontSize: 14,
    fontWeight: "500",
  },
  authorArtikel: {
    color: COLORS.secondary,
    fontWeight: "600",
  },
  kategoriContainer: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },
  kategori: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: COLORS.kategoriCOlor,
    margin: 5,
    borderRadius: 5,
  },
  textKategori: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 13,
  },
  imageArtikel: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginVertical: 10,
  },
  kontent: {},
  textKonten: {
    fontSize: 16,
    color: COLORS.font,
    lineHeight: 27,
    marginVertical: 5,
  },
  headerKonten: {
    marginVertical: 5,
    fontSize: 23,
    fontWeight: "700",
    color: COLORS.font,
  },
  subHeaderKonten: {
    marginVertical: 5,
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.font,
  },
});
