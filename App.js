import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Artikel,
  Bantuan,
  DetailArtikel,
  DetailMerch,
  Emagz,
  Home,
  InfoKos,
  InfoKosDetail,
  LaporAja,
  LaporEror,
  LayananUnsoed,
  Merch,
  Profile,
} from "./src/pages";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Beranda">
        <Stack.Screen
          name="Beranda"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LayananUnsoed"
          component={LayananUnsoed}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Artikel"
          component={Artikel}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DetailArtikel"
          component={DetailArtikel}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="InfoKos"
          component={InfoKos}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LaporAja"
          component={LaporAja}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="InfoKosDetail"
          component={InfoKosDetail}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Emagz"
          component={Emagz}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Merch"
          component={Merch}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DetailMerch"
          component={DetailMerch}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Bantuan"
          component={Bantuan}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LaporEror"
          component={LaporEror}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
