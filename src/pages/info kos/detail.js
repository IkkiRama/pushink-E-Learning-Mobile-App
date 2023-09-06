import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Foundation, Ionicons } from "@expo/vector-icons";

import { COLORS, SAFEAREAVIEW } from "../../constants";
import { FasilitasKhusus, KostCarousel, Navbar } from "../../components";

const InfoKosDetail = ({ route, navigation }) => {
  const { id } = route.params;
  const [isLihatSelengkapnya, setIsLihatSelengkapnya] = useState(false);
  const [kos, setKos] = useState({});

  useEffect(() => {
    fetch(`https://api.bem-unsoed.com/api/kost/${id}`)
      .then((response) => response.json())
      .then((result) => setKos(result));
  }, []);

  const FasilitasParkir = [
    {
      id: 1,
      nama: "Mobil",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FKost%2FFasilitas%20Parkir%2FMobil.png?alt=media&token=bed78283-1e90-4812-b0e1-c65973302c79",
    },
    {
      id: 2,
      nama: "Motor",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FKost%2FFasilitas%20Parkir%2FMotor.png?alt=media&token=25976dde-8947-44f1-b2d7-fca0d0fcf601",
    },
    {
      id: 3,
      nama: "Sepeda",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FKost%2FFasilitas%20Parkir%2FSepeda.png?alt=media&token=2f1fbe31-35ad-4f65-b446-873f5758d646",
    },
  ];

  const FasilitasUmum = [
    {
      id: 1,
      nama: "WiFi",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FKost%2FFasilitas%20Umum%2FWiFi.png?alt=media&token=772ead06-072a-4bfd-b732-12290e884f16",
    },
    {
      id: 2,
      nama: "Ruang Tamu",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FKost%2FFasilitas%20Umum%2FRuang%20Tamu.png?alt=media&token=5e2d0fb6-4de6-4321-b410-6553374a6c53",
    },
    {
      id: 3,
      nama: "Ruang Jemur",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FKost%2FFasilitas%20Umum%2FJemuran.png?alt=media&token=f8536d3a-d0a0-466e-b139-c9b5e60d1e4c",
    },
    {
      id: 4,
      nama: "Dapur",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FKost%2FFasilitas%20Umum%2FDapur.png?alt=media&token=c2379c2f-68b7-4b0c-ac59-e9134fb3cd05",
    },
    {
      id: 5,
      nama: "Kulkas",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FKost%2FFasilitas%20Umum%2FKulkas.png?alt=media&token=c09ac2cc-5dbe-4ca9-803f-1db5c53712c0",
    },
    {
      id: 6,
      nama: "CCTV",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FKost%2FFasilitas%20Umum%2FCCTV.png?alt=media&token=742edad8-b942-402a-aff3-a8645f626ff2",
    },
  ];

  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Navbar isBack={true} goBack={() => navigation.goBack()} />
      <ScrollView>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>

        <View style={styles.containerWrapper}>
          <KostCarousel ImageKos={kos.kost_images} />

          {/* Detail Information */}
          <View style={styles.detailInformasiKosContainer}>
            <Text style={styles.namaKos} numberOfLines={2}>
              {kos.name}
            </Text>

            <View style={styles.informasiKos}>
              <View style={styles.jenisKelaminKos(kos.type)}>
                <Text style={styles.jenisKelaminKosText(kos.type)}>
                  {kos.type === "l" ? "Putra" : "Putri"}
                </Text>
              </View>

              <View style={styles.alamatKosContainer}>
                <Foundation name="marker" size={24} color={COLORS.font} />
                <Text style={styles.alamatKos}>{kos.region}</Text>
              </View>
            </View>

            <View style={styles.hargaContainer}>
              <Text style={styles.hargaText}>
                {numberFormat(parseInt(kos.price_start))}
                <Text style={styles.keteranganHarga}> / Tahun</Text>
              </Text>
            </View>

            <View style={styles.peraturanUmumKos}>
              <Text style={styles.peraturanUmumKosTitle}>
                Peraturan umum kos
              </Text>
              <Text
                style={styles.peraturanUmumKosText}
                numberOfLines={isLihatSelengkapnya ? 0 : 3}
              >
                {`Peraturan umum yang berlaku di kos ini dirancang untuk memastikan bahwa lingkungan tetap bersih, nyaman, dan aman bagi semua penghuni. Setiap penghuni diharapkan menjaga kebersihan kamar dan ruang umum, serta merawat fasilitas dengan baik. Setiap penghuni wajib melakukan penguncian pintu dan larangan memberikan akses kepada orang yang tidak dikenal, serta penghuni diharapkan mengikuti prosedur tertentu ketika memiliki tamu untuk menjaga keamanan bersama.\n\n\nPeraturan tambahan:\n\n1. Jika tenant merusak atau menghilangkan fasilitas, diwajibkan mengganti 100% fasilitas tersebut dengan pembelian dilakukan oleh pihak pemilik dan barang yang rusak tersebut dapat diambil oleh tenant dengan pengangkutan pribadi.\n\n2. Apabila tenant yang melanggar tata tertib yang diberlakukan pemilik, maka menyetujui untuk dikeluarkan dengan masa peringatan 3 hari, lewat dari 3 hari maka final dikeluarkan (pria melewati lobby, alas sepatu taruh sembarangan, alat kebersihan taruh sembarangan, dsb).`}
              </Text>

              <Pressable
                onPress={() => setIsLihatSelengkapnya(!isLihatSelengkapnya)}
              >
                <Text style={styles.peraturanUmumKosLihatSelengkapnya}>
                  {isLihatSelengkapnya
                    ? `Lihat lebih sedikit`
                    : "Lihat selengkapnya"}
                </Text>
              </Pressable>
            </View>
          </View>
          {/* Apa yang kamu dapatkan */}
          <View style={styles.fasilitasKosContainer}>
            {/* Fasilitas khusus diambil dari API */}
            <View style={styles.fasilitasKhusus}>
              <Text style={styles.fasilitasTitle}>Fasilitas khusus</Text>

              <FasilitasKhusus FasilitasKos={kos.kost_facilities} />
            </View>

            {/* Spesifikasi Kamar */}
            <View>
              <Text style={styles.fasilitasTitle}>Spesifikasi tipe kamar</Text>
              <View>
                <View style={styles.perSpesifikasiTipeKamar}>
                  <Ionicons name="cube-outline" size={20} color={COLORS.font} />
                  <Text style={styles.perSpesifikasiTipeKamarText}>
                    4 x 3 meter
                  </Text>
                </View>
                <View style={styles.perSpesifikasiTipeKamar}>
                  <Image
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/react-native-crud-fireba-ea6c9.appspot.com/o/IITC%202023%2FKost%2FSpesifikasi%20Kamar%2Flistrik%201.png?alt=media&token=19335caa-bcae-4364-8782-f769234f2f14",
                    }}
                    style={styles.perSpesifikasiTipeKamarImage}
                  />
                  <Text style={styles.perSpesifikasiTipeKamarText}>
                    Tidak termasuk listrik
                  </Text>
                </View>
              </View>
            </View>

            {/* Fasilitas Umum */}
            <View style={styles.fasilitasUmumKos}>
              <Text style={styles.fasilitasTitle}>Fasilitas umum</Text>

              {FasilitasUmum.map((fasilitas) => (
                <View key={fasilitas.id} style={styles.perFasilitasUmumKos}>
                  <Image
                    source={{ uri: fasilitas.image }}
                    width={20}
                    height={20}
                    style={styles.perSpesifikasiTipeKamarImage}
                  />
                  <Text style={styles.perSpesifikasiTipeKamarText}>
                    {fasilitas.nama}
                  </Text>
                </View>
              ))}
            </View>

            {/* Fasilitas Parkir */}
            <View style={styles.fasilitasUmumKos}>
              <Text style={styles.fasilitasTitle}>Fasilitas parkir</Text>

              {FasilitasParkir.map((fasilitas) => (
                <View key={fasilitas.id} style={styles.perFasilitasUmumKos}>
                  <Image
                    source={{ uri: fasilitas.image }}
                    width={20}
                    height={20}
                    style={styles.perSpesifikasiTipeKamarImage}
                  />
                  <Text style={styles.perSpesifikasiTipeKamarText}>
                    {fasilitas.nama}
                  </Text>
                </View>
              ))}
            </View>

            {/* MAP */}
          </View>
        </View>
      </ScrollView>
      <View style={styles.hubungiPenjual}>
        <Pressable
          style={styles.hubungiPenjualBtn}
          onPress={() =>
            Linking.openURL(`https://wa.me/+62${kos.owner.substr(1)}`)
          }
        >
          <Text style={styles.hubungiPenjualText}>Hubungi Penjual</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default InfoKosDetail;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.borderColor,
  },
  detailInformasiKosContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    marginTop: -10,
    backgroundColor: COLORS.white,
  },
  namaKos: {
    fontWeight: "600",
    marginRight: 10,
    fontSize: 23,
    color: COLORS.font,
  },

  informasiKos: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  jenisKelaminKos: (jenisKelamin) => ({
    width: 70,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: jenisKelamin === "l" ? COLORS.secondary : COLORS.merah,
  }),
  jenisKelaminKosText: (jenisKelamin) => ({
    fontWeight: "500",
    color: jenisKelamin === "l" ? COLORS.secondary : COLORS.merah,
  }),
  alamatKosContainer: {
    flexDirection: "row",
    marginLeft: 15,
    alignItems: "center",
  },
  alamatKos: {
    marginLeft: 5,
    fontSize: 16,
    color: COLORS.font,
    fontWeight: "500",
  },

  hargaContainer: {
    marginTop: 15,
  },
  hargaText: {
    fontSize: 23,
    fontWeight: "600",
    color: COLORS.primary,
  },
  keteranganHarga: {
    fontSize: 16,
    color: COLORS.font,
  },

  peraturanUmumKos: {
    marginTop: 15,
    marginBottom: 10,
  },
  peraturanUmumKosTitle: {
    fontSize: 21,
    fontWeight: "600",
    marginBottom: 10,
    color: COLORS.font,
  },
  peraturanUmumKosText: {
    color: COLORS.font,
    fontSize: 16,
    textAlign: "justify",
    fontWeight: "400",
  },

  peraturanUmumKosLihatSelengkapnya: {
    color: COLORS.font,
    marginTop: 10,
    fontSize: 16,
    textAlign: "justify",
    fontWeight: "500",
    textDecorationLine: "underline",
  },

  fasilitasKosContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
  },

  fasilitasKhusus: {
    marginBottom: 15,
  },
  fasilitasTitle: {
    fontSize: 21,
    fontWeight: "600",
    color: COLORS.font,
    marginBottom: 5,
  },

  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: COLORS.font,
  },

  perSpesifikasiTipeKamar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  perSpesifikasiTipeKamarImage: {
    width: 25,
    height: 25,
  },
  perSpesifikasiTipeKamarText: {
    color: COLORS.font,
    fontWeight: "400",
    fontSize: 16,
    marginLeft: 15,
  },

  fasilitasUmumKos: {
    marginTop: 20,
  },
  perFasilitasUmumKos: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 5,
  },

  hubungiPenjual: {
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    elevation: 5,
  },
  hubungiPenjualBtn: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  hubungiPenjualText: {
    fontWeight: "600",
    fontSize: 18,
    color: COLORS.white,
  },
});
