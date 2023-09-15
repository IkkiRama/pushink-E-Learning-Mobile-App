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
            <Text style={styles.textKonten}>
              Mendagri BEM FEB Universitas Jenderal Soedirman (Unsoed)
              Purwokerto berinisial AHM terseret kasus pelecehan seksual. AHM
              dipecah dari jabatannya dan terancam drop out (DO). Berikut
              sejumlah fakta soal kasus tersebut.
            </Text>
            <Text style={styles.headerKonten}>Dipecat dari BEM</Text>
            <Text style={styles.textKonten}>
              Kasus pelecehan seksual itu terungkap ke publik setelah akun
              Twitter @Unsoedfess1963 mengunggah salinan SK pemecatan AHM pada
              Minggu (5/3/2023). Dalam SK tersebut tertulis nama terang jabatan
              yang bersangkutan.'Secara resmi diberhentikan secara tidak hormat
              karena tindak pelecehan seksual yang dilakukan oleh yang
              bersangkutan. Surat ini berlaku mulai tanggal 5 Maret 2023,'
              sebagaimana tertulis di SK tersebut, dikutip detikJateng, Selasa
              (7/3/2023).
            </Text>
            <Text style={styles.textKonten}>
              Surat itu ditandatangani Presiden BEM FEB Unsoed 2023 Rafi
              Muhammad Warits.
            </Text>
            <Text style={styles.textKonten}>
              Saat dimintai konfirmasi, Rafi membenarkan pihaknya yang
              mengeluarkan surat tersebut.
            </Text>
            <Text style={styles.textKonten}>
              'Betul,' kata Rafi, Selasa (7/3).
            </Text>
            <Text style={styles.textKonten}>
              Namun Rafi menolak menjelaskan lebih lanjut terkait kasus
              tersebut. Dia menyampaikan kasus tersebut saat ini sudah ditangani
              oleh Satgas Pencegahan dan Penanganan Kekerasan Seksual (PPKS)
              Unsoed.'Untuk informasi lebih lanjut bisa ditanyakan kepada Satgas
              PPKS saja ya, semua informasi ada di sana,' ujarnya.
            </Text>
            <Text style={styles.textKonten}>
              'Sudah diserahkan penanganannya ke Satgas dan untuk pemulihan
              korban perlu tenang dan tidak mau banyak informasi terkait
              kasusnya,' lanjutnya.
            </Text>

            <Text style={styles.headerKonten}>Terancam DO</Text>
            <Text style={styles.textKonten}>
              AHM juga terancam dikeluarkan dari kampus atau DO. Hal itu
              disampaikan Ketua Satgas PPKS Unsoed, Tri Wuryaningsih.\nnNanti
              jika secara sah dia terbukti melakukan pelanggaran, karena kita
              kan diatur melalui Peraturan Menteri dan Peraturan Rektor ya, bila
              terbukti jenis pelanggarannya pelanggaran berat ya ancamannya
              adalah DO,' kata Tri saat dihubungi, Selasa (7/3).\nNamun, hal itu
              belum bisa disimpulkan mengingat psikologis korban masih belum
              stabil dan belum bisa memberikan keterangan penuh. Hingga saat
              ini, Satgas PPKS juga belum meminta keterangan dari pelaku.\nBelum
              semua disampaikan karena kan korban kondisinya masih belum siap
              secara mental, jadi kita belum bisa mengambil kesimpulan,
              jelasnya.\nMeski demikian, dia menyebut sejak dibentuk pada 1
              November 2022, Satgas PPKS Unsoed sudah menangani empat kasus.
              Dari empat kasus itu, satu mahasiswa sudah di-DO.\nIni bukan kasus
              pertama jadi sejak kami berdiri itu sudah ada empat kasus. (DO)
              Ada satu, akhir tahun 2022,' jelasnya.\nTri memastikan akan
              memproses pelaku sesuai prosedur yang ada. Korban juga sudah
              diberikan pendampingan dan akan diberikan layanan psikologi.\nPada
              intinya kami sudah terima laporan itu kemudian korban akan kita
              dampingi ya, need assessment juga, kita identifikasi
              kebutuhan-kebutuhan yang harus kami berikan kepada korban,
              pendampingan, dan pelakunya tentu kami akan proses,' jelas
              Tri.\nKorban disebut juga merupakan mahasiswa Unsoed. Kasus ini
              terjadi beberapa bulan lalu dan terungkap usai bercerita kepada
              temannya.\nTri mengatakan korban sempat takut untuk melapor. Dia
              mulai berani bercerita karena melihat pelaku terlihat tak merasa
              bersalah.\n'2022, tapi baru ya, di akhir, cuma dia karena memang
              takut gitu kalau ngomong dikiranya nggak percaya nanti dikiranya
              menyudutkan. Karena kan korban itu memang tidak bisa langsung
              seketika itu kemudian menyampaikan, tapi melihat kemudian
              pelakunya kayaknya tidak ada rasa bersalah, fine-fine saja, kan
              jadi gemes nah itu kemudian muncul untuk cerita ke temannya,'
              lanjutnya.
            </Text>
            <Text style={styles.textKategori}>
              Menurutnya, AHM akan direkomendasikan DO jika terbukti yang
              dilakukannya adalah pelanggaran berat.
            </Text>
            <Text style={styles.headerKonten}>Korban Masih Syok</Text>
            <Text style={styles.textKonten}>
              Ketua Satgas PPKS Unsoed, Tri Wuryaningsih mengatakan korban syok.
              'Kondisinya kan agak syok juga, kondisinya membutuhkan
              pendampingan lebih lanjut untuk layanan psikologisnya,'
              ujarnya.\nPihaknya mendapat laporan dari BEM FEB Unsoed beberapa
              waktu lalu bahwa korban sudah dimintai keterangan namun belum
              lengkap karena kondisinya masih belum stabil.\n'Kalau anak ini
              sudah siap memberikan keterangan penuh seperti apa nanti, baru
              kita untuk memanggil pelakunya,' jelasnya.
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
