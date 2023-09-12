import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { database, auth } from "../../configs/firebase";
import { doc, getDoc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";

import { COLORS, SAFEAREAVIEW, images } from "../../constants";
import { BottomMenu, Navbar } from "../../components";
import { ImageBackground } from "react-native";

const Komunitas = ({ navigation }) => {
  const [messages, setMessages] = useState([]);

  const onSignOut = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

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

  useEffect(() => {
    const collectionRef = collection(database, "chats");
    const q = query(collectionRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log("querySnapshot unsusbscribe");
      setMessages(
        querySnapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return unsubscribe;

    // const docRef = doc(database, "chats");
    // const docSnap = getDoc(docRef);
    // if (docSnap.exists()) {
    //   console.log("querySnapshot unsusbscribe");
    //   setMessages(
    //     querySnapshot.docs.map((doc) => ({
    //       _id: doc.data()._id,
    //       createdAt: doc.data().createdAt.toDate(),
    //       text: doc.data().text,
    //       user: doc.data().user,
    //     }))
    //   );
    // } else {
    //   // docSnap.data() will be undefined in this case
    //   console.log("No such document!");
    // }
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    // setMessages([...messages, ...messages]);
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(database, "chats"), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    // <>
    //   {messages.map(message => (
    //     <Text key={message._id}>{message.text}</Text>
    //   ))}
    // </>
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={false}
      showUserAvatar={false}
      onSend={(messages) => onSend(messages)}
      messagesContainerStyle={{
        backgroundColor: COLORS.lightWhite,
      }}
      textInputStyle={{
        backgroundColor: COLORS.lightWhite,
        borderRadius: 20,
      }}
      user={{
        _id: auth?.currentUser?.email,
        avatar: "https://i.pravatar.cc/300",
        // name: "Rifki Romadhan",
      }}
    />

    // <SafeAreaView style={SAFEAREAVIEW.style}>
    //   <Navbar isBack={true} goBack={() => navigation.goBack()} />
    //   <ScrollView showsVerticalScrollIndicator={false}>
    //     <StatusBar
    //       translucent
    //       barStyle={"light-content"}
    //       backgroundColor="transparent"
    //     ></StatusBar>

    //     <View style={styles.containerWrapper}>
    //       <View style={styles.container}>

    //       </View>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

export default Komunitas;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    // backgroundColor: COLORS.primary,
  },
  container: {
    paddingBottom: 20,
    paddingHorizontal: 10,
    justifyContent: "flex-end",
  },
});
