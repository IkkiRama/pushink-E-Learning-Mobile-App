import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";

import {
  Navbar,
  BottomMenu,
  ArtikelCard,
  RekomendasiArtikel,
} from "../../components";
import { db } from "../../configs/firebase";
import { COLORS, SAFEAREAVIEW } from "../../constants";

const Artikel = ({ navigation }) => {
  const [dataArtikel, setDataArtikel] = useState({});
  const dataArtikelKeys = Object.keys(dataArtikel);

  useEffect(() => {
    return onValue(ref(db, "Artikel"), (querySnapShot) => {
      let data = querySnapShot.val() || {};
      let semuaArtikel = { ...data };
      setDataArtikel(semuaArtikel);
    });
  }, []);

  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <View style={styles.artikelBaruContainer}>
              <Text style={styles.sectionTitle}>Artikel Terbaru</Text>
              <Pressable
                onPress={() => navigation.navigate("DetailArtikel")}
                style={styles.artikelPalingBaru}
              >
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FArtikel%2FArtikelSatu.jpg?alt=media&token=403be7ef-fe73-4d88-857b-5b604e72b46e",
                  }}
                  style={styles.imageArtikelPalingBaru}
                  resizeMode="contain"
                />
                <View style={styles.textContainer}>
                  <Text numberOfLines={3} style={styles.titleArtikel}>
                    Jaksa Pertanyakan Mobil untuk Brigita Manohara Kasus Ricky
                    HAM Pagawak
                  </Text>
                  <Text numberOfLines={3} style={styles.excerptArtikel}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa quam fugit dolorem voluptates esse dolor, dolores amet
                    perspiciatis tenetur beatae rem mollitia doloremque
                    nesciunt, saepe molestias soluta. Ad laborum excepturi natus
                    enim ullam rerum, pro<View></View>vident nemo harum ipsa
                    nobis possimus quis alias autem libero similique sed amet!
                    Reiciendis, eveniet commodi.
                  </Text>
                </View>
              </Pressable>
              <View style={styles.artikelBaru}>
                {/* <ArtikelCard navigation={navigation} /> */}
                {/* <ArtikelCard navigation={navigation} /> */}
                {/* <ArtikelCard navigation={navigation} /> */}
              </View>
            </View>

            <View style={styles.rekomendasiArtikelContainer}>
              <Text style={styles.sectionTitle}>Rekomendasi Artikel</Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.rekomendasiArtikel}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                renderItem={(item) => (
                  <RekomendasiArtikel navigation={navigation} />
                )}
              />
            </View>

            <View style={styles.artikelPopulerContainer}>
              <Text style={styles.sectionTitle}>Artikel Terpopuler</Text>
              <View style={styles.artikelPopuler}>
                {dataArtikelKeys.length > 0 ? (
                  dataArtikelKeys.map((key) => (
                    <ArtikelCard
                      key={key}
                      navigation={navigation}
                      artikel={dataArtikel[key]}
                    />
                  ))
                ) : (
                  <ActivityIndicator size="large" color={COLORS.primary} />
                )}

                {/* <ArtikelCard navigation={navigation} />
                <ArtikelCard navigation={navigation} />
                <ArtikelCard navigation={navigation} />
                <ArtikelCard navigation={navigation} /> */}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomMenu focused="Artikel" navigationHandle={navigation}></BottomMenu>
    </SafeAreaView>
  );
};

export default Artikel;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  container: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  artikelBaruContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    color: COLORS.font,
    fontWeight: "600",
    fontSize: 21,
    marginBottom: 10,
  },
  artikelPalingBaru: {},
  imageArtikelPalingBaru: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  titleArtikel: {
    fontSize: 23,
    fontWeight: "700",
    color: COLORS.font,
  },
  excerptArtikel: {
    color: COLORS.font,
    opacity: 0.7,
    fontSize: 16,
    fontWeight: "400",
    marginTop: 5,
  },

  rekomendasiArtikelContainer: {
    marginBottom: 20,
  },
  artikelBaru: {
    marginVertical: 10,
  },
  rekomendasiArtikel: {
    marginTop: 5,
  },
});
