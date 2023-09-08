import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { COLORS, SAFEAREAVIEW } from "../../constants";
import { Navbar } from "../../components";
import BottomMenu from "./../../components/common/BottomMenu";

const Artikel = ({ navigation }) => {
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.lightWhite,
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
            Coming Soon
          </Text>

          <Button
            onPress={() => navigation.navigate("DetailArtikel")}
            title="Detail"
          ></Button>
        </View>
      </ScrollView>
      <BottomMenu focused="Artikel" navigationHandle={navigation}></BottomMenu>
    </SafeAreaView>
  );
};

export default Artikel;

const styles = StyleSheet.create({});
