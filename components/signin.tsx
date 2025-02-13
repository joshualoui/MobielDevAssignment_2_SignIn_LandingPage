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

type SignInProps = {
  booleanToggle: (isLoggedIn: boolean) => void;
  username: string;
  setUsername: (username: string) => void;
};

const SignIn: React.FC<SignInProps> = ({
  booleanToggle,
  username,
  setUsername,
}) => {
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  //TODO: Display appropriate error messages for invalid inputs
  // (e.g., incorrect format, username not found, incorrect password, username too short).
  const handleSubmit = () => {
    const user = credentials.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      alert(`Hi ${username}!\nYou have successfully logged in!`);
      //TODO: regex to check uppercase, lowercase, number, and special character???
      booleanToggle(true);
    } else if (username === "") {
      alert("Please enter a username");
    } else if (password === "") {
      alert("Please enter a password");
    } else if (username.includes(" ")) {
      alert("Username cannot contain spaces");
    } else if (password.includes(" ")) {
      alert("Password cannot contain spaces");
    } else if (username.length < 5) {
      alert("Username is too short");
    } else if (password.length < 8) {
      alert("Password is too short");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.inputs}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.inputs}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 20,
    padding: 10,
  },
  container: {
    flexDirection: "column",
    backgroundColor: "#f0f0f0",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#0099ff",
    padding: 10,
    borderRadius: 8,
    margin: 10,
    borderColor: "gray",
    borderWidth: 2,
    width: 250,
    height: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  inputs: {
    width: 250,
    padding: 10,
    margin: 10,
    borderRadius: 8,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
  },
});
export default SignIn;
