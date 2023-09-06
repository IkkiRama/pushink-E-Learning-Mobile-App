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
  Image,
} from "react-native";
import React, { useState } from "react";

import { COLORS, SAFEAREAVIEW } from "../../constants";
import { Navbar, BottomMenu } from "../../components";

const TentangAplikasi = ({ navigation }) => {
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar
        isBack={true}
        goBack={() => navigation.goBack()}
        isProfile="Tentang aplikasi"
      />
      <ScrollView>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>

        <View style={styles.containerWrapper}>
          <View style={styles.container}>
            <View style={styles.imageTentangAplikasiContainer}>
              <Image
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/Pushink%2Ficon.png?alt=media&token=e637fe86-79cb-443b-831a-c995e3bba17e",
                }}
                style={styles.imageTentangAplikasi}
              />
            </View>
            <Text style={styles.filosofiAplikasi}>
              Aplikasi Pushink merupakan sumber informasi lengkap mengenai
              Universitas Jenderal Soedirman (Unsoed) yang memiliki peran
              krusial dalam mendorong generasi Z yang kreatif untuk mencapai
              tujuan pembangunan berkelanjutan serta meningkatkan kualitas hidup
              pendidikan dan kreativitas generasi muda Indonesia.
            </Text>

            <Text style={styles.aboutDeveloper}>
              Aplikasi ini dikembangkan oleh{" "}
              <Text style={{ fontWeight: "600" }}>Rifki Romadhan</Text> dan
              <Text style={{ fontWeight: "600" }}> Hermanto</Text>. Kami
              memiliki komitmen yang kuat terhadap pendidikan dan kreativitas
              generasi muda. Kami memiliki visi untuk menciptakan platform yang
              dapat meningkatkan akses terhadap pendidikan dan memotivasi
              generasi muda untuk mengekspresikan kreativitas mereka.
            </Text>
          </View>
        </View>
      </ScrollView>
      <BottomMenu focused="Profile" navigationHandle={navigation} />
    </SafeAreaView>
  );
};

export default TentangAplikasi;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  imageTentangAplikasiContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  imageTentangAplikasi: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  filosofiAplikasi: {
    fontSize: 17,
    color: COLORS.font,
    fontWeight: "400",
    marginBottom: 10,
  },
  aboutDeveloper: {
    fontSize: 17,
    color: COLORS.font,
    fontWeight: "400",
  },
});
