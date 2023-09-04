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
import { Navbar, BottomMenu, MerchCarousel, MerchCard } from "../../components";
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
              <MerchCard navigation={navigation} />
              <MerchCard navigation={navigation} />
              <MerchCard navigation={navigation} />
              <MerchCard navigation={navigation} />
              <MerchCard navigation={navigation} />
              <MerchCard navigation={navigation} />
              <MerchCard navigation={navigation} />
              <MerchCard navigation={navigation} />
              <MerchCard navigation={navigation} />
              <MerchCard navigation={navigation} />
              <MerchCard navigation={navigation} />
              <MerchCard navigation={navigation} />
              <MerchCard navigation={navigation} />
              <MerchCard navigation={navigation} />
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
});
