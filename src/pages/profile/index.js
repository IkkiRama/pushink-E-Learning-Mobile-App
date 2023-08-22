import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS, SAFEAREAVIEW } from "../../constants";
import { BottomMenu, Navbar } from "../../components";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar></Navbar>
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
        ></View>
      </ScrollView>
      <BottomMenu focused="Profile" navigationHandle={navigation} />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
