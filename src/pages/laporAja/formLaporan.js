import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
  Pressable,
  Linking,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from "react-native";
import { getAuth } from "firebase/auth";
import { Ionicons } from "@expo/vector-icons";
import { ref, push, onValue } from "firebase/database";

import { db } from "../../configs/firebase";
import { Navbar, BottomMenu } from "../../components";
import { COLORS, SAFEAREAVIEW } from "../../constants";

const FormLaporan = ({ navigation }) => {
  const auth = getAuth();
  let userLogin;
  const [dataUser, setDataUser] = useState({});
  const dataUserKeys = Object.keys(dataUser);

  const [nama, setNama] = useState("");
  const [nomerKorban, setNomerKorban] = useState("");
  const [kronologi, setKronologi] = useState("");

  const reset = () => {
    setNama("");
    setKronologi("");
    setNomerKorban("");
  };

  const SubmitLaporan = () => {
    if (
      nama.trim() === "" ||
      kronologi.trim() === "" ||
      nomerKorban.trim() === ""
    ) {
      Alert.alert("Error", "Harap isi semua data!");
    } else {
      push(ref(db, "Laporan Pelecehan Seksual"), {
        nama,
        "Nomer Korban": nomerKorban,
        kronologi,
        pengirim: {
          nama: userLogin.nama,
          email: userLogin.email,
        },
      });
      reset();
      Alert.alert(
        "Laporan berhasil dikirim",
        "Kami akan menindaklanjuti sesegera mungkin 😊"
      );
      navigation.replace("LaporAja");
    }
  };

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
      <Navbar isBack={true} goBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>
        <View style={styles.containerWrapper}>
          <View style={styles.container}>
            <Text style={styles.laporanTitle}>
              Form Laporan Tindak Pelecehan Seksual
            </Text>
            <Text style={styles.laporanSubTitle}>
              Kami berkomitmen untuk menciptakan lingkungan kampus yang aman,
              inklusif, dan bebas dari pelecehan. Jika Anda melihat atau
              mengalami tindak pelecehan seksual, kirim laporan melalui form
              dibawah agar kami mengetahuinya!. Anda tidak sendirian. Kami
              mendukung Anda.
            </Text>

            {/* Form */}
            <View style={styles.formContainer}>
              <View style={styles.perForm}>
                <Text style={styles.formText}>Nama & NIM korban</Text>
                <KeyboardAvoidingView>
                  <TextInput
                    value={nama}
                    style={styles.textInput}
                    placeholder="Masukkan nama lengkap korban..."
                    onChangeText={(value) => setNama(value)}
                  ></TextInput>
                </KeyboardAvoidingView>
              </View>

              <View style={styles.perForm}>
                <Text style={styles.formText}>Nomer WhatsApp korban</Text>
                <KeyboardAvoidingView>
                  <TextInput
                    value={nomerKorban}
                    style={styles.textInput}
                    placeholder="Masukkan nomer WhatsApp korban..."
                    onChangeText={(value) => setNomerKorban(value)}
                  ></TextInput>
                </KeyboardAvoidingView>
              </View>

              <View style={styles.perForm}>
                <Text style={styles.formText}>
                  Ceritakan kronologi kejadiannya
                </Text>
                <KeyboardAvoidingView>
                  <TextInput
                    value={kronologi}
                    multiline={true}
                    numberOfLines={5}
                    style={[styles.textInput, { textAlignVertical: "top" }]}
                    placeholder="Masukkan kronologi kejadiannya..."
                    onChangeText={(value) => setKronologi(value)}
                  ></TextInput>
                </KeyboardAvoidingView>
              </View>

              <Text style={styles.noteTitle}>
                Note : Semua laporan anda, kami pastikan aman
              </Text>

              <View style={styles.ctaContainer}>
                <Pressable
                  style={styles.ctaKirim}
                  onPress={() => SubmitLaporan()}
                >
                  <Text style={styles.ctaKirimText}>Kirim</Text>
                </Pressable>

                <Pressable
                  style={styles.ctaCeritakan}
                  onPress={() =>
                    Linking.openURL(
                      `http://wa.me/6289691944030?text=Hai adkesma BEM UNSOED, saya mau menginfokan bahwa ${nama} dengan nomer WhatsApp ${nomerKorban} itu menjadi korban kekerasan seksual. Jadi, kronologinya tuh ${kronologi}. `
                    )
                  }
                >
                  <Ionicons
                    name="ios-logo-whatsapp"
                    size={24}
                    color={COLORS.lightWhite}
                  />
                  <Text style={styles.ctaCeritakanText}>
                    Caritakan ke Adkesma
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomMenu focused="LaporAja" navigationHandle={navigation} />
    </SafeAreaView>
  );
};

export default FormLaporan;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  laporanTitle: {
    fontSize: 21,
    fontWeight: "600",
    color: COLORS.font,
    marginBottom: 10,
  },
  laporanSubTitle: {
    fontSize: 15,
    color: COLORS.font,
    lineHeight: 23,
  },

  noteTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.font,
    marginVertical: 5,
  },

  perForm: {
    marginVertical: 7,
  },
  formText: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.font,
    marginBottom: 5,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.borderColor,
    fontSize: 15,
    fontWeight: "400",
    color: COLORS.font,
  },
  ctaKirim: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
    backgroundColor: COLORS.primary,
    marginRight: 10,
  },
  ctaKirimText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.lightWhite,
  },

  ctaContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  ctaCeritakan: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
    backgroundColor: COLORS.btnHijau,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  ctaCeritakanText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "600",
    color: COLORS.lightWhite,
  },
});
