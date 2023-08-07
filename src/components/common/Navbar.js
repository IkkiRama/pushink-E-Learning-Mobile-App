import { Text, TextInput, View } from "react-native";
import Search from "../assets/Icons/search.svg";
import Bell from "../assets/Icons/bell.svg";
import { Image } from "react-native";
import Colors from "../utils/Colors";

const Navbar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Search */}
      <View style={{ width: "75%", position: "relative" }}>
        <TextInput
          placeholder="Mau Cari apa..."
          style={{
            // paddingHorizontal: 20,
            paddingLeft: 25,
            paddingVertical: 3,
            borderRadius: 8,
            borderWidth: 0.7,
            borderColor: "#DBDEE2",
            backgroundColor: "#fff",
            elevation: 2,
            color: "#212121",
            fontSize: 16,
            fontWeight: "500",
          }}
        ></TextInput>
        <Search style={{ position: "absolute", top: 6, left: 3 }}></Search>
      </View>

      <View style={{ position: "relative" }}>
        {/* <IonIcon color="#fff" size={26} name="notifications-outline"></IonIcon> */}
        <Bell
          width={27}
          height={27}
          style={{ color: "#fff", backgroundColor: "transparent" }}
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
            backgroundColor: Colors.red,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 10,
              fontWeight: "600",
            }}
          >
            10
          </Text>
        </View>
      </View>

      <Image
        style={{ width: 33, height: 33, borderRadius: 50 }}
        source={require("../assets/Images/People/rifki.jpg")}
        // resizeMode="cover"
      ></Image>
    </View>
  );
};

export default Navbar;
