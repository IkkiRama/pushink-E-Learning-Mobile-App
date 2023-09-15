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

import { ImageBackground } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { BottomMenu, Navbar } from "../../components";
import { COLORS, SAFEAREAVIEW, SHADOWS, images } from "../../constants";

const RenderImage = ({ item }) => {
  const [isLoadedImage, setIsLoadedImage] = useState(true);

  return (
    <Image
      onLoad={() => setIsLoadedImage(false)}
      source={
        isLoadedImage
          ? images.defaultBanner
          : {
              uri: `https://api.bem-unsoed.com/api/faculty/image/${item.image}`,
            }
      }
      style={styles.fakultasImage}
    />
  );
};

const TilikFakultas = ({ navigation }) => {
  const [fakultas, setFakultas] = useState([]);

  const getData = () => {
    fetch("https://api.bem-unsoed.com/api/faculty")
      .then((response) => response.json())
      .then((result) => setFakultas(result));
  };

  useEffect(() => getData(), []);
  const renderFakultas = () =>
    fakultas.map((item) => (
      <Pressable
        key={item.id}
        onPress={() => navigation.navigate("DetailFakultas", { id: item.id })}
        style={styles.fakultas}
      >
        <RenderImage item={item} />
        <View style={styles.fakultasProfile}>
          <Text style={styles.fakultasAlias} numberOfLines={1}>
            {item.alias}
          </Text>
          <Text style={styles.fakultasName} numberOfLines={2}>
            {item.name}
          </Text>
        </View>
        <FontAwesome name="chevron-right" size={24} color={COLORS.font} />
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
              uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/Pushink%2FTILIK%20FAKULTAS%20HERO.jpg?alt=media&token=386b9c69-4298-4ae5-b66e-ada2f875f94f",
            }}
            style={styles.container}
          >
            <Text style={styles.heading}>Taukah kamu ?</Text>

            <Text style={styles.subHeading}>
              Ada 16 Fakultas di UNSOED lohh
            </Text>
          </ImageBackground>

          {/* Komik */}
          <View style={styles.fakultasContainer}>
            {fakultas.length >= 1 ? (
              renderFakultas()
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

export default TilikFakultas;

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
  fakultasContainer: {
    paddingVertical: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },

  fakultas: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    ...SHADOWS.medium,
    marginVertical: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: COLORS.borderColor,
    backgroundColor: COLORS.lightWhite,
  },
  fakultasImage: {
    width: 140,
    height: 85,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  fakultasProfile: {
    flex: 1,
    marginHorizontal: 10,
  },
  fakultasAlias: {
    color: COLORS.font,
    fontWeight: "600",
    fontSize: 23,
    marginBottom: 5,
  },
  fakultasName: {
    color: COLORS.font,
    fontWeight: "400",
    fontSize: 16,
  },
});
