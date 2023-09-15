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
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";

import { COLORS, SAFEAREAVIEW, images } from "../../constants";
import { BottomMenu, Navbar } from "../../components";

const RenderImage = ({ komik }) => {
  const [isLoadedImage, setIsLoadedImage] = useState(true);
  return (
    <Image
      onLoad={() => setIsLoadedImage(false)}
      source={
        isLoadedImage
          ? images.defaultBanner
          : {
              uri: `https://api.bem-unsoed.com/api/comic/cover/${komik.cover}`,
            }
      }
      style={styles.komikImage}
    />
  );
};

const Komik = ({ navigation }) => {
  const [komiks, setKomiks] = useState([]);

  const getData = () => {
    fetch("https://api.bem-unsoed.com/api/comic")
      .then((response) => response.json())
      .then((result) => setKomiks(result));
  };

  useEffect(() => getData(), []);

  const renderKomik = () =>
    komiks.map((komik) => (
      <Pressable
        key={komik.id}
        onPress={() => navigation.navigate("DetailKomik", { id: komik.id })}
        style={styles.komik}
      >
        <RenderImage komik={komik} />
        <Text numberOfLines={2} style={styles.komikText}>
          {komik.title}
        </Text>
      </Pressable>
    ));
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
          <ImageBackground
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/Pushink%2FKomikHero.jpg?alt=media&token=1b5b88be-c1da-46c7-a524-55cfc8ca420b",
            }}
            style={styles.container}
          >
            <Text style={styles.heading}>Komik</Text>

            <Text style={styles.subHeading}>Bacalah komik terbaru kami!</Text>
          </ImageBackground>

          {/* Komik */}
          <View style={styles.komikContainer}>
            {komiks.length >= 1 ? (
              renderKomik()
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

export default Komik;

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
  komikContainer: {
    paddingVertical: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  komik: {
    width: "45%",
    margin: 7,
    backgroundColor: COLORS.lightWhite,
    elevation: 1,
    borderRadius: 10,
  },
  komikImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  komikText: {
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 10,
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.font,
  },
});
