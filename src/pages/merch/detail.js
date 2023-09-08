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
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Foundation } from "@expo/vector-icons";

import { COLORS, SAFEAREAVIEW } from "../../constants";
import {
  Navbar,
  DetailMerchCarousel,
  MerchCard,
  RekomendasiProduk,
} from "../../components";
import numberFormat from "./../../utils/numberFormat";

const DetailMerch = ({ navigation }) => {
  const [isSelengkapnya, setIsSelengkapnya] = useState(false);
  const [merch_images, setMerch_images] = useState([
    {
      id: "i4Ko2tNO8oBD1d3occ98",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FMerch%2Fpaket2-1.jpeg?alt=media&token=d71b676a-d612-4064-aee3-157590bf0b78",
    },
    {
      id: "iFd4btUCDbOMUIUnrOCD",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FMerch%2Fpaket2-2.jpeg?alt=media&token=88f990fe-eea8-4d64-be78-1ad39b98a1d5",
    },
    {
      id: "Q4cUfTVGnVO80SlUx5t6",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FMerch%2Fpaket2-3.jpeg?alt=media&token=3487ff1a-688f-42b4-b798-e18d881ad9fc",
    },
  ]);
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
          <DetailMerchCarousel ImageKos={merch_images} />
          <View style={styles.container}>
            <Text style={styles.namaProduk} numberOfLines={2}>
              Paket 2 Gensoed Merch Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Facere, hic labore voluptatum distinctio eius
              impedit cumque odio recusandae? Voluptatem, animi.
            </Text>

            <View style={styles.hargaContainer}>
              <View style={styles.hargaProduk}>
                <Text numberOfLines={1} style={styles.hargaAsliProduk}>
                  {numberFormat(100000)}
                </Text>
                <View style={styles.diskonProdukContainer}>
                  <Text numberOfLines={1} style={styles.hargaCoretProduk}>
                    {numberFormat(345000)}
                  </Text>
                  <View style={styles.diskonProduk}>
                    <Text style={styles.diskonProdukText}>6%</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.deskripsiProdukContainer}>
              <Text
                numberOfLines={isSelengkapnya ? 0 : 3}
                style={styles.deskripsiProdukText}
              >{`Dengan jaket dan baju Gensoed "EcoVision" ini, kami menggabungkan gaya Gen Z yang kreatif dengan komitmen kami terhadap tujuan pembangunan berkelanjutan. Terbuat dari bahan ramah lingkungan yang berkualitas tinggi, jaket ini memberikan tampilan modern yang mendukung perubahan positif. Ketika Anda mengenakannya, Anda merayakan kreativitas dan berkontribusi pada perjalanan menuju terwujudnya Tujuan Pembangunan Berkelanjutan. Bersiaplah menjadi agen perubahan!\n\nPAKET GENSOED MERCH 2\n\nWhat will you get?\n- 1 pcs Jaket Gensoed\n- 2 pcs Kaos Gensoed (Pilih design)\n \nFREE RANDOM KEYRING AND STICKER\nSIZE HARAP DICANTUMKAN DI NOTES\n`}</Text>

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
              <FlatList
                style={styles.rekomendasiProduk}
                horizontal
                data={[1, 2, 3, 4]}
                renderItem={({ item }) => (
                  <RekomendasiProduk key={item} navigation={navigation} />
                )}
              />
            </View>

            {/* Mungkin anda suka */}
            <View style={styles.rekomendasiProdukContainer}>
              <Text style={styles.rekomendasiProdukTitle}>
                Mungkin anda suka
              </Text>
              <View style={styles.mungkinAndaSukaProduk}>
                <MerchCard navigation={navigation} />
                <MerchCard navigation={navigation} />
                <MerchCard navigation={navigation} />
                <MerchCard navigation={navigation} />
                <MerchCard navigation={navigation} />
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
        <Pressable style={styles.ctaBeliSekarang}>
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
