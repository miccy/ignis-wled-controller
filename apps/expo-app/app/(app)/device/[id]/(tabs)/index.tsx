import React, { useEffect } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { observer } from "@legendapp/state/react";
import { Motion } from "@legendapp/motion";
import { devices$ } from "@/store";
import { BrightnessSlider } from "@/components/device/BrightnessSlider";

export default observer(function DeviceOverviewScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const device = id ? devices$.list[id as string].get() : null;
  const deviceState = id
    ? devices$.deviceStates[id as string]?.state.get()
    : null;
  const isLoading = devices$.isLoading.get();

  useEffect(() => {
    if (id) {
      devices$.selectedId.set(id as string);
      // Zde bude později načtení stavu zařízení
    }
  }, [id]);

  if (isLoading || !deviceState) {
    return (
      <View style={styles.centerContent}>
        <Text style={styles.loadingText}>Načítám stav zařízení...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.powerRow}>
          <Text style={styles.label}>Napájení</Text>
          <Switch
            value={deviceState.on}
            onValueChange={value => {
              // Implementace změny stavu bude později
              console.log("Power toggled:", value);
            }}
            trackColor={{ false: "#444444", true: "#3b82f6" }}
            thumbColor={deviceState.on ? "#ffffff" : "#f4f3f4"}
          />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Jas ({deviceState.bri})</Text>
        {/* Zde bude komponenta BrightnessSlider až ji vytvoříme */}
        <View style={styles.sliderPlaceholder}>
          <Text style={styles.placeholderText}>Ovládání jasu bude zde</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Informace o zařízení</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Verze:</Text>
          <Text style={styles.infoValue}>{device?.version || "N/A"}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Adresa:</Text>
          <Text style={styles.infoValue}>{device?.address || "N/A"}</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#121212"
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    color: "#aaaaaa",
    fontSize: 16
  },
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16
  },
  powerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  label: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 8
  },
  infoLabel: {
    color: "#aaaaaa",
    fontSize: 14,
    width: 100
  },
  infoValue: {
    color: "white",
    fontSize: 14
  },
  sliderPlaceholder: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2a2a2a",
    borderRadius: 8
  },
  placeholderText: {
    color: "#aaaaaa",
    fontSize: 14
  }
});
