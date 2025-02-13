import { Text, StyleSheet } from "react-native";

interface CityInfoProps {
    info: string;
}

const CityInfo = ({ info }: CityInfoProps) => (
    <Text style={styles.infoText}>{info}</Text>
);

const styles = StyleSheet.create({
    infoText: {
        fontSize: 14,
        paddingTop: 5,
        textAlign: "center",
    },
});

export default CityInfo;