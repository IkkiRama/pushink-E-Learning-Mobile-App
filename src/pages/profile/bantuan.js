import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import * as OpenAnything from "react-native-openanything";
import { FontAwesome5, FontAwesome, Feather } from "@expo/vector-icons";

import { db } from "../../configs/firebase";
import { COLORS, SAFEAREAVIEW } from "../../constants";
import { Navbar, BottomMenu } from "../../components";

const Bantuan = ({ navigation }) => {
  const auth = getAuth();
  let userLogin;
  const [dataUser, setDataUser] = useState({});
  const dataUserKeys = Object.keys(dataUser);

  useEffect(() => {
    if (auth.currentUser == null) {
      Alert.alert("Kamu belum login, silahkan login terlebih dahulu");
      return navigation.replace("Login");
    } else {
      return onValue(ref(db, "User"), (querySnapShot) => {
        let data = querySnapShot.val() || {};
        let dataUser = { ...data };
        setDataUser(dataUser);
      });
    }
  }, []);

  dataUserKeys.map((key) => {
    if (dataUser[key].email === auth.currentUser.email) {
      JSON.stringify((userLogin = dataUser[key]));
    }
  });
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar
        isBack={true}
        goBack={() => navigation.goBack()}
        isTitle="Bantuan"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>

        <View style={styles.containerWrapper}>
          <View style={styles.container}>
            <Text style={styles.bantuanTitle}>
              Kami siap melayani kamu 24 jam setiap hari. Pilih salah satu
              layanan yang pas untuk solusi kendalamu.
            </Text>

            {/* Bantuan */}
            <View style={styles.bantuanWrapper}>
              <Pressable
                onPress={() =>
                  OpenAnything.Open(
                    `https://api.whatsapp.com/send/?phone=%2B6282133320489&text=Hallo%2C++nama+saya+${userLogin.nama}%2C+saya+ingin+menyampaikan+keluhan+saya+mengenai+aplikasi+Pushink`
                  )
                }
                style={styles.perBantuan}
              >
                <View style={styles.perBantuanTextContainer}>
                  <View style={styles.perBantuanTitleContainer}>
                    <FontAwesome5
                      name="whatsapp"
                      size={20}
                      color={COLORS.font}
                    />
                    <Text style={styles.perBantuanTitle}>WhatsApp</Text>
                  </View>
                  <Text style={styles.perBantuanText}>
                    Kirim pesan ke Customer Care
                  </Text>
                </View>
                <FontAwesome
                  name="chevron-right"
                  size={20}
                  color={COLORS.font}
                />
              </Pressable>

              <Pressable
                onPress={() =>
                  OpenAnything.Open("https://www.instagram.com/george_ikki/")
                }
                style={styles.perBantuan}
              >
                <View style={styles.perBantuanTextContainer}>
                  <View style={styles.perBantuanTitleContainer}>
                    <FontAwesome
                      name="instagram"
                      size={20}
                      color={COLORS.font}
                    />
                    <Text style={styles.perBantuanTitle}>Instagram</Text>
                  </View>
                  <Text style={styles.perBantuanText}>
                    Kirim pesan lewat Instagram
                  </Text>
                </View>
                <FontAwesome
                  name="chevron-right"
                  size={20}
                  color={COLORS.font}
                />
              </Pressable>

              <Pressable
                onPress={() => OpenAnything.Call("+6282133320489")}
                style={styles.perBantuan}
              >
                <View style={styles.perBantuanTextContainer}>
                  <View style={styles.perBantuanTitleContainer}>
                    <FontAwesome name="phone" size={20} color={COLORS.font} />
                    <Text style={styles.perBantuanTitle}>Telepon</Text>
                  </View>
                  <Text style={styles.perBantuanText}>082133320489</Text>
                </View>
                <FontAwesome
                  name="chevron-right"
                  size={20}
                  color={COLORS.font}
                />
              </Pressable>

              <Pressable
                onPress={() =>
                  OpenAnything.Email(
                    "georgeikkirama@gmail.com",
                    "Hallo, saya ingin sampaikan keluhan saya di aplikasi pushink!",
                    `Hallo, nama saya ${userLogin.nama}, saya ingin menyampaikan bahwa di aplikasi Pushink itu .....`
                  )
                }
                style={styles.perBantuan}
              >
                <View style={styles.perBantuanTextContainer}>
                  <View style={styles.perBantuanTitleContainer}>
                    <FontAwesome
                      name="envelope"
                      size={20}
                      color={COLORS.font}
                    />
                    <Text style={styles.perBantuanTitle}>Email</Text>
                  </View>
                  <Text style={styles.perBantuanText}>
                    georgeikkirama@gmail.com
                  </Text>
                </View>
                <FontAwesome
                  name="chevron-right"
                  size={20}
                  color={COLORS.font}
                />
              </Pressable>

              <Pressable
                onPress={() => navigation.navigate("LaporEror")}
                style={styles.perBantuan}
              >
                <View style={styles.perBantuanTextContainer}>
                  <View style={styles.perBantuanTitleContainer}>
                    <Feather
                      name="alert-triangle"
                      size={20}
                      color={COLORS.font}
                    />
                    <Text style={styles.perBantuanTitle}>Lapor eror</Text>
                  </View>
                  <Text style={styles.perBantuanText}>
                    Kirim laporan erornya ke Customer Care
                  </Text>
                </View>
                <FontAwesome
                  name="chevron-right"
                  size={20}
                  color={COLORS.font}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomMenu focused="Profile" navigationHandle={navigation} />
    </SafeAreaView>
  );
};

export default Bantuan;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  bantuanTitle: {
    fontSize: 15,
    color: COLORS.font,
  },
  bantuanWrapper: {
    marginTop: 20,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 8,
    elevation: 1,
  },
  perBantuan: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBlockColor: COLORS.borderColor,
  },
  perBantuanTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  perBantuanTextContainer: {},
  perBantuanTitle: {
    color: COLORS.font,
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 10,
  },
  perBantuanText: {
    color: COLORS.font,
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 30,
  },
});
