import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  Octicons,
  Entypo,
} from "@expo/vector-icons";
import { COLORS, SAFEAREAVIEW } from "../../constants";
import { BottomMenu, Navbar } from "../../components";
import { Pressable } from "react-native";

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
        >
          <View
            style={{
              paddingVertical: 20,
              paddingHorizontal: 10,
              backgroundColor: COLORS.primary,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: COLORS.white,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="person" size={50} color={COLORS.colorShadow} />
            </View>

            <View style={{ marginLeft: 20 }}>
              <Text
                style={{
                  fontSize: 23,
                  fontWeight: "700",
                  color: COLORS.white,
                  marginBottom: 5,
                }}
              >
                Rifki Romadhan
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                }}
              >
                georgeikkirama@gmail.com
              </Text>
            </View>
          </View>

          {/* Main content */}
          <View style={styles.mainContainer}>
            <Pressable
              onPress={() => navigation.navigate("Bantuan")}
              style={styles.perFitur}
            >
              <View style={styles.nameFiturContainer}>
                <Entypo name="help-with-circle" size={24} color={COLORS.font} />
                <Text style={styles.profileFitur}>Bantuan</Text>
              </View>
              <FontAwesome name="chevron-right" size={24} color={COLORS.font} />
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate("Bantuan")}
              style={styles.perFitur}
            >
              <View style={styles.nameFiturContainer}>
                <FontAwesome5 name="question" size={24} color={COLORS.font} />
                <Text style={styles.profileFitur}>FAQ</Text>
              </View>
              <FontAwesome name="chevron-right" size={24} color={COLORS.font} />
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("TentangAplikasi")}
              style={styles.perFitur}
            >
              <View style={styles.nameFiturContainer}>
                <FontAwesome5 name="info" size={24} color={COLORS.font} />
                <Text style={styles.profileFitur}>Tentang Aplikasi</Text>
              </View>
              <FontAwesome name="chevron-right" size={24} color={COLORS.font} />
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate("TentangAplikasi")}
              style={styles.perFitur}
            >
              <View style={styles.nameFiturContainer}>
                <Octicons name="sign-out" size={24} color={COLORS.font} />
                <Text style={styles.profileFitur}>Keluar</Text>
              </View>
              <FontAwesome name="chevron-right" size={24} color={COLORS.font} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <BottomMenu focused="Profile" navigationHandle={navigation} />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  perFitur: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 30,
    marginVertical: 5,
    justifyContent: "space-between",
    borderColor: COLORS.borderColor,
    backgroundColor: COLORS.lightWhite,
  },
  nameFiturContainer: { flexDirection: "row", alignItems: "center" },
  profileFitur: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 15,
    color: COLORS.font,
  },
});
