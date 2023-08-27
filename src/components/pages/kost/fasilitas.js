import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants";

const FasilitasKhusus = ({ FasilitasKos = {} }) => {
  return Object.keys(FasilitasKos).length === 0 ? (
    <Text style={styles.isEmpty}>Belum ada data</Text>
  ) : (
    FasilitasKos.map((fasilitas) => (
      <View key={fasilitas.id} style={styles.perFasilitasKhusus}>
        <View style={styles.pointDot} />
        <Text style={styles.perFasilitasKhususText}>{fasilitas.facility}</Text>
      </View>
    ))
  );
};

export default FasilitasKhusus;

const styles = StyleSheet.create({
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: COLORS.font,
  },
  perFasilitasKhusus: {
    flexDirection: "row",
    alignItems: "center",
  },
  perFasilitasKhususText: {
    marginLeft: 10,
    marginVertical: 6,
    color: COLORS.font,
    fontSize: 16,
    fontWeight: "400",
  },
  isEmpty: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: "600",
    color: COLORS.gray,
    textAlign: "center",
  },
});
