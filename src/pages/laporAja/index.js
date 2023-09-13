import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
  Pressable,
  Linking,
} from "react-native";

import { Navbar, BottomMenu } from "../../components";
import { COLORS, SAFEAREAVIEW } from "../../constants";

const LaporAja = ({ navigation }) => {
  const minHeightPage = Dimensions.get("window").height;
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar goBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>

        <View style={styles.containerWrapper}>
          <View style={styles.container}>
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FPelecehan%20Seksual%20Icon.png?alt=media&token=97185caf-b624-483f-b62e-34f9245a1324",
              }}
              style={styles.mainImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.laporAja(minHeightPage)}>
            <Text style={styles.laporAjaHeading}>
              Layanan Informasi Pelecehan Seksual
            </Text>
            <View style={styles.laporAjaSubHeadingContainer}>
              <Text style={styles.laporAjaSubHeading}>
                Bantu orang-orang disekitarmu dari tindak kejahatan seksual!
                Kalau bukan kita, siapa lagi?
              </Text>
            </View>
            <Pressable
              onPress={() => navigation.navigate("FormLaporan")}
              // onPress={() => Linking.openURL("http://wa.me/6289691944030")}
              style={styles.laporAjaCTA}
            >
              <Text style={styles.laporAjaCTAText}>Lapor Sekarang</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <BottomMenu focused="LaporAja" navigationHandle={navigation} />
    </SafeAreaView>
  );
};

export default LaporAja;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  container: {
    marginVertical: 25,
    alignItems: "center",
  },

  mainImage: {
    // backgroundColor: COLORS.white,
    width: 170,
    height: 170,
    borderRadius: 50,
  },
  laporAja: (minHeightPage) => ({
    paddingTop: 30,
    marginTop: 20,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: COLORS.white,
    minHeight: minHeightPage - 400,
  }),
  laporAjaHeading: {
    color: COLORS.font,
    fontSize: 21,
    fontWeight: "700",
    textAlign: "center",
  },
  laporAjaSubHeadingContainer: {
    width: "90%",
    marginTop: 10,
    marginBottom: 30,
    color: COLORS.font,
  },
  laporAjaSubHeading: { fontSize: 18, textAlign: "center", lineHeight: 25 },
  laporAjaCTA: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  laporAjaCTAText: { fontSize: 17, color: COLORS.white, fontWeight: "600" },
});
