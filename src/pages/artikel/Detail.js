import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SAFEAREAVIEW } from "../../constants";
import { Navbar } from "../../components";
import BottomMenu from "./../../components/common/BottomMenu";

const DetailArtikel = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar isBack={true} goBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>
        <View
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: COLORS.lightWhite,
          }}
        >
          <Text style={styles.titleArtikel}>
            Cara Membuat Auth Login Dengan Laravel
          </Text>

          <Text style={styles.authorArtikelContainer}>
            Ditulis oleh{" "}
            <Text style={styles.authorArtikel}>Rifki Romadhan</Text> 12 November
            2098
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
          />

          <View style={styles.kontent}>
            <Text style={styles.textKonten}>
              Pertumbuhan ekonomi adalah konsep yang sangat penting dalam studi
              ekonomi dan kebijakan publik. Ini mencerminkan perkembangan suatu
              negara atau wilayah dari segi produksi, pendapatan, dan
              kemakmuran. Artikel ini akan membahas definisi pertumbuhan
              ekonomi, faktor-faktor yang mempengaruhinya, serta dampaknya pada
              masyarakat secara lebih mendalam.
            </Text>
            <Text style={styles.headerKonten}>
              Definisi Pertumbuhan Ekonomi:
            </Text>
            <Text style={styles.textKonten}>
              Pertumbuhan ekonomi mengacu pada peningkatan nilai produk domestik
              bruto (PDB) suatu negara atau wilayah dalam suatu periode waktu
              tertentu. PDB mencakup nilai total barang dan jasa yang dihasilkan
              dalam perekonomian. Pertumbuhan ekonomi diukur dalam persentase
              dan merupakan indikator utama kesehatan ekonomi suatu negara.
              Peningkatan pertumbuhan ekonomi menunjukkan bahwa perekonomian
              sedang berkembang, sementara pertumbuhan yang rendah atau negatif
              dapat mengindikasikan perlambatan atau resesi.
            </Text>
            <Text style={styles.headerKonten}>
              Faktor-faktor yang Mempengaruhi Pertumbuhan Ekonomi:
            </Text>
            <Text style={styles.textKonten}></Text>
            <Text style={styles.headerKonten}>
              2. Melakukan Konfigurasi Database
            </Text>
          </View>
        </View>
      </ScrollView>
      <BottomMenu focused="Artikel" navigationHandle={navigation}></BottomMenu>
    </SafeAreaView>
  );
};

export default DetailArtikel;

const styles = StyleSheet.create({
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
    textAlign: "justify",
  },
  headerKonten: {
    marginVertical: 5,
    fontSize: 23,
    fontWeight: "700",
  },
});
