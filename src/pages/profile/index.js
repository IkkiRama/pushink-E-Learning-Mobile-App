import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  Octicons,
  Entypo,
} from "@expo/vector-icons";
import { Pressable } from "react-native";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import { BottomMenu, Navbar } from "../../components";
import { COLORS, SAFEAREAVIEW } from "../../constants";

const Profile = ({ navigation }) => {
  const auth = getAuth();

  useEffect(() => {
    if (auth.currentUser == null) {
      Alert.alert("Kamu belum login, silahkan login terlebih dahulu");
      navigation.replace("Login");
    }
  }, []);

  const handleLogout = () => {
    signOut(auth);
    navigation.replace("Login");
    Alert.alert("Kamu berhasil logout");
  };
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
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Ionicons name="person" size={50} color={COLORS.colorShadow} />
            </View>

            <View style={styles.profileUserContainer}>
              <Text style={styles.userName}>Rifki Romadhan</Text>
              <Text style={styles.userEmail}>{auth.currentUser?.email}</Text>
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

            <Pressable onPress={() => handleLogout()} style={styles.perFitur}>
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
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  profileUserContainer: { marginLeft: 20 },
  userName: {
    fontSize: 23,
    fontWeight: "700",
    color: COLORS.white,
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: COLORS.white,
  },
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
