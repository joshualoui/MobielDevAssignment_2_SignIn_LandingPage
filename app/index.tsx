import { StyleSheet, View, Text } from "react-native";
import SignIn from "../components/signin";
import { useState } from "react";
import LandingPage from "../components/landingpage";

export default function App() {
  const [username, setUsername] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // default is false
  //when isLoggedIn is toggled to True then LandingPage is displayed.
  return (
    <View>
      {isLoggedIn ? (
        <LandingPage username={username} booleanToggle={setIsLoggedIn} />
      ) : (
        <SignIn
          username={username}
          booleanToggle={setIsLoggedIn}
          setUsername={setUsername}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "green",
    fontSize: 15,
    marginTop: 40,
  },
});
