import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Motion } from "@legendapp/motion";
import { observable } from "@legendapp/state";
import { settings$ } from "@/store";

export default function AuthScreen() {
  const router = useRouter();

  const createAccount = () => {
    // Zde by byla logika pro vytvoření účtu
    // Pro zjednodušení pouze přesměrování na hlavní část aplikace
    settings$.onboardingCompleted.set(true);
    router.replace("/(app)");
  };

  const continueWithoutAccount = () => {
    // Pokračování bez účtu
    settings$.onboardingCompleted.set(true);
    router.replace("/(app)");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Poslední krok</Text>
        <Text style={styles.subtitle}>
          Chcete si vytvořit účet pro synchronizaci nastavení mezi zařízeními?
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Motion.View
          style={styles.buttonPrimary}
          whileTap={{ scale: 0.95 }}
          onTouchEnd={createAccount}
        >
          <Text style={styles.buttonTextPrimary}>Vytvořit účet</Text>
        </Motion.View>

        <Motion.View
          style={styles.buttonSecondary}
          whileTap={{ scale: 0.95 }}
          onTouchEnd={continueWithoutAccount}
        >
          <Text style={styles.buttonTextSecondary}>
            Pokračovat bez přihlášení
          </Text>
        </Motion.View>
      </View>
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
    marginHorizontal: 20,
    marginBottom: 20
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 350
  },
  buttonPrimary: {
    backgroundColor: "#3b82f6",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 16
  },
  buttonTextPrimary: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600"
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#3b82f6",
    alignItems: "center"
  },
  buttonTextSecondary: {
    color: "#3b82f6",
    fontSize: 16,
    fontWeight: "600"
  }
});
