import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, SAFEAREAVIEW, SHADOWS } from "../../constants";
import { Navbar } from "../../components";
import BottomMenu from "./../../components/common/BottomMenu";
import { FONT, SIZES } from "../../constants/theme";

const LayananUnsoed = ({ navigation }) => {
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
              Layanan Unsoed
            </Text>

            <Text
              style={{
                fontSize: 14,
                color: COLORS.white,
                fontWeight: "500",
                marginTop: 10,
              }}
            >
              Dapatkan informasi resmi tanpa takut hoax
            </Text>
          </View>

          <View
            style={{
              backgroundColor: COLORS.white,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingHorizontal: 15,
              paddingTop: 10,
              marginTop: 20,
              minHeight: minHeightPage - 100,
            }}
          >
            {/* Perfile */}
            <FileLayanan />
            <FileLayanan />
            <FileLayanan />
            <FileLayanan />
            <FileLayanan />
          </View>
        </View>
      </ScrollView>
      <BottomMenu focused="Beranda" />
    </SafeAreaView>
  );
};

const FileLayanan = () => {
  return (
    <View style={styles.layananContainer}>
      <MaterialIcons name="article" size={45} color={COLORS.gray} />
      <View style={styles.layananContainerText}>
        <Text style={styles.layananTitleText} numberOfLines={1}>
          Kalendar Akademik 2023 - 2024
        </Text>
        <Text style={styles.layananSubTitleText} numberOfLines={1}>
          20 Juli | 20 Halaman
        </Text>
      </View>
    </View>
  );
};

export default LayananUnsoed;

const styles = StyleSheet.create({
  layananContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginVertical: 5,
    borderColor: COLORS.borderColor,
    ...SHADOWS.medium,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.lightWhite,
  },
  layananContainerText: {
    paddingLeft: 10,
  },
  layananTitleText: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.font,
  },
  layananSubTitleText: {
    fontSize: 14,
    marginTop: 3,
  },
});
