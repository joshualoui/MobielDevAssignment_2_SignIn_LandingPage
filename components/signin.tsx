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
  const handleSubmit = () => {
    const user = credentials.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      alert("User found");
      //For now to test out the functionality.
      // booleanToggle(true);
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
