import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { WebView } from "react-native-webview";

import { SAFEAREAVIEW } from "../../constants";
import { Navbar } from "../../components";

const DetailArtikel = ({ navigation, route }) => {
  const { link } = route.params;
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar isBack={true} goBack={() => navigation.goBack()} />
      <StatusBar
        translucent
        barStyle={"light-content"}
        backgroundColor="transparent"
      ></StatusBar>
      <WebView
        source={{
          uri: link,
        }}
      />
    </SafeAreaView>
  );
};

export default DetailArtikel;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 10,
  },
  main: {
    flex: 1,
  },
});
