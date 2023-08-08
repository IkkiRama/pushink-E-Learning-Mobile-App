import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  MaterialIcons,
  Foundation,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { COLORS, SHADOWS } from "../../constants";
const BottomMenu = ({ focused }) => {
  return (
    <View style={styles.menuWraper}>
      <TouchableOpacity style={styles.menuButton}>
        <Foundation
          name="home"
          size={24}
          color={focused === "Beranda" ? COLORS.primary : COLORS.gray}
        />
        <Text
          style={[
            styles.menuTextButton,
            {
              color: focused === "Beranda" ? COLORS.primary : COLORS.gray,
            },
          ]}
        >
          Beranda
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton}>
        <MaterialIcons
          name="article"
          size={24}
          color={focused === "Artikel" ? COLORS.primary : COLORS.gray}
        />
        <Text
          style={[
            styles.menuTextButton,
            {
              color: focused === "Artikel" ? COLORS.primary : COLORS.gray,
            },
          ]}
        >
          Artikel
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton}>
        <FontAwesome
          name="opencart"
          size={24}
          color={focused === "Merch" ? COLORS.primary : COLORS.gray}
        />
        <Text
          style={[
            styles.menuTextButton,
            {
              color: focused === "Merch" ? COLORS.primary : COLORS.gray,
            },
          ]}
        >
          Merch
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton}>
        <Ionicons
          name="chatbox"
          size={24}
          color={focused === "Adkesma" ? COLORS.primary : COLORS.gray}
        />
        <Text
          style={[
            styles.menuTextButton,
            {
              color: focused === "Adkesma" ? COLORS.primary : COLORS.gray,
            },
          ]}
        >
          Adkesma
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton}>
        <Ionicons
          name="person"
          size={24}
          color={focused === "Profil" ? COLORS.primary : COLORS.gray}
        />
        <Text
          style={[
            styles.menuTextButton,
            {
              color: focused === "Profil" ? COLORS.primary : COLORS.gray,
            },
          ]}
        >
          Profil
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomMenu;

const styles = StyleSheet.create({
  menuWraper: {
    width: "100%",
    // height: 50,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    ...SHADOWS.medium,
    flexDirection: "row",
  },
  menuButton: {
    width: "20%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  menuTextButton: {
    fontWeight: "600",
  },
});
