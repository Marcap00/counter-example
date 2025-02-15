import { Text, View, StyleSheet } from "react-native";

export default function Index() {


  return (
    <View
     style={styles.container}
    >
      <Text
      style={styles.title}
      >Counter App</Text>

    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "fff",
        },
    title: {
        fontSize: 24,
        fontWeight: "bold"
        }
    })