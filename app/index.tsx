import { StyleSheet, View, Text } from "react-native";
import SignIn from "../components/signin";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // default is false
  //when isLoggedIn is toggled to True then LandingPage is displayed.
  return (
    <View>
      <Text style={styles.text}>
        Sign in and landing page. Need to surround SignIn and landingpage with
        conditional statement. When loggedin=True is swaps to LandingPage.
        Default is sign in page.
      </Text>

      <SignIn
        username={username}
        booleanToggle={setIsLoggedIn}
        setUsername={setUsername}
      />
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
