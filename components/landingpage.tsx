import { useState } from "react";
import credentials from "../credentials.json";
import { Link, useRouter } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import SignIn from "./signin";

type LandingPageProps = {
  username: string;
  booleanToggle: (IsLoggedIn: boolean) => void;
};

const LandingPage: React.FC<LandingPageProps> = ({
  username,
  booleanToggle,
}) => {
  const user = credentials.users.find((user) => user.username === username);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {username}!</Text>
      <Text style={styles.text}>You have successfully logged in!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Alert.alert(`Logged out of account\nGoodbye ${username}`);
          booleanToggle(false);
        }}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        Somewhere down here will be the 2 links to Calgary and Edmonton
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 10,
  },
  container: {
    marginTop: 300,
    flexDirection: "column",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 8,
    margin: 10,
    borderColor: "gray",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    padding: 5,
  },
});

export default LandingPage;
