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

import { COLORS, SAFEAREAVIEW, images } from "../../constants";
import { BottomMenu, Navbar } from "../../components";
import { ImageBackground } from "react-native";

const InfoUKM = ({ navigation }) => {
  const [isLoadedImage, setIsLoadedImage] = useState(true);
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
          <ImageBackground
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/Pushink%2FKomikHero.jpg?alt=media&token=1b5b88be-c1da-46c7-a524-55cfc8ca420b",
            }}
            style={styles.container}
          >
            <Text style={styles.heading}>Komik</Text>

            <Text style={styles.subHeading}>Bacalah komik terbaru kami!</Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoUKM;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  container: {
    height: 200,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: COLORS.primary,
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
});
