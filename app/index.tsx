import { Text, View, StyleSheet } from "react-native";

export default function Index() {


  return (
    <View
     style={styles.container}
    >
      <Text
      style={styles.title}
      >Counter App</Text>
      <Text
      style={styles.counter}
      >0</Text>

    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        },
    title: {
        fontSize: 24,
        fontWeight: "bold"
        },
    counter: {
        fontSize: 24,
        fontWeight: "bold"
        }
    })