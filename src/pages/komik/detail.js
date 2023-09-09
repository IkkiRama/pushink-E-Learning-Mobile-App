import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";

import { COLORS, SAFEAREAVIEW, images } from "../../constants";
import { Navbar } from "../../components";

const DetailKomik = ({ route, navigation }) => {
  const { id } = route.params;
  const [komik, setKomik] = useState([]);
  const [imageKomik, setImageKomik] = useState([]);
  const [isLoadedImage, setIsLoadedImage] = useState(true);

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
      <Image
        onLoad={() => setIsLoadedImage(false)}
        key={imageKomik.id}
        resizeMode="contain"
        style={styles.imageKomik}
        source={
          isLoadedImage
            ? images.defaultBanner
            : {
                uri: `https://api.bem-unsoed.com/api/comic/content/${imgKomik.image}`,
              }
        }
      />
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
          <View style={styles.container}>{renderKomik()}</View>
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
  },
  container: {
    paddingBottom: 20,
  },
  imageKomik: {
    width: "100%",
    height: 500,
  },
});
