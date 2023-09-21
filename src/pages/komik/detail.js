import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

import { COLORS, SAFEAREAVIEW, images } from "../../constants";
import { Navbar } from "../../components";

const RenderImage = ({ imgKomik }) => {
  const [isLoadedImage, setIsLoadedImage] = useState(true);
  return (
    <Image
      onLoad={() => setIsLoadedImage(false)}
      key={imgKomik.id}
      // resizeMode="contain"
      style={styles.imageKomik}
      source={
        isLoadedImage
          ? images.defaultBanner
          : {
              uri: `https://api.bem-unsoed.com/api/comic/content/${imgKomik.image}`,
            }
      }
    />
  );
};

const DetailKomik = ({ route, navigation }) => {
  const { id } = route.params;
  const [komik, setKomik] = useState([]);
  const [imageKomik, setImageKomik] = useState([]);

  const getData = () => {
    fetch(`https://api.bem-unsoed.com/api/comic/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setKomik(result);
        setImageKomik(result.comic_images);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const renderKomik = () =>
    imageKomik.map((imgKomik) => (
      <RenderImage key={imgKomik.id} imgKomik={imgKomik} />
    ));
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar
        isBack={true}
        goBack={() => navigation.goBack()}
        isTitle={komik.title}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>

        <View style={styles.containerWrapper}>
          <View style={styles.container}>
            {imageKomik.length > 0 ? (
              renderKomik()
            ) : (
              <ActivityIndicator size="large" color={COLORS.primary} />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailKomik;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
  },
  imageKomik: {
    width: "100%",
    height: 500,
    backgroundColor: COLORS.primary,
  },
});
