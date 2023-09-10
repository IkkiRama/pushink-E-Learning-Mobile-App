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
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as OpenAnything from "react-native-openanything";

import { BottomMenu, Navbar } from "../../components";
import { COLORS, SAFEAREAVIEW, SHADOWS, images } from "../../constants";

const DetailFakultas = ({ navigation, route }) => {
  const { id } = route.params;
  const [fakultas, setFakultas] = useState([]);
  const [isLoadedImage, setIsLoadedImage] = useState(true);

  const getData = () => {
    fetch(`https://api.bem-unsoed.com/api/faculty/${id}`)
      .then((response) => response.json())
      .then((result) => setFakultas(result));
  };

  useEffect(() => getData(), []);

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
            onLoad={() => setIsLoadedImage(false)}
            source={
              isLoadedImage
                ? images.defaultBanner
                : {
                    uri: `https://api.bem-unsoed.com/api/faculty/image/${fakultas.image}`,
                  }
            }
            style={styles.container}
          >
            <LinearGradient
              colors={["transparent", "#8576f5", "#7e6ef0"]}
              style={styles.linearGradient}
            >
              <Text style={styles.heading}>{fakultas.name}</Text>
            </LinearGradient>
          </ImageBackground>

          <View style={styles.fakultasContainer}>
            <Text style={styles.detailHeading}>Tentang Fakultas</Text>
            <Text style={styles.deskripsi}>{fakultas.description}</Text>

            {/* SOSMED */}
            <Text style={styles.detailHeading}>Media Sosial Fakultas</Text>
            <View style={styles.sosmedContainer}>
              <Pressable
                onPress={() => OpenAnything.Web(fakultas.website_link)}
                style={styles.sosmed}
              >
                <MaterialCommunityIcons
                  name="web"
                  size={24}
                  color={COLORS.lightWhite}
                />
              </Pressable>
              <Pressable
                onPress={() => OpenAnything.Web(fakultas.instagram_link)}
                style={styles.sosmed}
              >
                <FontAwesome
                  name="instagram"
                  size={24}
                  color={COLORS.lightWhite}
                />
              </Pressable>
              <Pressable
                onPress={() => OpenAnything.Web(fakultas.youtube_link)}
                style={styles.sosmed}
              >
                <Feather name="youtube" size={24} color={COLORS.lightWhite} />
              </Pressable>
              <Pressable
                onPress={() => OpenAnything.Web(fakultas.twitter_link)}
                style={styles.sosmed}
              >
                <Feather name="twitter" size={24} color={COLORS.lightWhite} />
              </Pressable>
            </View>

            <Text style={styles.detailHeading}>Lokasi Fakultas</Text>
            <View style={styles.mapContainer}>
              <Pressable onPress={() => OpenAnything.Web(fakultas.location)}>
                <Image
                  onLoad={() => setIsLoadedImage(false)}
                  source={
                    isLoadedImage
                      ? images.defaultBanner
                      : {
                          uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/Appsoed%2FIcon%2Flocation_kost.png?alt=media&token=ed7d705d-8511-4286-b75e-f725d723cb80",
                        }
                  }
                  style={styles.mapImage}
                  resizeMode="contain"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailFakultas;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  container: {
    height: 270,
    justifyContent: "flex-end",
    backgroundColor: COLORS.primary,
  },
  linearGradient: {
    width: "100%",
    height: 200,
    padding: 10,
    justifyContent: "flex-end",
    paddingBottom: 50,
    marginBottom: -30,
  },
  heading: {
    fontSize: 23,
    color: COLORS.white,
    fontWeight: "600",
    marginTop: 20,
    lineHeight: 35,
  },
  subHeading: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "500",
    marginTop: 10,
  },

  fakultasContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: COLORS.white,
  },

  deskripsi: {
    color: COLORS.font,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 25,
    marginBottom: 20,
  },
  sosmedContainer: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 10,
  },
  sosmed: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginHorizontal: 7,
    backgroundColor: COLORS.font,
  },

  detailHeading: {
    color: COLORS.font,
    fontSize: 21,
    fontWeight: "600",
    marginBottom: 10,
  },

  mapContainer: {
    justifyContent: "center",
  },

  mapImage: {
    marginTop: 20,
    width: "100%",
    height: 150,
  },
});
