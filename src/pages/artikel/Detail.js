import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { COLORS, SAFEAREAVIEW } from "../../constants";
import { Navbar } from "../../components";
import BottomMenu from "./../../components/common/BottomMenu";

const DetailArtikel = ({ navigation }) => {
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar isBack={true} goBack={() => navigation.goBack()} />
      <ScrollView>
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

            <View style={styles.kategori}>
              <Text style={styles.textKategori}>Konsep Pelajaran</Text>
            </View>
            <View style={styles.kategori}>
              <Text style={styles.textKategori}>Kimia X</Text>
            </View>
          </View>

          <Image
            style={styles.imageArtikel}
            source={require("../../../assets/Images/Artikel/BABI.jpg")}
          />

          <View style={styles.kontent}>
            <Text style={styles.textKonten}>
              Untuk membuat laravel blog, inilah beberapa langkah yang perlu
              Anda lakukan:
            </Text>
            <Text style={styles.headerKonten}>
              1. Melakukan Instalasi Laravel
            </Text>
            <Text style={styles.textKonten}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio nulla cumque autem porro omnis provident illo
              consequuntur architecto. Animi dolore repudiandae totam laboriosam
              voluptas rerum labore, velit tenetur? Tempore excepturi nihil
              quisquam quo dicta nobis officiis fugit, blanditiis molestiae
              omnis minus. Recusandae sit aliquid ullam eos iure sint maxime
              veritatis numquam nihil doloribus, quam totam odit aperiam amet
              voluptates adipisci mollitia eligendi! Error architecto, cumque
              officia animi a ex tenetur numquam inventore adipisci deserunt
              eligendi saepe cupiditate in, atque provident sequi, nesciunt
              culpa. Dolores mollitia quam atque aliquid exercitationem eius
              officiis tempora culpa cumque molestias! Id deserunt possimus
              perspiciatis placeat.
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
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 32,
    color: COLORS.font,
    marginBottom: 5,
  },
  authorArtikelContainer: {
    color: COLORS.font,
    fontSize: 15,
    fontWeight: "400",
  },
  authorArtikel: {
    color: COLORS.secondary,
    fontWeight: "600",
  },
  kategoriContainer: {},
  kategori: {},
  textKategori: {},
  imageArtikel: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginVertical: 10,
  },
  kontent: {},
  textKonten: {},
  headerKonten: {},
  textKonten: {},
});
