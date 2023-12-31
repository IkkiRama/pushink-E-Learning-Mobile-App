import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { MaterialIcons } from "@expo/vector-icons";
import * as OpenAnything from "react-native-openanything";

import { COLORS, SAFEAREAVIEW, SHADOWS } from "../../constants";
import { BottomMenu, Navbar } from "../../components";
import { db } from "../../configs/firebase";

const Emagz = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [layanan, setLayanan] = useState({});
  const layananKeys = Object.keys(layanan);
  const minHeightPage = Dimensions.get("window").height;

  const getData = () =>
    onValue(ref(db, "E-Magz"), (querySnapShot) => {
      let data = querySnapShot.val() || {};
      let dataLayanan = { ...data };
      setLayanan(dataLayanan);
    });

  useEffect(() => getData(), []);

  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>
        <View style={styles.containerWrapper}>
          <View style={styles.container}>
            <Text style={styles.heading}>E-Magz</Text>
            <Text style={styles.subHeading}>
              Konten Kreatif Seputar Jurnalistik UNSOED
            </Text>
          </View>

          <View style={styles.fileContainer(minHeightPage)}>
            {/* Perfile */}
            {layananKeys.length > 0 ? (
              layananKeys.map((key) => (
                <Pressable
                  key={key}
                  onPress={() => OpenAnything.Pdf(layanan[key].link)}
                >
                  <View style={styles.layananContainer}>
                    <MaterialIcons
                      name="article"
                      size={45}
                      color={COLORS.gray}
                    />
                    <View style={styles.layananContainerText}>
                      <Text style={styles.layananTitleText} numberOfLines={1}>
                        {layanan[key].nama}
                      </Text>
                      <Text
                        style={styles.layananSubTitleText}
                        numberOfLines={1}
                      >
                        {`${layanan[key].tanggal} | ${layanan[key].jumlah_halaman} Halaman`}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              ))
            ) : (
              <ActivityIndicator size="large" color={COLORS.primary} />
            )}
          </View>
        </View>
      </ScrollView>
      <BottomMenu focused="Beranda" navigationHandle={navigation} />
    </SafeAreaView>
  );
};

export default Emagz;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  container: {
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 23,
    color: COLORS.white,
    fontWeight: "600",
    marginTop: 20,
  },
  subHeading: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "500",
    marginTop: 10,
  },
  fileContainer: (minHeightPage) => ({
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginTop: 20,
    minHeight: minHeightPage - 100,
  }),
  layananContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderColor: COLORS.borderColor,
    ...SHADOWS.medium,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.lightWhite,
  },
  layananContainerText: {
    width: "85%",
    paddingLeft: 10,
  },
  layananTitleText: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.font,
  },
  layananSubTitleText: {
    fontSize: 14,
    marginTop: 3,
  },
});
