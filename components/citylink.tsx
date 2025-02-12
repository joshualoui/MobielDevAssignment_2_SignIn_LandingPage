import { Text, Linking, TouchableOpacity, StyleSheet } from "react-native";

const CityLink = ({ url }: { url: string }) => (
    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(url)}>
        <Text style={styles.linkText}>Go to city page</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: "#ddd",
        borderRadius: 5,
        alignItems: "center",
        marginTop: 10,
    },
    linkText: {
        color: "blue",
        fontSize: 15,
    },
});

export default CityLink;
