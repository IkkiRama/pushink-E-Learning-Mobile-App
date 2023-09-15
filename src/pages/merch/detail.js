import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  Pressable,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Foundation } from "@expo/vector-icons";
import * as OpenAnything from "react-native-openanything";

import { db } from "../../configs/firebase";
import numberFormat from "./../../utils/numberFormat";
import { COLORS, SAFEAREAVIEW } from "../../constants";
import {
  Navbar,
  DetailMerchCarousel,
  MerchCard,
  RekomendasiProduk,
} from "../../components";

const DetailMerch = ({ route, navigation }) => {
  const [merch, setMerch] = useState({});
  const merchKeys = Object.keys(merch);
  const [isSelengkapnya, setIsSelengkapnya] = useState(false);
  const { merchData, hargaCoretProduk, diskonProduk, isFromHome } =
    route.params;
  let merchRekomendasiKeys = [];
  let merchMungkinKamuSukaKeys = [];

  useEffect(() => {
    return onValue(ref(db, "Merch"), (querySnapShot) => {
      let data = querySnapShot.val() || {};
      let dataMerch = { ...data };
      setMerch(dataMerch);
    });
  }, []);

  merchKeys.map((key, index) => {
    if (merch[key].nama !== merchData.nama && index <= 5) {
      merchRekomendasiKeys.push(key);
    }
    if (merch[key].nama !== merchData.nama && index >= 5) {
      merchMungkinKamuSukaKeys.push(key);
    }
    return true;
  });

  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar
        isBack={true}
        goBack={() =>
          isFromHome
            ? navigation.navigate("Beranda")
            : navigation.navigate("Merch")
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>

        <View style={styles.containerWrapper}>
          <DetailMerchCarousel ImageKos={merchData.images} />
          <View style={styles.container}>
            <Text style={styles.namaProduk} numberOfLines={2}>
              {merchData.nama}
            </Text>

            <View style={styles.hargaContainer}>
              <View style={styles.hargaProduk}>
                <Text numberOfLines={1} style={styles.hargaAsliProduk}>
                  {numberFormat(merchData.harga)}
                </Text>
                <View style={styles.diskonProdukContainer}>
                  <Text numberOfLines={1} style={styles.hargaCoretProduk}>
                    {numberFormat(hargaCoretProduk)}
                  </Text>
                  <View style={styles.diskonProduk}>
                    <Text style={styles.diskonProdukText}>
                      {diskonProduk.toFixed(0)}%
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.deskripsiProdukContainer}>
              <Text
                numberOfLines={isSelengkapnya ? 0 : 3}
                style={styles.deskripsiProdukText}
              >
                {merchData.deskripsi}
              </Text>

              <LinearGradient
                colors={
                  isSelengkapnya
                    ? ["#ffffff90", "#F3F4F8"]
                    : ["#ffffff60", "#ffffff80", "#ffffff90", "#F3F4F8"]
                }
                style={
                  isSelengkapnya
                    ? {
                        paddingTop: 10,
                      }
                    : {
                        paddingTop: 40,
                        marginTop: -30,
                      }
                }
              >
                <Pressable
                  style={styles.ctaSelengkapnya}
                  onPress={() => setIsSelengkapnya(!isSelengkapnya)}
                >
                  <Text style={styles.ctaSelengkapnyaText}>
                    {isSelengkapnya
                      ? `Lihat lebih sedikit`
                      : `Lihat selengkapnya`}
                  </Text>
                </Pressable>
              </LinearGradient>
            </View>

            <View style={styles.merchProfileContainer}>
              {/* Images */}
              <Image
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FMerch%2Fgensoed_logo.jpeg?alt=media&token=84d01ff4-bdaa-4f65-97e7-9804352e6388",
                }}
                style={styles.merchFoto}
              />

              {/* Informasi Profile */}
              <View style={styles.merchProfile}>
                <Text numberOfLines={1} style={styles.informasiMerchText}>
                  Gensoed Merch
                </Text>
                <View style={styles.lokasiMerch}>
                  <Foundation name="marker" size={20} color={COLORS.font} />
                  <Text style={styles.lokasiMerchText} numberOfLines={1}>
                    Purwokerto
                  </Text>
                </View>
              </View>
            </View>

            {/* Rekomendasi Produk */}
            <View style={styles.rekomendasiProdukContainer}>
              <Text style={styles.rekomendasiProdukTitle}>
                Rekomendasi Produk
              </Text>
              {merchRekomendasiKeys.length > 0 ? (
                <FlatList
                  style={styles.rekomendasiProduk}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={merchRekomendasiKeys}
                  renderItem={({ item }) => (
                    <RekomendasiProduk
                      key={item}
                      navigation={navigation}
                      merchData={merch[item]}
                    />
                  )}
                />
              ) : (
                <ActivityIndicator size="large" color={COLORS.primary} />
              )}
            </View>

            {/* Mungkin anda suka */}
            <View style={styles.rekomendasiProdukContainer}>
              <Text style={styles.rekomendasiProdukTitle}>
                Mungkin anda suka
              </Text>
              <View style={styles.mungkinAndaSukaProduk}>
                {merchMungkinKamuSukaKeys.length > 0 ? (
                  merchMungkinKamuSukaKeys.map((key) => (
                    <MerchCard
                      key={key}
                      navigation={navigation}
                      merchData={merch[key]}
                    />
                  ))
                ) : (
                  <ActivityIndicator size="large" color={COLORS.primary} />
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.ctaContainer}>
        {/* Chat */}
        <Pressable style={styles.ctaChat}>
          <Ionicons
            name="chatbox-ellipses-outline"
            size={24}
            color={COLORS.font}
          />
        </Pressable>
        {/* CTA to link */}
        <Pressable
          style={styles.ctaBeliSekarang}
          onPress={() => OpenAnything.Web(merchData.link)}
        >
          <Text style={styles.ctaBeliSekarangText}>Beli Sekarang</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default DetailMerch;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    paddingBottom: 20,
  },
  namaProduk: {
    fontSize: 23,
    fontWeight: "600",
    color: COLORS.font,
    lineHeight: 27,
    paddingHorizontal: 10,
  },
  hargaContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  hargaAsliProduk: {
    fontSize: 23,
    fontWeight: "600",
    color: COLORS.tertiary,
  },
  diskonProdukContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  hargaCoretProduk: {
    color: COLORS.gray,
    fontWeight: "500",
    fontSize: 15,
    textDecorationLine: "line-through",
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
  deskripsiProdukContainer: {
    marginTop: 10,
  },
  deskripsiProdukText: {
    color: COLORS.font,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 23,
    paddingHorizontal: 10,
  },

  merchProfileContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  merchFoto: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
  },
  merchProfile: {
    width: "40%",
  },
  informasiMerchText: {
    width: "100%",
    fontSize: 20,
    color: COLORS.font,
    fontWeight: "500",
  },
  lokasiMerch: {
    flexDirection: "row",
    alignItems: "center",
  },
  lokasiMerchText: {
    marginLeft: 5,
    color: COLORS.font,
    fontSize: 16,
    fontWeight: "400",
  },

  rekomendasiProduk: {
    paddingBottom: 5,
    marginBottom: 10,
  },

  rekomendasiProdukTitle: {
    paddingHorizontal: 10,
    color: COLORS.font,
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },
  mungkinAndaSukaProduk: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  ctaSelengkapnya: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: COLORS.borderColor,
    borderBottomColor: COLORS.borderColor,
  },
  ctaSelengkapnyaText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "600",
  },

  ctaContainer: {
    padding: 10,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
  },
  ctaChat: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.gray,
  },
  ctaBeliSekarang: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    marginLeft: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.primary,
  },
  ctaBeliSekarangText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.lightWhite,
  },
});
