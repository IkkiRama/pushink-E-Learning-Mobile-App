import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { WebView } from "react-native-webview";

const DetailArtikel = () => {
  return (
    <WebView style={styles.container} source={{ uri: "https://expo.dev" }} />
  );
};

export default DetailArtikel;

const styles = StyleSheet.create({});
