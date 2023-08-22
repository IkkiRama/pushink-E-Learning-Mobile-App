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
              marginVertical: 25,
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FPelecehan%20Seksual%20Icon.png?alt=media&token=97185caf-b624-483f-b62e-34f9245a1324",
              }}
              style={{
                // backgroundColor: COLORS.white,
                width: 170,
                height: 170,
                borderRadius: 50,
              }}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              paddingTop: 30,
              marginTop: 20,
              alignItems: "center",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              backgroundColor: COLORS.white,
              minHeight: minHeightPage - 400,
            }}
          >
            <Text
              style={{
                color: COLORS.font,
                fontSize: 21,
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Layanan Informasi Pelecehan Seksual
            </Text>
            <View
              style={{
                width: "90%",
                marginTop: 10,
                marginBottom: 30,
                color: COLORS.font,
              }}
            >
              <Text
                style={{ fontSize: 18, textAlign: "center", lineHeight: 25 }}
              >
                Bantu orang-orang disekitarmu dari tindak kejahatan seksual!
                Kalau bukan kita, siapa lagi?
              </Text>
            </View>
            <Pressable
              onPress={() => Linking.openURL("http://wa.me/6289691944030")}
              style={{
                paddingHorizontal: 40,
                paddingVertical: 15,
                borderRadius: 10,
                backgroundColor: COLORS.primary,
              }}
            >
              <Text
                style={{ fontSize: 17, color: COLORS.white, fontWeight: "600" }}
              >
                Lapor Sekarang
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <BottomMenu focused="LaporAja" navigationHandle={navigation} />
    </SafeAreaView>
  );
};

export default LaporAja;

const styles = StyleSheet.create({});
