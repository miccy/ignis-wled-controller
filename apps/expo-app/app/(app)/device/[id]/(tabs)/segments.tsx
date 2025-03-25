import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TextInput } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { observer } from "@legendapp/state/react";
import { Motion } from "@legendapp/motion";
import { devices$ } from "@/store";

export default observer(function DeviceSegmentsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [selectedSegment, setSelectedSegment] = useState(0);
  const [editMode, setEditMode] = useState(false);
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

  // Získání segmentů
  const segments = deviceState.seg || [];
  const currentSegment = segments[selectedSegment] || {};

  const toggleSegment = (on: boolean) => {
    console.log(`Toggling segment ${selectedSegment}: ${on}`);
    // Zde bude později implementace zapnutí/vypnutí segmentu
  };

  const updateSegmentRange = (start: number, stop: number) => {
    console.log(`Updating segment ${selectedSegment} range: ${start}-${stop}`);
    // Zde bude později implementace aktualizace rozsahu segmentu
  };

  return (
    <View style={styles.container}>
      {/* Seznam segmentů */}
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Segmenty</Text>
          <Motion.View
            style={styles.addButton}
            whileTap={{ scale: 0.95 }}
            onTouchEnd={() => {
              console.log("Add segment");
              // Zde bude později implementace přidání segmentu
            }}
          >
            <Text style={styles.addButtonText}>+</Text>
          </Motion.View>
        </View>

        <View style={styles.segmentsContainer}>
          {segments.map((segment, index) => (
            <Motion.View
              key={`segment-${segment.id || index}`}
              style={[
                styles.segmentItem,
                selectedSegment === index && styles.selectedSegmentItem
              ]}
              whileTap={{ scale: 0.98 }}
              onTouchEnd={() => setSelectedSegment(index)}
            >
              <Text style={styles.segmentTitle}>Segment {index}</Text>
              <Text style={styles.segmentRange}>
                {segment.start} - {segment.stop}
              </Text>
              <View
                style={[
                  styles.statusDot,
                  segment.on ? styles.statusOn : styles.statusOff
                ]}
              />
            </Motion.View>
          ))}
        </View>
      </View>

      {/* Detail segmentu */}
      {currentSegment && (
        <View style={styles.card}>
          <Text style={styles.title}>Detail segmentu {selectedSegment}</Text>

          <View style={styles.segmentDetailRow}>
            <Text style={styles.detailLabel}>Zapnuto</Text>
            <Switch
              value={!!currentSegment.on}
              onValueChange={toggleSegment}
              trackColor={{ false: "#444444", true: "#3b82f6" }}
              thumbColor={currentSegment.on ? "#ffffff" : "#f4f3f4"}
            />
          </View>

          <View style={styles.segmentDetailRow}>
            <Text style={styles.detailLabel}>Od</Text>
            <TextInput
              style={styles.input}
              value={currentSegment.start?.toString() || "0"}
              keyboardType="number-pad"
              onChangeText={text => {
                const start = parseInt(text) || 0;
                const stop = currentSegment.stop || 0;
                updateSegmentRange(start, stop);
              }}
            />
          </View>

          <View style={styles.segmentDetailRow}>
            <Text style={styles.detailLabel}>Do</Text>
            <TextInput
              style={styles.input}
              value={currentSegment.stop?.toString() || "0"}
              keyboardType="number-pad"
              onChangeText={text => {
                const stop = parseInt(text) || 0;
                const start = currentSegment.start || 0;
                updateSegmentRange(start, stop);
              }}
            />
          </View>

          <Motion.View
            style={styles.deleteButton}
            whileTap={{ scale: 0.95 }}
            onTouchEnd={() => {
              console.log(`Delete segment ${selectedSegment}`);
              // Zde bude později implementace smazání segmentu
            }}
          >
            <Text style={styles.deleteButtonText}>Smazat segment</Text>
          </Motion.View>
        </View>
      )}
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
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "600"
  },
  addButton: {
    backgroundColor: "#3b82f6",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center"
  },
  addButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  segmentsContainer: {
    marginBottom: 8
  },
  segmentItem: {
    backgroundColor: "#2a2a2a",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  selectedSegmentItem: {
    backgroundColor: "#3b82f6"
  },
  segmentTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    flex: 1
  },
  segmentRange: {
    color: "#aaaaaa",
    fontSize: 14,
    marginRight: 8
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6
  },
  statusOn: {
    backgroundColor: "#4ade80"
  },
  statusOff: {
    backgroundColor: "#888888"
  },
  segmentDetailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  detailLabel: {
    color: "#dddddd",
    fontSize: 16
  },
  input: {
    backgroundColor: "#2a2a2a",
    borderRadius: 8,
    color: "white",
    padding: 10,
    width: 100,
    textAlign: "center"
  },
  deleteButton: {
    backgroundColor: "#ef4444",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginTop: 8
  },
  deleteButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600"
  }
});
