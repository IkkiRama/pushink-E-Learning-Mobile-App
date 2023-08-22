import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
} from "react-native";
import React from "react";
import { COLORS, SAFEAREAVIEW } from "../../constants";
import { Carousel, Navbar } from "../../components";

const InfoKos = ({ navigation }) => {
  const minHeightPage = Dimensions.get("window").height;

  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar isBack={true} goBack={() => navigation.goBack()} />
      <ScrollView>
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
          <View
            style={{
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
              Cari Kos Deket Unsoed?
            </Text>

            <Text
              style={{
                fontSize: 14,
                color: COLORS.white,
                fontWeight: "500",
                marginTop: 10,
              }}
            >
              Temukan kos-kosan terdekat tanpa harus ada rasa khawatir
            </Text>

            {/* slider */}
            {/* <View
              style={{
                backgroundColor: COLORS.white,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                padding: 5,
                marginTop: 50,
              }}
            ></View> */}
          </View>

          <View
            style={{
              backgroundColor: COLORS.white,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingHorizontal: 15,
              paddingTop: 10,
              marginTop: 50,
              minHeight: minHeightPage - 100,
            }}
          >
            <Text
              style={{
                marginTop: 10,
                fontSize: 26,
                fontWeight: "600",
                color: COLORS.gray,
                textAlign: "center",
              }}
            >
              Belum ada data
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoKos;

const styles = StyleSheet.create({});
