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
import { Navbar, DetailMerchCarousel } from "../../components";
import numberFormat from "./../../utils/numberFormat";

const DetailMerch = ({ navigation }) => {
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
      <ScrollView>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>

        <View style={styles.containerWrapper}>
          <DetailMerchCarousel ImageKos={merch_images} />
          <View style={styles.container}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailMerch;

const styles = StyleSheet.create({});
