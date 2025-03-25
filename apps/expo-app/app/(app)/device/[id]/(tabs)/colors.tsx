import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { observer } from "@legendapp/state/react";
import { Motion } from "@legendapp/motion";
import { devices$ } from "@/store";

export default observer(function DeviceColorsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [selectedSegment, setSelectedSegment] = useState(0);
  const deviceState = id
    ? devices$.deviceStates[id as string]?.state.get()
    : null;
  const isLoading = devices$.isLoading.get();

  if (isLoading || !deviceState) {
    return (
      <View style={styles.centerContent}>
        <Text style={styles.loadingText}>Načítám stav zařízení...</Text>
      </View>
    );
  }

  // Získání segmentů pro výběr
  const segments = deviceState.state.seg || [];

  return (
    <View style={styles.container}>
      {/* Výběr segmentu */}
      <View style={styles.card}>
        <Text style={styles.label}>Vyberte segment</Text>
        <View style={styles.segmentsRow}>
          {segments.map((segment, index) => (
            <Motion.View
              key={`segment-${index}`}
              style={[
                styles.segmentButton,
                selectedSegment === index && styles.selectedSegment
              ]}
              whileTap={{ scale: 0.95 }}
              onTouchEnd={() => setSelectedSegment(index)}
            >
              <Text
                style={[
                  styles.segmentText,
                  selectedSegment === index && styles.selectedSegmentText
                ]}
              >
                {index}
              </Text>
            </Motion.View>
          ))}
        </View>
      </View>

      {/* Color Picker */}
      <View style={styles.card}>
        <Text style={styles.label}>Vyberte barvu</Text>
        {/* Zde bude později ColorPicker komponenta */}
        <View style={styles.colorPickerPlaceholder}>
          <Text style={styles.placeholderText}>
            Výběr barvy bude implementován později
          </Text>
        </View>
      </View>

      {/* Přednastavené barvy */}
      <View style={styles.card}>
        <Text style={styles.label}>Přednastavené barvy</Text>
        <View style={styles.presetColors}>
          {[
            "#FF0000",
            "#00FF00",
            "#0000FF",
            "#FFFF00",
            "#FF00FF",
            "#00FFFF",
            "#FFFFFF"
          ].map((color, index) => (
            <Motion.View
              key={`color-${index}`}
              style={[styles.colorPreset, { backgroundColor: color }]}
              whileTap={{ scale: 0.85 }}
              onTouchEnd={() => {
                // Zde bude později implementace nastavení barvy
                console.log("Selected color:", color);
              }}
            />
          ))}
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
  label: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12
  },
  segmentsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -4
  },
  segmentButton: {
    backgroundColor: "#2a2a2a",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4
  },
  selectedSegment: {
    backgroundColor: "#3b82f6"
  },
  segmentText: {
    color: "#aaaaaa",
    fontSize: 14,
    fontWeight: "500"
  },
  selectedSegmentText: {
    color: "white"
  },
  colorPickerPlaceholder: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2a2a2a",
    borderRadius: 8
  },
  placeholderText: {
    color: "#aaaaaa",
    fontSize: 14,
    textAlign: "center"
  },
  presetColors: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  colorPreset: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 8,
    borderWidth: 1,
    borderColor: "#444444"
  }
});
