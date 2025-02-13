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
        <View style={styles.inputContainer}>

          <Text style={styles.inputsText}>Username</Text>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.inputs}
          />

          <Text style={styles.inputsText}>Password</Text>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.inputs}
          />
        </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 28,
    letterSpacing: 1.3,
    padding: 10,
    marginBottom: 20,
  },
  container: {
    flexDirection: "column",
    backgroundColor: "#212A31",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "column",
    backgroundColor: "#2E3944",
    height: "26%",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#748d92",
    padding: 10,
    borderRadius: 8,
    margin: 10,
    borderColor: "gray",
    borderWidth: 2,
    width: 330,
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
    borderColor: "lightgray",
    borderWidth: 2,
    backgroundColor: "white",
  },
  inputsText:{
    color: "#FFFFFF",
    fontSize: 16,
    marginRight: 180,
    paddingTop: 15,
  },
});

export default SignIn;
