import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Motion } from "@legendapp/motion";
import { observable } from "@legendapp/state";
import { settings$ } from "@/store";

export default function WelcomeScreen() {
  const router = useRouter();

  const startOnboarding = () => {
    // Pokud by bylo více kroků onboardingu, přešli bychom na další krok
    // Pro zjednodušení jdeme rovnou na poslední obrazovku (auth)
    router.push("/(onboarding)/auth");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Vítejte v Ignis WLED Controller</Text>
        <Text style={styles.subtitle}>
          Ovládejte svá WLED zařízení jednoduše a efektivně
        </Text>
      </View>

      <Motion.View
        style={styles.button}
        whileTap={{ scale: 0.95 }}
        onTouchEnd={startOnboarding}
      >
        <Text style={styles.buttonText}>Začít</Text>
      </Motion.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#121212"
  },
  content: {
    marginBottom: 40,
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 16
  },
  subtitle: {
    fontSize: 16,
    color: "#aaaaaa",
    textAlign: "center",
    marginHorizontal: 20
  },
  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600"
  }
});
