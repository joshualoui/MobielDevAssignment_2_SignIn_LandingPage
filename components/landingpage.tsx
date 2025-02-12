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
import CityInfo from "./cityinfo";
import CityLink from "./citylink";
import { Image } from "react-native";

type LandingPageProps = {
  username: string;
  booleanToggle: (IsLoggedIn: boolean) => void;
};

const LandingPage: React.FC<LandingPageProps> = ({
  username,
  booleanToggle,
}) => {
  const user = credentials.users.find((user) => user.username === username);
  const [activeTab, setActiveTab] = useState<string>("Calgary");
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontWeight: 'bold' }]}>Welcome {username}!</Text>
      <Text style={{ fontSize: 16 }}>You have successfully logged in!</Text>

      <View style={styles.navContainer}>
        <TouchableOpacity
          style={[
            styles.navButton,
            activeTab === "Calgary" && styles.activeNavButton,
          ]}
          onPress={() => {
            setActiveTab("Calgary");
          }}
        >
          <Text style={styles.navButtonText}>Calgary</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            activeTab === "Edmonton" && styles.activeNavButton,
          ]}
          onPress={() => {
            setActiveTab("Edmonton");
          }}
        >
          <Text style={styles.navButtonText}>Edmonton</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        {activeTab === "Calgary" ? (
          <View>
            <Text style={styles.cityTitle}>Calgary</Text>
            <Image
              source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Downtown_Calgary_2020-4.jpg/800px-Downtown_Calgary_2020-4.jpg" }}
              style={styles.cityImage}
            />
            <CityInfo info="Calgary is known for the Calgary Stampede and its beautiful Rocky Mountain views." />
            <CityLink url="https://www.calgary.ca/home.html" />
          </View>
        ) : (
          <View>
            <Text style={styles.cityTitle}>Edmonton</Text>
            <Image
              source={{ uri: "https://cdn.britannica.com/78/140378-050-EA52656B/Skyline-Edmonton-Alberta-Canada.jpg" }}
              style={styles.cityImage}
            />
            <CityInfo info="Edmonton is known for its West Edmonton Mall and the Edmonton Oilers." />
            <CityLink url="https://www.edmonton.ca/" />
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Alert.alert(`Logged out of account\nGoodbye ${username}`);
          booleanToggle(false);
        }}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>

    </View>
    
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 10,
  },
  container: {
    flexDirection: "column",
    backgroundColor: "#f0f0f0",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#e74c3c",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: 'center',
  },
  navContainer: {
    marginTop: 30,
    flexDirection: "row",
    width: '100%',
    justifyContent: "space-around",
  },
  navButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  activeNavButton: {
    backgroundColor: "#ddd",
  },
  navButtonText: {
    fontSize: 16,
  },
  infoContainer: {
    backgroundColor: "white",
    padding: 20,
    width: '100%',
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  cityTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  cityImage: {
    height: 200,
    width: 300,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default LandingPage;