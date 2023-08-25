import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import { COLORS, SAFEAREAVIEW } from "../../constants";
import { BottomMenu, Navbar } from "../../components";
import Bell from "../../../assets/Icons/bell.svg";

const InfoKosDetail = ({ navigation }) => {
  const Images = [
    {
      id: 1,
      link: "https://api.bem-unsoed.com/api/kost/image/KOSTPUTRAWISMADIKA_Snapinsta.app_363517671_3599332480296926_1873234964838727001_n_1080.jpg",
    },
    {
      id: 2,
      link: "https://api.bem-unsoed.com/api/kost/image/KOSTPUTRAWISMADIKA_Snapinsta.app_362989114_297260999522182_4707682378034123693_n_1080.jpg",
    },
    {
      id: 3,
      link: "https://api.bem-unsoed.com/api/kost/image/KOSTPUTRAWISMADIKA_Snapinsta.app_362745422_846643373746995_7220903245469038649_n_1080.jpg",
    },
  ];
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      {/* <Navbar isBack={true} goBack={() => navigation.goBack()} /> */}
      <ScrollView>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>

        <View style={styles.containerWrapper}>
          <ImageBackground
            source={{
              uri: "https://api.bem-unsoed.com/api/kost/image/KOSTPUTRAWISMADIKA_Snapinsta.app_362745422_846643373746995_7220903245469038649_n_1080.jpg",
            }}
            style={styles.imageSlider}
            // height={300}
            // resizeMode="contain"
          >
            <View style={styles.indexImageContainer}>
              <View style={styles.indexImage}>
                <Text style={styles.indexImageText}>1/9</Text>
              </View>
            </View>

            <View style={styles.headerContainer}>
              {/* Back */}
              <Pressable style={styles.headerChild}>
                <FontAwesome
                  name="chevron-left"
                  size={20}
                  color={COLORS.white}
                />
              </Pressable>

              {/* Notif */}
              <View
                style={{
                  position: "relative",
                  marginLeft: 15,
                  backgroundColor: "rgba(99, 99, 99, 0.5)",
                  // width: 40,
                  // height: 40,
                  padding: 20,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Bell
                  width={27}
                  height={27}
                  style={{
                    color: COLORS.white,
                    backgroundColor: "transparent",
                  }}
                ></Bell>
                <View
                  style={{
                    width: 18,
                    height: 18,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: -5,
                    left: 10,
                    borderRadius: 5,
                    backgroundColor: COLORS.merah,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: 10,
                      fontWeight: "600",
                    }}
                  >
                    10
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>

      <BottomMenu focused="Beranda" navigationHandle={navigation}></BottomMenu>
    </SafeAreaView>
  );
};

export default InfoKosDetail;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  imageSlider: {
    height: 300,
  },
  indexImageContainer: {
    position: "relative",
  },
  indexImageContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: "rgba(250, 250, 252, 0.5)",
    backgroundColor: "rgba(250, 250, 252, 0.5)",
  },
  indexImageText: {
    fontWeight: "600",
    color: COLORS.font,
  },

  headerContainer: {
    flexDirection: "row",
    marginTop: 50,
    paddingHorizontal: 10,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerChild: {
    backgroundColor: "rgba(99, 99, 99, 0.5)",
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
