import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
  Alert,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  Octicons,
  Entypo,
} from "@expo/vector-icons";
import { ref, onValue } from "firebase/database";
import { getAuth, signOut } from "firebase/auth";

import { db } from "../../configs/firebase";
import { BottomMenu, Navbar } from "../../components";
import { COLORS, SAFEAREAVIEW } from "../../constants";
import * as OpenAnything from "react-native-openanything";

const Profile = ({ navigation }) => {
  const auth = getAuth();
  let userLogin;
  const [dataUser, setDataUser] = useState({});
  const dataUserKeys = Object.keys(dataUser);

  useEffect(() => {
    if (auth.currentUser == null) {
      Alert.alert("Kamu belum login, silahkan login terlebih dahulu");
      return navigation.replace("Login");
    } else {
      return onValue(ref(db, "User"), (querySnapShot) => {
        let data = querySnapShot.val() || {};
        let dataUser = { ...data };
        setDataUser(dataUser);
      });
    }
  }, []);

  dataUserKeys.map((key) => {
    if (dataUser[key].email === auth.currentUser.email) {
      JSON.stringify((userLogin = dataUser[key]));
    }
  });

  const handleLogout = () => {
    Alert.alert(
      "Apakah kamu yakin?",
      "Apakah kamu yakin akan keluar dari akun?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            signOut(auth);
            navigation.replace("Login");
            Alert.alert("Kamu berhasil logout");
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
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
              <Text style={styles.userName}>{userLogin?.nama}</Text>
              <Text style={styles.userEmail}>{userLogin?.email}</Text>
            </View>
          </View>

          {/* Main content */}
          <View style={styles.mainContainer}>
            {/* <Pressable
              onPress={() =>
                OpenAnything.Web("https://sociabuzz.com/georgeikki/tribe")
              }
              style={styles.perFitur}
            >
              <View style={styles.nameFiturContainer}>
                <FontAwesome5 name="fly" size={24} color={COLORS.font} />
                <Text style={styles.profileFitur}>Dukung Kami</Text>
              </View>
              <FontAwesome name="chevron-right" size={24} color={COLORS.font} />
            </Pressable> */}

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
              onPress={() => navigation.navigate("FAQ")}
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
  profileUserContainer: { flex: 1, marginLeft: 20 },
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
