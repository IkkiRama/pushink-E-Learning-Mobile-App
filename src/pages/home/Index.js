import { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import {
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { getAuth } from "firebase/auth";
import { ref, onValue } from "firebase/database";

import { db } from "../../configs/firebase";
import {
  BottomMenu,
  Fiturs,
  Navbar,
  RekomendasiKos,
  RekomendasiProduk,
} from "../../components";
import numberFormat from "../../utils/numberFormat";
import Carousel from "./../../components/carousel/index";
import { COLORS, SAFEAREAVIEW } from "../../constants";

const Home = ({ navigation }) => {
  const auth = getAuth();
  let userLogin;
  const [dataUser, setDataUser] = useState({});
  const dataUserKeys = Object.keys(dataUser);

  const [Merchandise, setMerchandise] = useState({});
  const MerchandiseKeys = Object.keys(Merchandise);
  let showMerchandiseKeys = [];

  const [dataKos, setDataKos] = useState([]);

  useEffect(() => {
    if (auth.currentUser !== null) {
      onValue(ref(db, "User"), (querySnapShot) => {
        let data = querySnapShot.val() || {};
        let dataUser = { ...data };
        setDataUser(dataUser);
      });
    } else {
      onValue(ref(db, "Merch"), (querySnapShot) => {
        let data = querySnapShot.val() || {};
        let dataMerch = { ...data };
        setMerchandise(dataMerch);
      });

      fetch("https://api.bem-unsoed.com/api/kost")
        .then((response) => response.json())
        .then((result) => setDataKos(result));
    }
  }, []);

  MerchandiseKeys.map((key, index) => {
    if (index <= 5) {
      showMerchandiseKeys.push(key);
    }
    return true;
  });

  dataUserKeys.map((key) => {
    if (dataUser[key].email === auth.currentUser.email) {
      JSON.stringify((userLogin = dataUser[key]));
    }
  });

  const [SeriesArtikel, setSeriesArtikel] = useState([
    {
      image: require("../../../assets/Images/Artikel/Series1.jpg"),
      nama: "Mengupas Tuntas Perkembangan Teknologi Terkini",
      jumlah: 20,
    },
    {
      image: require("../../../assets/Images/Artikel/series2.jpeg"),
      nama: "Menggali Potensi Bisnis Online: Strategi dan Tips Sukses",
      jumlah: 24,
    },

    {
      image: require("../../../assets/Images/Artikel/series3.jpeg"),
      nama: "Membangun Karir di Era Digital: Tantangan dan Peluang",
      jumlah: 44,
    },

    {
      image: require("../../../assets/Images/Artikel/series4.jpg"),
      nama: "Menjelajahi Budaya Populer Dunia: Film, Musik, dan Game",
      jumlah: 17,
    },

    {
      image: require("../../../assets/Images/Artikel/BABI.jpg"),
      nama: "Membangun Kemandirian Finansial: Tips dan Trik Mengelola Uang",
      jumlah: 19,
    },

    {
      image: require("../../../assets/Images/Artikel/Series6.jpg"),
      nama: "Menjaga Kesehatan Mental di Tengah Kesibukan Modern",
      jumlah: 31,
    },

    {
      image: require("../../../assets/Images/Artikel/Series7.jpg"),
      nama: "Membangun Hidup yang Berkelanjutan: Ide dan Inovasi Ramah Lingkungan",
      jumlah: 42,
    },
  ]);

  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>

        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
          }}
        >
          <View
            style={{
              paddingBottom: 20,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: COLORS.white,
                fontWeight: "600",
                marginTop: 20,
              }}
            >
              {dataUserKeys.length === 0
                ? "Hii, Selamat Datang 👋"
                : `Hii, ${userLogin?.nama}👋`}
            </Text>
          </View>

          {/* slider */}
          <View
            style={{
              backgroundColor: COLORS.white,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              padding: 10,
              marginTop: 50,
            }}
          >
            <Carousel></Carousel>

            {/* Fiturs */}
            <Fiturs navigation={navigation}></Fiturs>

            {/* Series Artikel */}
            <View style={{ marginTop: 20 }}>
              <Text style={styles.headerSection}>Series Artikel</Text>
              <Text style={styles.paragrafSection}>
                Nikmati Series Artikel dari Unsoed
              </Text>

              <FlatList
                data={SeriesArtikel}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 15 }}
                renderItem={({ item }) => (
                  <Pressable style={{ margin: 5 }}>
                    <ImageBackground
                      source={item.image}
                      resizeMode="cover"
                      style={{
                        width: 170,
                        height: 250,
                        overflow: "hidden",
                        justifyContent: "flex-end",
                      }}
                      imageStyle={{ borderRadius: 10 }}
                    >
                      <LinearGradient
                        colors={[
                          "transparent",
                          "#3d3d3d",
                          "#3a3a3a",
                          "#303030",
                        ]}
                        style={{
                          width: "100%",
                          height: 170,
                          padding: 10,
                          paddingTop: 60,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            color: COLORS.white,
                            fontWeight: "700",
                          }}
                          numberOfLines={2}
                        >
                          {item.nama}
                        </Text>
                        <Text
                          style={{
                            marginTop: 7,
                            fontSize: 12,
                            fontWeight: "600",
                            color: COLORS.white,
                          }}
                        >
                          {item.jumlah} Artikel
                        </Text>
                      </LinearGradient>
                    </ImageBackground>
                  </Pressable>
                )}
              ></FlatList>
            </View>

            {/* Sekarang Unsoed Dalam Genggamanmu */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: "60%" }}>
                <Text
                  style={{
                    color: COLORS.font,
                    fontSize: 23,
                    fontWeight: "700",
                    marginBottom: 10,
                  }}
                >
                  #UnsoedInYourHand
                </Text>
                <Text
                  style={{
                    color: COLORS.font,
                    fontSize: 15,
                    fontWeight: "400",
                  }}
                >
                  Menapak Jejak Unsoed Melalui Layar Genggam Anda
                </Text>
              </View>
              <View style={{ width: "40%" }}>
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2Fsudirman_bg_reverse.png?alt=media&token=f65d9aed-b981-460e-a790-3d82c57a200e",
                  }}
                  resizeMode="contain"
                  style={{ width: "100%", height: 150 }}
                />
              </View>
            </View>

            {/* Merch */}
            <View style={{ marginTop: 20 }}>
              <Text style={styles.headerSection}>Gensoed Merch</Text>
              <Text style={styles.paragrafSection}>
                Beli merchandise spesial dari BEM UNSOED
              </Text>

              {MerchandiseKeys.length > 0 ? (
                <FlatList
                  data={showMerchandiseKeys}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ marginTop: 15 }}
                  renderItem={({ item, index }) => (
                    <RekomendasiProduk
                      key={item}
                      navigation={navigation}
                      merchData={Merchandise[item]}
                      isFromHome={true}
                    />
                  )}
                ></FlatList>
              ) : (
                <ActivityIndicator size="large" color={COLORS.primary} />
              )}
            </View>
          </View>
        </View>

        {/* Podcast */}
        <View
          style={{
            marginTop: 20,
            paddingBottom: 20,
            backgroundColor: COLORS.primary,
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 22,
              paddingTop: 10,
              paddingBottom: 0,
              color: COLORS.white,
            }}
          >
            Rekomendasi Kos
          </Text>
          <Text style={{ fontSize: 14, color: COLORS.white }}>
            Temukan kos-kosan terdekat tanpa harus ada rasa khawatir
          </Text>

          {dataKos.length > 0 ? (
            <FlatList
              data={[1, 2, 3, 4]}
              horizontal
              style={{ marginTop: 15 }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ index }) => (
                <RekomendasiKos kos={dataKos[index]} navigation={navigation} />
              )}
            ></FlatList>
          ) : (
            <ActivityIndicator size="large" color={COLORS.primary} />
          )}
        </View>
      </ScrollView>
      <BottomMenu focused="Beranda" navigationHandle={navigation} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerSection: {
    fontWeight: "700",
    fontSize: 22,
    color: COLORS.font,
  },

  paragrafSection: { fontSize: 14, fontWeight: "500", color: COLORS.gray },
});
