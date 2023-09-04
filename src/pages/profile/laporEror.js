import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  Pressable,
  Image,
  Alert,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import * as OpenAnything from "react-native-openanything";
import { FontAwesome5, FontAwesome, Feather } from "@expo/vector-icons";

import { COLORS, SAFEAREAVIEW } from "../../constants";
import { Navbar, BottomMenu } from "../../components";

const LaporEror = ({ navigation }) => {
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar
        isBack={true}
        goBack={() => navigation.goBack()}
        isProfile="Lapor eror"
      />
      <ScrollView>
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
                    style={styles.textInput}
                    placeholder="Masukkan judul eror anda..."
                  ></TextInput>
                </KeyboardAvoidingView>
              </View>

              <View style={styles.perForm}>
                <Text style={styles.formText}>Terjadi eror seperti apa?</Text>
                <KeyboardAvoidingView>
                  <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={[styles.textInput, { textAlignVertical: "top" }]}
                    placeholder="Masukkan judul eror anda..."
                  ></TextInput>
                </KeyboardAvoidingView>
              </View>

              <Pressable style={styles.ctaKirim}>
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
  formContainer: {},
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
    borderColor: COLORS.gray2,
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
