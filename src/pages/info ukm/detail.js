import {
  Text,
  View,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Navbar } from "../../components";
import { COLORS, SAFEAREAVIEW, images } from "../../constants";
const DetailUKM = ({ route, navigation }) => {
  const { ukm } = route.params;
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
          <Image
            source={{ uri: ukm.image }}
            style={styles.imageUKM}
            resizeMode="contain"
          />

          <View style={styles.UKMProfil}>
            <Text style={styles.namaUKM}>{ukm.nama}</Text>
            <Text style={styles.deskripsiSingkatUKM}>{ukm.deskripsi}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailUKM;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
  },
  container: {
    height: 200,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: COLORS.primary,
  },

  imageUKM: {
    height: 300,
    width: "100%",
    backgroundColor: COLORS.lightWhite,
  },
  UKMProfil: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  namaUKM: {
    fontSize: 23,
    fontWeight: "600",
    color: COLORS.font,
  },
  deskripsiSingkatUKM: {
    fontSize: 16,
    fontWeight: "400",
    color: COLORS.font,
    marginTop: 10,
  },
});
