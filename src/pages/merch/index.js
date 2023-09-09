import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";

import { COLORS, SAFEAREAVIEW } from "../../constants";
import { Navbar, BottomMenu, MerchCarousel, MerchCard } from "../../components";
import { db } from "../../configs/firebase";

const Merch = ({ navigation }) => {
  const [merch, setMerch] = useState({});
  const merchKeys = Object.keys(merch);
  const widthCarousel = Dimensions.get("window").width;

  useEffect(() => {
    return onValue(ref(db, "Merch"), (querySnapShot) => {
      let data = querySnapShot.val() || {};
      let dataMerch = { ...data };
      setMerch(dataMerch);
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

        <View style={styles.containerWrapper}>
          <View style={styles.container}>
            {/* Carousel */}
            <View style={styles.carouselContainer}>
              <View style={styles.merchCarousel}>
                <MerchCarousel widthCarousel={(95 / 100) * widthCarousel} />
              </View>
            </View>
            {/* Produk */}
            <View style={styles.produkContainer}>
              {merchKeys.length > 0 ? (
                merchKeys.map((key) => (
                  <MerchCard
                    merchData={merch[key]}
                    key={key}
                    navigation={navigation}
                  />
                ))
              ) : (
                <ActivityIndicator size="large" color={COLORS.primary} />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomMenu focused="Merch" navigationHandle={navigation}></BottomMenu>
    </SafeAreaView>
  );
};

export default Merch;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },

  carouselContainer: {
    marginVertical: 30,
    alignItems: "center",
  },

  merchCarousel: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },

  produkContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
