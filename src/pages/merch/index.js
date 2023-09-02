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
import { COLORS, SAFEAREAVIEW, SHADOWS } from "../../constants";
import { Navbar, BottomMenu, MerchCarousel } from "../../components";
import numberFormat from "./../../utils/numberFormat";

const Merch = ({ navigation }) => {
  const widthCarousel = Dimensions.get("window").width;
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar />
      <ScrollView>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>

        <View style={styles.containerWrapper}>
          <View style={styles.container}>
            {/* Carousel */}
            <View style={styles.carouselContainer}>
              <View style={styles.merchCarousel}>
                <MerchCarousel widthCarousel={(95 / 100) * widthCarousel} />
              </View>
            </View>
            {/* Produk */}
            <View style={styles.produkContainer}>
              <Pressable
                onPress={() => navigation.navigate("DetailMerch")}
                style={styles.perProduk}
              >
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FMerch%2Fpaket2-1.jpeg?alt=media&token=d71b676a-d612-4064-aee3-157590bf0b78",
                  }}
                  style={styles.imageProduk}
                />
                <View style={styles.infoProduk}>
                  <Text style={styles.namaProduk} numberOfLines={2}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, facere.
                  </Text>
                  <View style={styles.hargaContainer}>
                    <View style={styles.hargaProduk}>
                      <Text style={styles.hargaAsliProduk}>
                        {numberFormat(100000)}
                      </Text>
                      <Text style={styles.hargaCoretProduk}>
                        {numberFormat(345000)}
                      </Text>
                    </View>
                    <View style={styles.diskonProduk}>
                      <Text style={styles.hargaProduk}>6%</Text>
                    </View>
                  </View>
                </View>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("DetailMerch")}
                style={styles.perProduk}
              >
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FMerch%2Fpaket2-1.jpeg?alt=media&token=d71b676a-d612-4064-aee3-157590bf0b78",
                  }}
                  style={styles.imageProduk}
                />
                <View style={styles.infoProduk}>
                  <Text style={styles.namaProduk} numberOfLines={2}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    asperiores possimus, odit nisi ut ratione beatae aliquid
                    dolores officia repudiandae?
                  </Text>
                  <View style={styles.hargaContainer}>
                    <View style={styles.hargaProduk}>
                      <Text style={styles.hargaAsliProduk}>
                        {numberFormat(100000)}
                      </Text>
                      <Text style={styles.hargaCoretProduk}>
                        {numberFormat(345000)}
                      </Text>
                    </View>
                    <View style={styles.diskonProduk}>
                      <Text style={styles.hargaProduk}>6%</Text>
                    </View>
                  </View>
                </View>
              </Pressable>

              <Pressable
                onPress={() => navigation.navigate("DetailMerch")}
                style={styles.perProduk}
              >
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FMerch%2Fpaket2-1.jpeg?alt=media&token=d71b676a-d612-4064-aee3-157590bf0b78",
                  }}
                  style={styles.imageProduk}
                />
                <View style={styles.infoProduk}>
                  <Text style={styles.namaProduk} numberOfLines={2}>
                    Paket 2 Gensoed Merch
                  </Text>
                  <View style={styles.hargaContainer}>
                    <View style={styles.hargaProduk}>
                      <Text style={styles.hargaAsliProduk}>
                        {numberFormat(100000)}
                      </Text>
                      <Text style={styles.hargaCoretProduk}>
                        {numberFormat(345000)}
                      </Text>
                    </View>
                    <View style={styles.diskonProduk}>
                      <Text style={styles.hargaProduk}>6%</Text>
                    </View>
                  </View>
                </View>
              </Pressable>

              <Pressable
                onPress={() => navigation.navigate("DetailMerch")}
                style={styles.perProduk}
              >
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FMerch%2Fpaket2-1.jpeg?alt=media&token=d71b676a-d612-4064-aee3-157590bf0b78",
                  }}
                  style={styles.imageProduk}
                />
                <View style={styles.infoProduk}>
                  <Text style={styles.namaProduk} numberOfLines={2}>
                    Paket 2 Gensoed Merch
                  </Text>
                  <View style={styles.hargaContainer}>
                    <View style={styles.hargaProduk}>
                      <Text style={styles.hargaAsliProduk}>
                        {numberFormat(100000)}
                      </Text>
                      <Text style={styles.hargaCoretProduk}>
                        {numberFormat(345000)}
                      </Text>
                    </View>
                    <View style={styles.diskonProduk}>
                      <Text style={styles.hargaProduk}>6%</Text>
                    </View>
                  </View>
                </View>
              </Pressable>

              <Pressable
                onPress={() => navigation.navigate("DetailMerch")}
                style={styles.perProduk}
              >
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FMerch%2Fpaket2-1.jpeg?alt=media&token=d71b676a-d612-4064-aee3-157590bf0b78",
                  }}
                  style={styles.imageProduk}
                />
                <View style={styles.infoProduk}>
                  <Text style={styles.namaProduk} numberOfLines={2}>
                    Paket 2 Gensoed Merch
                  </Text>
                  <View style={styles.hargaContainer}>
                    <View style={styles.hargaProduk}>
                      <Text style={styles.hargaAsliProduk}>
                        {numberFormat(100000)}
                      </Text>
                      <Text style={styles.hargaCoretProduk}>
                        {numberFormat(345000)}
                      </Text>
                    </View>
                    <View style={styles.diskonProduk}>
                      <Text style={styles.hargaProduk}>6%</Text>
                    </View>
                  </View>
                </View>
              </Pressable>

              <Pressable
                onPress={() => navigation.navigate("DetailMerch")}
                style={styles.perProduk}
              >
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FMerch%2Fpaket2-1.jpeg?alt=media&token=d71b676a-d612-4064-aee3-157590bf0b78",
                  }}
                  style={styles.imageProduk}
                />
                <View style={styles.infoProduk}>
                  <Text style={styles.namaProduk} numberOfLines={2}>
                    Paket 2 Gensoed Merch
                  </Text>
                  <View style={styles.hargaContainer}>
                    <View style={styles.hargaProduk}>
                      <Text style={styles.hargaAsliProduk}>
                        {numberFormat(100000)}
                      </Text>
                      <Text style={styles.hargaCoretProduk}>
                        {numberFormat(345000)}
                      </Text>
                    </View>
                    <View style={styles.diskonProduk}>
                      <Text style={styles.hargaProduk}>6%</Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomMenu focused="Merch" navigationHandle={navigation}></BottomMenu>
    </SafeAreaView>
  );
};

export default Merch;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },

  carouselContainer: {
    marginVertical: 30,
    alignItems: "center",
  },

  merchCarousel: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },

  produkContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  perProduk: {
    margin: 5,
    elevation: 2,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.borderColor,
    backgroundColor: COLORS.lightWhite,
    width: "47%",
  },
  infoProduk: {
    padding: 10,
  },
  imageProduk: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  namaProduk: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.font,
  },
  hargaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  hargaProduk: {},
  hargaAsliProduk: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.merah,
  },
  hargaCoretProduk: {
    color: COLORS.font,
    fontWeight: "500",
    textDecorationLine: "line-through",
  },
  diskonProduk: {
    marginLeft: 15,
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  hargaProduk: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "600",
  },
});
