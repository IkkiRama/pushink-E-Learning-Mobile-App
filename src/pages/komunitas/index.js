import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import { TouchableOpacity, Text, Alert } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import {
  getFirestore,
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
  Firestore,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants";

export default function Chat({ navigation }) {
  const [messages, setMessages] = useState([]);
  const auth = getAuth(); // Initialize the auth instance
  const database = getFirestore(); // Initialize the Firestore database instance

  // const onSignOut = () => {
  //   signOut(auth).catch((error) => console.log("Error logging out: ", error));
  // };

  useEffect(() => {
    if (auth.currentUser == null) {
      Alert.alert("Kamu belum login, silahkan login terlebih dahulu");
      return navigation.replace("Login");
    } else {
      const subscriber = Firestore()
        .collection("chats")
        .onSnapshot((documentSnapshot) => {
          console.log("User data: ", documentSnapshot.data());
        });

      // Stop listening for updates when no longer required
      return () => subscriber();
    }
  }, []);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <TouchableOpacity
  //         style={{
  //           marginRight: 10,
  //         }}
  //         onPress={onSignOut}
  //       >
  //         <AntDesign
  //           name="logout"
  //           size={24}
  //           color={COLORS.gray}
  //           style={{ marginRight: 10 }}
  //         />
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, [navigation]);

  // useLayoutEffect(() => {
  //   const collectionRef = collection(database, "chats");
  //   const q = query(collectionRef, orderBy("createdAt", "desc"));

  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     console.log("querySnapshot unsubscribe");
  //     setMessages(
  //       querySnapshot.docs.map((doc) => ({
  //         _id: doc.id, // Change _id to use doc.id
  //         createdAt: doc.data().createdAt.toDate(),
  //         text: doc.data().text,
  //         user: doc.data().user,
  //       }))
  //     );
  //   });
  //   return unsubscribe;
  // }, []);

  // const onSend = useCallback((messages = []) => {
  //   setMessages((previousMessages) =>
  //     GiftedChat.append(previousMessages, messages)
  //   );
  //   const { _id, createdAt, text, user } = messages[0];
  //   addDoc(collection(database, "chats"), {
  //     createdAt,
  //     text,
  //     user,
  //   });
  // }, []);

  return (
    // <GiftedChat
    //   messages={messages}
    //   showAvatarForEveryMessage={false}
    //   showUserAvatar={false}
    //   onSend={(messages) => onSend(messages)}
    //   messagesContainerStyle={{
    //     backgroundColor: "#fff",
    //   }}
    //   textInputStyle={{
    //     backgroundColor: "#fff",
    //     borderRadius: 20,
    //   }}
    //   user={{
    //     _id: auth?.currentUser?.email, // Change to use uid
    //     avatar: "https://i.pravatar.cc/300",
    //   }}
    // />
    <Text>ASU</Text>
  );
}
