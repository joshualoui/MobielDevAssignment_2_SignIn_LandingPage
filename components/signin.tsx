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
      //For now to test out the functionality.
      booleanToggle(true);
    } else if (username === "") {
      alert("Please enter a username");
    } else if (password === "") {
      alert("Please enter a password");
    } else if (username.includes(" ")) {
      alert("Username cannot contain spaces");
    } else if (password.includes(" ")) {
      alert("Password cannot contain spaces");
    } else if (username.length < 7) {
      alert("Username is too short");
    } else if (password.length < 9) {
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
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
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
  },
  container: {
    marginTop: 300,
    flexDirection: "column",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#0099ff",
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
export default SignIn;
