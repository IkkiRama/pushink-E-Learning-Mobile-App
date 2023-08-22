import { View, Text, StyleSheet, Pressable } from "react-native";

import {
  FontAwesome5,
  MaterialIcons,
  Fontisto,
  Ionicons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import { COLORS } from "../../constants";

const Fiturs = ({ navigation }) => {
  return (
    <View
      style={{
        marginTop: -30,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Pressable
        style={Styles.perFitur}
        onPress={() => navigation.navigate("TilikFakultas")}
      >
        <View
          style={[
            Styles.containerIcon,
            {
              backgroundColor: "#FDF2F0",
            },
          ]}
        >
          <FontAwesome5 name="university" size={24} color="#DE644A" />
        </View>
        <Text style={Styles.textFitur}>Tilik Fakultas</Text>
      </Pressable>
      <Pressable
        style={Styles.perFitur}
        onPress={() => navigation.navigate("Komunitas")}
      >
        <View
          style={[
            Styles.containerIcon,
            {
              backgroundColor: "#FCFBE8",
            },
          ]}
        >
          <FontAwesome5 name="users" size={24} color="#F6A316" />
        </View>
        <Text style={Styles.textFitur}>Komunitas</Text>
      </Pressable>
      <Pressable
        style={Styles.perFitur}
        onPress={() => navigation.navigate("InfoUKM")}
      >
        <View
          style={[
            Styles.containerIcon,
            {
              backgroundColor: "#F2F9F1",
            },
          ]}
        >
          <FontAwesome5 name="volleyball-ball" size={24} color="#60A85E" />
        </View>
        <Text style={Styles.textFitur}>Info UKM</Text>
      </Pressable>
      <Pressable
        style={Styles.perFitur}
        onPress={() => navigation.navigate("Emagz")}
      >
        <View
          style={[
            Styles.containerIcon,
            {
              backgroundColor: "#EFF6FE",
            },
          ]}
        >
          <Feather name="book-open" size={24} color="#448BDE" />
        </View>
        <Text style={Styles.textFitur}>E-Magz</Text>
      </Pressable>
      <Pressable
        style={Styles.perFitur}
        onPress={() => navigation.navigate("LayananUnsoed")}
      >
        <View
          style={[
            Styles.containerIcon,
            {
              backgroundColor: "#F1F6FB",
            },
          ]}
        >
          <Ionicons name="md-albums" size={30} color="#4C89CB" />
        </View>
        <Text style={Styles.textFitur}>Layanan Unsoed</Text>
      </Pressable>
      <Pressable
        style={Styles.perFitur}
        onPress={() => navigation.navigate("InfoKos")}
      >
        <View
          style={[
            Styles.containerIcon,
            {
              backgroundColor: "#F2F9F1",
            },
          ]}
        >
          <AntDesign name="home" size={30} color="#60A85E" />
        </View>
        <Text style={Styles.textFitur}>Info Kos</Text>
      </Pressable>
      <Pressable
        style={Styles.perFitur}
        onPress={() => navigation.navigate("Podcast")}
      >
        <View
          style={[
            Styles.containerIcon,
            {
              backgroundColor: "#FDF2F0",
            },
          ]}
        >
          <Fontisto name="podcast" size={24} color="#DE644A" />
        </View>
        <Text style={Styles.textFitur}>Podcast</Text>
      </Pressable>
      <Pressable
        style={Styles.perFitur}
        onPress={() => navigation.navigate("Komik")}
      >
        <View
          style={[
            Styles.containerIcon,
            {
              backgroundColor: "#FCFBE8",
            },
          ]}
        >
          <MaterialIcons name="my-library-books" size={24} color="#F6A316" />
        </View>
        <Text style={Styles.textFitur}>Komik</Text>
      </Pressable>
    </View>
  );
};

const Styles = StyleSheet.create({
  perFitur: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 7,
    marginHorizontal: 5,
  },

  containerIcon: {
    width: 70,
    height: 50,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textFitur: {
    fontWeight: "600",
    fontSize: 12,
    marginTop: 5,
    color: COLORS.font,
  },
});

export default Fiturs;
