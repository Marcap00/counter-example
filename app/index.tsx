import { Text, View, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Index() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const getCount = async () => {
            try {
                const savedCount = await AsyncStorage.getItem("counter");
                if (savedCount !== null) {
                    setCount(parseInt(savedCount));
                }
            } catch (e) {
                console.error("Error in retrieving the count:", e);
            }
        };
        getCount();
    }, []);


    useEffect(() => {
        const saveCount = async () => {
            try {
                await AsyncStorage.setItem("counter", count.toString());
            } catch (e) {
                console.error("Error in saving the count:", e);
            }
        };
        saveCount();
    }, [count]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter App</Text>
            <Text style={styles.counter}>{count}</Text>
            <View style={styles.btnContainer}>
                <Pressable
                    style={({ pressed }) => [
                        styles.btn,
                        styles.btnRed,
                        pressed && styles.btnPressed,
                    ]}
                    onPress={() => setCount(count - 1)}
                >
                    <Text style={styles.btnText}>-</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.btn,
                        styles.btnGreen,
                        pressed && styles.btnPressed,
                    ]}
                    onPress={() => setCount(count + 1)}
                >
                    <Text style={styles.btnText}>+</Text>
                </Pressable>
            </View>
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
        fontWeight: "bold",
        marginBottom: 15,
    },
    counter: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 15,
    },
    btnContainer: {
        flexDirection: "row",
        gap: 30
    },
    btn: {
        width: 60,
        height: 60,
        backgroundColor: "#007BFF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        // iOS
        shadowColor: "#000", // Colore dell'ombra
        shadowOffset: { width: 0, height: 4 }, // Offset orizzontale e verticale
        shadowOpacity: 0.3, // Opacità dell'ombra
        shadowRadius: 6, // Raggio di sfocatura dell'ombra
        // Android
        elevation: 5, // Elevazione per l'ombra su Android
    },
    btnRed: {
        backgroundColor: "#FF3B30",
    },
    btnGreen: {
        backgroundColor: "#4CD964",
    },
    btnPressed: {
        opacity: 0.6,
    },
    btnText: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold",
    },
});