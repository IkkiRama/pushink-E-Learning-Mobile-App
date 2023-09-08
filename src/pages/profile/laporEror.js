import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Pressable,
  Alert,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { ref, push } from "firebase/database";

import { COLORS, SAFEAREAVIEW } from "../../constants";
import { Navbar, BottomMenu } from "../../components";
import { db } from "../../configs/firebase";

const LaporEror = ({ navigation }) => {
  const [judul, setJudul] = useState("");
  const [message, setMessage] = useState("");

  const resetData = () => {
    setJudul("");
    setMessage("");
  };

  const submitLaporan = () => {
    if (judul.trim() === "" || message.trim() == "") {
      Alert.alert("Error", "Harap isi semua data!");
    } else {
      push(ref(db, "Laporan"), {
        nama: "Rifki Romadhan",
        email: "Rifkivamaus@gmail.com",
        judul,
        message,
      });
      resetData();
      Alert.alert("Sukses", "Data berhasil ditambahkan");
      navigation.replace("Profile");
    }
  };
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar
        isBack={true}
        goBack={() => navigation.goBack()}
        isProfile="Lapor eror"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>

        <View style={styles.containerWrapper}>
          <View style={styles.container}>
            <View style={styles.formContainer}>
              <View style={styles.perForm}>
                <Text style={styles.formText}>Judul eror</Text>
                <KeyboardAvoidingView>
                  <TextInput
                    value={judul}
                    style={styles.textInput}
                    placeholder="Masukkan judul eror anda..."
                    onChangeText={(value) => setJudul(value)}
                  ></TextInput>
                </KeyboardAvoidingView>
              </View>

              <View style={styles.perForm}>
                <Text style={styles.formText}>Terjadi eror seperti apa?</Text>
                <KeyboardAvoidingView>
                  <TextInput
                    value={message}
                    multiline={true}
                    numberOfLines={4}
                    style={[styles.textInput, { textAlignVertical: "top" }]}
                    placeholder="Masukkan judul eror anda..."
                    onChangeText={(value) => setMessage(value)}
                  ></TextInput>
                </KeyboardAvoidingView>
              </View>

              <Pressable style={styles.ctaKirim} onPress={submitLaporan}>
                <Text style={styles.ctaKirimText}>Kirim</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomMenu focused="Profile" navigationHandle={navigation} />
    </SafeAreaView>
  );
};

export default LaporEror;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
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
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  ctaKirimText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.lightWhite,
  },
});
