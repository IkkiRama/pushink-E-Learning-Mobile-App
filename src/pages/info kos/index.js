import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5, Foundation } from "@expo/vector-icons";
import { COLORS, SAFEAREAVIEW, SHADOWS, images } from "../../constants";
import { Navbar, BottomMenu } from "../../components";
import numberFormat from "./../../utils/numberFormat";

const InfoKos = ({ navigation }) => {
  const minHeightPage = Dimensions.get("window").height;

  const [dataKos, setDataKos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredKosts, setFilteredKosts] = useState([]);
  const [jenisKelaminAktif, setJenisKelaminAktif] = useState("Semua");

  const [isLoadedImage, setIsLoadedImage] = useState(true);
  const jenisKelamin = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      nama: "Semua",
      icon: (
        <Foundation
          name="male-female"
          size={24}
          color={
            jenisKelaminAktif === "Semua" ? COLORS.lightWhite : COLORS.font
          }
        />
      ),
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      nama: "Putra",
      icon: (
        <Foundation
          name="male"
          size={24}
          color={
            jenisKelaminAktif === "Putra" ? COLORS.lightWhite : COLORS.font
          }
        />
      ),
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      nama: "Putri",
      icon: (
        <Foundation
          name="female"
          size={24}
          color={
            jenisKelaminAktif === "Putri" ? COLORS.lightWhite : COLORS.font
          }
        />
      ),
    },
  ];

  useEffect(() => {
    fetch("https://api.bem-unsoed.com/api/kost")
      .then((response) => response.json())
      .then((result) => setDataKos(result));
  }, []);

  useEffect(() => {
    // Filter data kost berdasarkan jenis kelamin yang dipilih
    if (jenisKelaminAktif !== "Semua") {
      const filteredData = dataKos.filter((kost) => {
        if (jenisKelaminAktif === "Putra") {
          return kost.type === "l";
        } else {
          return kost.type === "p";
        }
      });
      setFilteredKosts(filteredData);
    } else {
      setFilteredKosts(dataKos);
    }
  }, [jenisKelaminAktif, dataKos]);

  useEffect(() => {
    // Filter data kost berdasarkan pencarian teks
    if (searchQuery.trim() !== "") {
      const filteredData = dataKos.filter((kost) =>
        kost.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredKosts(filteredData);
    } else {
      setFilteredKosts(dataKos);
    }
  }, [searchQuery, dataKos]);

  const renderKos = () =>
    filteredKosts.map((kos) => (
      <Pressable
        key={kos.id}
        onPress={() => navigation.navigate("InfoKosDetail", { id: kos.id })}
        style={styles.perKos}
      >
        <Image
          onLoad={() => setIsLoadedImage(false)}
          style={styles.imageKos}
          source={
            isLoadedImage
              ? images.defaultBanner
              : {
                  uri: `https://api.bem-unsoed.com/api/kost/image/${kos.kost_images[0].image}`,
                }
          }
          height={200}
        />
        <View style={styles.kosInfoContainer}>
          <View style={styles.namaKosContainer}>
            <Text style={styles.namaKos} numberOfLines={1}>
              {kos.name}
            </Text>
            <View style={styles.jenisKelaminKos(kos.type)}>
              <Text style={styles.jenisKelaminKosText(kos.type)}>
                {kos.type === "l" ? "Putra" : "Putri"}
              </Text>
            </View>
          </View>
          <View style={styles.kosInfo}>
            <View style={styles.lokasiKos}>
              <Foundation name="marker" size={24} color={COLORS.font} />
              <Text style={styles.textLokasiKos}>{kos.region}</Text>
            </View>
            <Text style={styles.hargaKos}>
              {numberFormat(parseInt(kos.price_start))} / tahun
            </Text>
          </View>
        </View>
      </Pressable>
    ));

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
          <View style={styles.container}>
            <Text style={styles.heading}>Cari Kos Deket Unsoed?</Text>

            <Text style={styles.subHeading}>
              Temukan kos-kosan terdekat tanpa harus ada rasa khawatir
            </Text>
          </View>

          <View style={styles.mainContentWrapper(minHeightPage)}>
            {/* INPUT */}
            <KeyboardAvoidingView style={styles.searchWrapper}>
              <TextInput
                style={styles.textInputStyle}
                placeholder="Cari Kos..."
                value={searchQuery}
                onChangeText={(value) => setSearchQuery(value)}
              />

              <Pressable style={styles.searchIcon}>
                <FontAwesome5 name="search" size={24} color={COLORS.font} />
              </Pressable>
            </KeyboardAvoidingView>

            {/* Jenis Kelamin */}
            {/* KOS */}
            {filteredKosts.length >= 1 ? (
              <>
                <View style={styles.jenisKelaminWrapper}>
                  <FlatList
                    horizontal
                    data={jenisKelamin}
                    renderItem={({ item }) => (
                      <Pressable
                        onPress={() => setJenisKelaminAktif(item.nama)}
                        key={item.id}
                        style={styles.perJenisKelamin(
                          jenisKelaminAktif,
                          item.nama
                        )}
                      >
                        {item.icon}
                        <Text
                          style={styles.jenisKelaminText(
                            jenisKelaminAktif,
                            item.nama
                          )}
                        >
                          {item.nama}
                        </Text>
                      </Pressable>
                    )}
                    keyExtractor={(item) => item.id}
                    key={(item) => item.id}
                  ></FlatList>
                </View>

                {renderKos()}
              </>
            ) : (
              <ActivityIndicator size="large" color={COLORS.primary} />
            )}
          </View>
        </View>
      </ScrollView>
      <BottomMenu focused="Beranda" navigationHandle={navigation}></BottomMenu>
    </SafeAreaView>
  );
};

export default InfoKos;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  container: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 22,
    color: COLORS.white,
    fontWeight: "600",
    marginTop: 20,
  },
  subHeading: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: "500",
    marginTop: 10,
  },
  mainContentWrapper: (minHeightPage) => ({
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 10,
    marginTop: 50,
    minHeight: minHeightPage - 100,
  }),
  searchWrapper: {
    position: "relative",
    width: "90%",
    alignSelf: "center",
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    width: "100%",
    marginTop: -40,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: "500",
    color: COLORS.font,
    ...SHADOWS.hard,
  },
  searchIcon: {
    position: "absolute",
    top: -40,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.lightWhite,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  jenisKelaminWrapper: {
    width: "87%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  perJenisKelamin: (jenisKelaminAktif, jenisKelamin) => ({
    flexDirection: "row",
    backgroundColor:
      jenisKelaminAktif === jenisKelamin ? COLORS.primary : COLORS.white,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 2,
    marginHorizontal: 5,
    borderColor: COLORS.borderColor,
    ...SHADOWS.medium,
  }),
  jenisKelaminText: (jenisKelaminAktif, jenisKelamin) => ({
    fontSize: 16,
    marginLeft: 10,
    color: jenisKelaminAktif === jenisKelamin ? COLORS.white : COLORS.font,
    fontWeight: "600",
  }),
  isEmpty: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: "600",
    color: COLORS.gray,
    textAlign: "center",
  },
  perKos: {
    borderRadius: 10,
    ...SHADOWS.medium,
    marginVertical: 10,
  },
  imageKos: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  kosInfoContainer: {
    padding: 15,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomColor: COLORS.borderColor,
    borderLeftColor: COLORS.borderColor,
    borderRightColor: COLORS.borderColor,
  },
  namaKosContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  namaKos: {
    width: "75%",
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.font,
    marginRight: 20,
  },
  jenisKelaminKos: (jenisKelamin) => ({
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: jenisKelamin === "l" ? COLORS.secondary : COLORS.kostWanita,
    borderRadius: 10,
  }),
  jenisKelaminKosText: (jenisKelamin) => ({
    fontWeight: "500",
    color: jenisKelamin === "l" ? COLORS.secondary : COLORS.kostWanita,
  }),
  kosInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lokasiKos: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  textLokasiKos: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 10,
    color: COLORS.font,
    fontWeight: "400",
  },
  hargaKos: {
    fontSize: 16,
    color: COLORS.gray,
    marginTop: 10,
  },
});
