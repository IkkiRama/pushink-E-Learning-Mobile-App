import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { ref, onValue } from "firebase/database";

import { db } from "../../configs/firebase";
import {
  Navbar,
  BottomMenu,
  RekomendasiArtikel,
  ArtikelCard,
} from "../../components";
import { COLORS, SAFEAREAVIEW, images } from "../../constants";
const DetailArtikel = ({ route, navigation }) => {
  const [changeFontSize, setChangeFontSize] = useState(false);
  const [isLoadedImage, setIsLoadedImage] = useState(true);
  const [dataArtikel, setDataArtikel] = useState({});
  const dataArtikelKeys = Object.keys(dataArtikel);

  let artikelTerbaruKeys = [];
  const { artikel } = route.params;
  let artikelRekomendasiKeys = [];

  useEffect(() => {
    return onValue(ref(db, "Artikel"), (querySnapShot) => {
      let data = querySnapShot.val() || {};
      let semuaArtikel = { ...data };
      setDataArtikel(semuaArtikel);
    });
  }, []);

  dataArtikelKeys.map((key, index) => {
    if (index > 0 && index <= 7 && dataArtikel[key].judul !== artikel.judul) {
      artikelTerbaruKeys.push(key);
    }
    if (index > 7 && index <= 14 && dataArtikel[key].judul !== artikel.judul) {
      artikelRekomendasiKeys.push(key);
    }
    return true;
  });

  const ukuranFont = [
    {
      fontSize: 14,
      title: "Kecil",
    },
    {
      fontSize: 16,
      title: "Sedang",
    },
    {
      fontSize: 20,
      title: "Besar",
    },
  ];
  const [ukuranFontActive, setUkuranFontActive] = useState({
    fontSize: 16,
    title: "Sedang",
  });

  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar
        isBack={true}
        goBack={() => navigation.goBack()}
        isArtikel={true}
        changeFontSize={changeFontSize}
        setChangeFontSize={setChangeFontSize}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>
        {changeFontSize ? (
          <View style={styles.changeFontSize}>
            <View style={styles.changeFontSizeTitleContainer}>
              <MaterialIcons name="text-fields" size={30} color={COLORS.font} />
              <Text style={styles.changeFontSizeTitle}>Ukuran Font</Text>
            </View>
            <View style={styles.changeFontSizeButtonContainer}>
              {ukuranFont.map((ukuran, i) => (
                <Pressable
                  onPress={() => setUkuranFontActive(ukuran)}
                  key={i}
                  style={styles.changeFontSizeButton(
                    ukuranFontActive.title,
                    ukuran.title
                  )}
                >
                  <Text
                    style={styles.changeFontSizeText(
                      ukuranFontActive.title,
                      ukuran.title
                    )}
                  >
                    {ukuran.title}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        ) : (
          ""
        )}

        <View style={styles.containerWrapper}>
          {/* change font isArtikel */}
          <Text style={styles.titleArtikel}>{artikel.judul}</Text>
          <Text style={styles.authorArtikelContainer}>
            Ditulis oleh{" "}
            <Text style={styles.authorArtikel}>{artikel.penulis} </Text> tanggal{" "}
            {artikel.terbit}
          </Text>
          <View style={styles.kategoriContainer}>
            {artikel.kategori.map((kategoriArtikel, index) => (
              <View key={index} style={styles.kategori}>
                <Text style={styles.textKategori}>{kategoriArtikel}</Text>
              </View>
            ))}
          </View>
          <Image
            onLoad={() => setIsLoadedImage(false)}
            style={styles.imageArtikel}
            source={
              isLoadedImage ? images.defaultBanner : { uri: artikel.image }
            }
            resizeMode="contain"
          />
          <View style={styles.kontent}>
            <Text style={styles.textKonten(ukuranFontActive.fontSize)}>
              {artikel.konten}
            </Text>
          </View>

          <View style={styles.rekomendasiArtikelContainer}>
            <Text style={styles.sectionTitle}>Rekomendasi Artikel</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.rekomendasiArtikel}
              data={artikelRekomendasiKeys}
              renderItem={({ item }) => (
                <RekomendasiArtikel
                  artikel={dataArtikel[item]}
                  key={item}
                  navigation={navigation}
                />
              )}
            />

            <View style={styles.artikelBaru}>
              <Text style={styles.sectionTitle}>Artikel Terbaru</Text>
              {artikelTerbaruKeys.map((key) => (
                <ArtikelCard
                  key={key}
                  navigation={navigation}
                  artikel={dataArtikel[key]}
                />
              ))}
            </View>
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

  sectionTitle: {
    color: COLORS.font,
    fontWeight: "600",
    fontSize: 21,
    marginBottom: 10,
  },

  changeFontSize: {
    padding: 10,
    backgroundColor: COLORS.borderColor,
  },
  changeFontSizeTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  changeFontSizeTitle: {
    color: COLORS.font,
    fontWeight: "600",
    marginLeft: 10,
    fontSize: 21,
  },
  changeFontSizeButtonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  changeFontSizeButton: (ukuranFontActive, ukuran) => ({
    flex: 1,
    borderWidth: 1,
    borderColor: ukuranFontActive === ukuran ? COLORS.primary : COLORS.gray,
    borderRadius: 8,
    paddingVertical: 7,
    marginHorizontal: 5,
    alignItems: "center",
    backgroundColor:
      ukuranFontActive === ukuran ? COLORS.primary : COLORS.borderColor,
  }),
  changeFontSizeText: (ukuranFontActive, ukuran) => ({
    color: ukuranFontActive === ukuran ? COLORS.lightWhite : COLORS.font,
    fontWeight: "600",
    fontSize: 16,
  }),
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
    backgroundColor: COLORS.primary,
  },
  kontent: {},
  textKonten: (ukuranFontActive) => ({
    fontSize: ukuranFontActive,
    color: COLORS.font,
    lineHeight: 27,
    marginVertical: 5,
  }),
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

  rekomendasiArtikelContainer: {
    marginBottom: 20,
  },
  artikelBaru: {
    marginVertical: 10,
  },
  rekomendasiArtikel: {
    marginTop: 5,
  },
});
