import {
  Text,
  View,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";

import { db } from "../../configs/firebase";
import { BottomMenu, Navbar } from "../../components";
import { COLORS, SAFEAREAVIEW, images } from "../../constants";

const RenderImage = ({ image }) => {
  const [isLoadedImage, setIsLoadedImage] = useState(true);
  return (
    <Image
      onLoad={() => setIsLoadedImage(false)}
      source={
        isLoadedImage
          ? images.defaultBanner
          : {
              uri: image,
            }
      }
      style={styles.imageUKM}
      resizeMode="contain"
    />
  );
};

const InfoUKM = ({ navigation }) => {
  const [dataUKM, setDataUKM] = useState({});
  const dataUKMKeys = Object.keys(dataUKM);

  useEffect(() => {
    return onValue(ref(db, "UKM"), (querySnapShot) => {
      let data = querySnapShot.val() || {};
      let dataUKMFromDB = { ...data };
      setDataUKM(dataUKMFromDB);
    });
  }, []);

  const UKM = () => {
    return dataUKMKeys.map((key) => (
      <Pressable
        onPress={() => navigation.navigate("DetailUKM", { ukm: dataUKM[key] })}
        key={key}
        style={styles.UKM}
      >
        <RenderImage image={dataUKM[key].image} />

        <View style={styles.UKMProfil}>
          <Text style={styles.namaUKM} numberOfLines={1}>
            {dataUKM[key].nama}
          </Text>
          <Text style={styles.deskripsiSingkatUKM} numberOfLines={3}>
            {dataUKM[key].deskripsi}
          </Text>
        </View>
      </Pressable>
    ));
  };
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar isBack={true} goBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>
        <View style={styles.containerWrapper}>
          <ImageBackground
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/Pushink%2FFakultasHero.jpg?alt=media&token=5a16cfb7-8193-408d-8b68-605121426c26",
            }}
            style={styles.container}
          >
            <Text style={styles.heading}>Info UKM</Text>

            <Text style={styles.subHeading}>
              Menghubungkan Mahasiswa, Mewujudkan Inspirasi
            </Text>
          </ImageBackground>

          <View style={styles.UKMContainer}>
            {dataUKMKeys.length > 0 ? (
              UKM()
            ) : (
              <ActivityIndicator size="large" color={COLORS.primary} />
            )}
          </View>
        </View>
      </ScrollView>
      <BottomMenu focused="Beranda" navigationHandle={navigation} />
    </SafeAreaView>
  );
};

export default InfoUKM;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  container: {
    height: 200,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: COLORS.primary,
  },
  heading: {
    fontSize: 23,
    color: COLORS.white,
    fontWeight: "600",
    marginTop: 20,
  },
  subHeading: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "500",
    marginTop: 10,
  },

  UKMContainer: {
    paddingVertical: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },

  UKM: {
    width: "47%",
    margin: 5,
    elevation: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.borderColor,
    backgroundColor: COLORS.lightWhite,
  },
  imageUKM: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: COLORS.lightWhite,
  },
  UKMProfil: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  namaUKM: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.font,
  },
  deskripsiSingkatUKM: {
    fontSize: 15,
    fontWeight: "400",
    color: COLORS.font,
    marginTop: 5,
  },
});
