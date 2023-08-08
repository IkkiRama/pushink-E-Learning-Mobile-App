import {
  Pressable,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from "react-native";
import Search from "../../../assets/Icons/search.svg";
import Bell from "../../../assets/Icons/bell.svg";
import { Image } from "react-native";
import { COLORS, images } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";
const Navbar = ({ isBack, goBack }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 50,
        paddingBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: COLORS.primary,
      }}
    >
      {isBack ? (
        <Pressable onPress={goBack}>
          <FontAwesome name="chevron-left" size={24} color={COLORS.white} />
        </Pressable>
      ) : (
        ""
      )}
      {/* Search */}
      <KeyboardAvoidingView
        behavior="padding"
        style={{ width: "75%", position: "relative" }}
      >
        <TextInput
          placeholder="Mau Cari apa..."
          style={{
            // paddingHorizontal: 20,
            paddingLeft: 25,
            paddingVertical: 3,
            borderRadius: 8,
            borderWidth: 0.7,
            borderColor: COLORS.borderColor,
            backgroundColor: COLORS.white,
            elevation: 2,
            color: "#212121",
            fontSize: 16,
            fontWeight: "500",
          }}
        ></TextInput>
        <Search style={{ position: "absolute", top: 6, left: 3 }}></Search>
      </KeyboardAvoidingView>

      <View style={{ position: "relative" }}>
        {/* <IonIcon colorCOLORS.white size={26} name="notifications-outline"></IonIcon> */}
        <Bell
          width={27}
          height={27}
          style={{ color: COLORS.white, backgroundColor: "transparent" }}
        ></Bell>
        <View
          style={{
            width: 18,
            height: 18,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: -5,
            left: 10,
            borderRadius: 5,
            backgroundColor: COLORS.merah,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 10,
              fontWeight: "600",
            }}
          >
            10
          </Text>
        </View>
      </View>

      <View
        style={{
          width: 37,
          height: 37,
          borderRadius: 50,
          backgroundColor: COLORS.white,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 33, height: 33, borderRadius: 50 }}
          source={images.fotoRifki}
          // resizeMode="cover"
        ></Image>
      </View>
    </View>
  );
};

export default Navbar;
