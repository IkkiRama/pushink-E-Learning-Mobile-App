import {
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

import { COLORS, SAFEAREAVIEW, SHADOWS } from "../../constants";
import { BottomMenu, Navbar } from "../../components";
import { ImageBackground } from "react-native";

const Komik = ({ navigation }) => {
  const [komik, setKomik] = useState({});
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
          <ImageBackground
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/Pushink%2FKomikHero.jpg?alt=media&token=1b5b88be-c1da-46c7-a524-55cfc8ca420b",
            }}
            style={{
              height: 200,
              justifyContent: "flex-end",
              paddingBottom: 20,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: COLORS.white,
                fontWeight: "600",
                marginTop: 20,
              }}
            >
              Komik
            </Text>

            <Text
              style={{
                fontSize: 14,
                color: COLORS.white,
                fontWeight: "500",
                marginTop: 10,
              }}
            >
              Bacalah komik terbaru kami!
            </Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Komik;

const styles = StyleSheet.create({});
