import {
  ActivityIndicator,
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

const LayananUnsoed = ({ navigation }) => {
  const [layanan, setLayanan] = useState({});
  const layananKeys = Object.keys(layanan);

  useEffect(() => {
    return onValue(ref(db, "Layanan Unsoed"), (querySnapShot) => {
      let data = querySnapShot.val() || {};
      let dataLayanan = { ...data };
      setLayanan(dataLayanan);
    });
  }, []);

  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar isBack={true} goBack={() => navigation.goBack()} />
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
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 23,
                color: COLORS.white,
                fontWeight: "600",
                marginTop: 20,
              }}
            >
              Layanan Unsoed
            </Text>

            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                fontWeight: "500",
                marginTop: 10,
              }}
            >
              Dapatkan informasi resmi tanpa takut hoax
            </Text>
          </View>

          <View
            style={{
              backgroundColor: COLORS.white,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingHorizontal: 10,
              paddingTop: 10,
              marginTop: 20,
            }}
          >
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

export default LayananUnsoed;

const styles = StyleSheet.create({
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
