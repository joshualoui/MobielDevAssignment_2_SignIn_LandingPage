import { useState } from "react";
import credentials from "../credentials.json";
import { Link, useRouter } from "expo-router";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

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
      alert("User found direct to landing page");
      //For now to test out the functionality.
      booleanToggle(true);
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
    <View>
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
      <Button
        title="Log
      in"
        onPress={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 20,
  },
});
export default SignIn;
