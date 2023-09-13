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
        <View style={styles.containerWrapper}>
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
            resizeMode="contain"
          />

          <View style={styles.kontent}>
            <Text style={styles.headerKonten}>
              Kemendikbud Dorong Perguruan Tinggi Perangi Kekerasan Seksual di
              Kampus
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
            <Text style={styles.subHeaderKonten}>
              2. Melakukan Konfigurasi Database
            </Text>

            <Text style={styles.textKonten}>
              {`Chatarina Muliana Girsang Inspektur Jenderal Kementerian Pendidikan dan Kebudayaan Republik Indonesia (Kemendikbud RI) menegaskan, tidak boleh ada kekerasan seksual di lingkup perguruan tinggi. \n\n\nOleh karena itu, ia menekankan pada seluruh Satuan Tugas Pencegahan dan Penanganan Kekerasan Seksual (Satgas PPKS) di setiap perguruan tinggi baik negeri maupun swasta agar terus bergerak mengatasi masalah tersebut. “Pencegahan ini jauh lebih penting untuk mencegah berulangnya kasus ini, dan dalam hal penanganan ini juga harus ada respons atas semua laporan-laporan yang dilaporkan,” ucapnya seusai launching dan diskusi program inovasi “Pengembangan dan Implementasi Indikator Kampus Bebas Kekerasan Seksual” di Universitas Surabaya (Ubaya) pada Rabu(9/8/2022). \n Untuk mengatasi masalah kekerasan seksual, ia
              menegaskan, perlu keterlibatan civitas akademik agar tidak
              menutup-nutupi dan memberikan kekuatan pada korban, sekaligus
              membantu speak up untuk menyelesaikan masalah tersebut. \n Ia
              mengatakan bahwa Satgas PPKS juga harus dapat meyakinkan pelapor
              dan korban dalam menindak melanjuti laporan, serta memberikan
              pemahaman terkait konsekuensi apa yang akan terjadi jika kasus
              justru ditutupi-tutupi. \n “Karena itu akan bisa menimbulkan
              korban-korban baru, dan akan mengganggu suasana pembelajaran,
              menimbulkan rasa tidak aman, tidak nyaman, berada di dekat pelaku
              dan lain sebagainya,” tuturnya. \n Sehingga yang menjadi tantangan
              saat ini, kata dia, yakni bagaimana bisa meyakinkan untuk
              melaporkan kasus kekerasan seksual tersebut. \n Sementara itu,
              Endah Triwijati Psikolog dari Satgas PPKS Ubaya mengatakan,
              diadakannya diskusi indikator kampus bebas kekerasan seksual
              tersebut merupakan bentuk penguatan serta evaluasi dalam
              pencegahan dan penanganan kekerasan seksual di kampus. \n “Sebagai
              upaya untuk bisa sebanyak mungkin mengungkapkan keadilan bagi
              korban dan mencegah keberulangan,” ujarnya. \n Dalam kegiatan
              tersebut, dihadiri oleh perwakilan Satgas PPKS dari berbagai
              perguruan tinggi yang ada di Surabaya, baik negeri maupun swasta.`}
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
    textAlign: "justify",
    marginVertical: 5,
  },
  headerKonten: {
    marginVertical: 5,
    fontSize: 23,
    fontWeight: "700",
  },
  subHeaderKonten: {
    marginVertical: 5,
    fontSize: 18,
    fontWeight: "500",
  },
});
