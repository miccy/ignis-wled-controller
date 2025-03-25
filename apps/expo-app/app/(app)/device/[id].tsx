// Hlavní obrazovka pro ovládání konkrétního WLED zařízení
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  StatusBar
} from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { devices$ } from "@/store";
import { ColorPickerComponent } from "@/components/device/ColorPicker";
import { EffectList } from "@/components/device/EffectList";
import { observer } from "@legendapp/state/react";
import { Motion } from "@legendapp/motion";
import { BrightnessSlider } from "@/components/device/BrightnessSlider";

export default observer(function DeviceScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [selectedSegment, setSelectedSegment] = useState(0);

  const device = devices$.list.find(d => d.id === id)?.get();
  const deviceState = devices$.deviceStates[id as string]?.state.get();
  const isLoading = devices$.isLoading.get();

  useEffect(() => {
    if (id) {
      devices$.selectedId.set(id);
    }
  }, [id]);

  if (isLoading && !deviceState) {
    return (
      <SafeAreaView className="flex-1 bg-gray-900 justify-center items-center">
        <Text className="text-white">Načítám zařízení...</Text>
      </SafeAreaView>
    );
  }

  if (!device || !deviceState) {
    return (
      <SafeAreaView className="flex-1 bg-gray-900 justify-center items-center p-4">
        <Text className="text-red-400 text-center mb-4">
          Zařízení nenalezeno
        </Text>
        <Motion.View
          className="bg-blue-600 px-6 py-3 rounded-full"
          whileTap={{ scale: 0.95 }}
          onTouchEnd={() => router.back()}
        >
          <Text className="text-white">Zpět</Text>
        </Motion.View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <StatusBar barStyle="light-content" />

      <View className="p-4 flex-1">
        <Text className="text-white text-2xl font-bold mb-2">
          {device.name}
        </Text>
        <Text className="text-gray-400 mb-6">{device.ipAddress}</Text>

        <View className="space-y-6">
          {/* Power toggle */}
          <Motion.View
            className={`p-4 rounded-xl ${deviceState.state.on ? "bg-blue-600" : "bg-gray-700"}`}
            whileTap={{ scale: 0.98 }}
            onTouchEnd={() => {
              // TODO: Implementovat toggle
            }}
          >
            <Text className="text-white text-center text-lg font-medium">
              {deviceState.state.on ? "Vypnout" : "Zapnout"}
            </Text>
          </Motion.View>

          {/* Brightness slider */}
          <View className="bg-gray-800 p-4 rounded-xl">
            <Text className="text-white mb-2">
              Jas: {deviceState.state.bri}
            </Text>
            <BrightnessSlider
              value={deviceState.state.bri}
              onChange={value => {
                // TODO: Implementovat změnu jasu
              }}
            />
          </View>

          {/* Controls */}
          <View className="flex-row justify-between">
            <Motion.View
              className="flex-1 mr-2 bg-gray-800 p-4 rounded-xl items-center"
              whileTap={{ scale: 0.95 }}
              onTouchEnd={() => router.push(`/device/${id}/colors`)}
            >
              <Text className="text-white">Barvy</Text>
            </Motion.View>

            <Motion.View
              className="flex-1 mx-1 bg-gray-800 p-4 rounded-xl items-center"
              whileTap={{ scale: 0.95 }}
              onTouchEnd={() => router.push(`/device/${id}/effects`)}
            >
              <Text className="text-white">Efekty</Text>
            </Motion.View>

            <Motion.View
              className="flex-1 ml-2 bg-gray-800 p-4 rounded-xl items-center"
              whileTap={{ scale: 0.95 }}
              onTouchEnd={() => router.push(`/device/${id}/segments`)}
            >
              <Text className="text-white">Segmenty</Text>
            </Motion.View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5"
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  controlSection: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12
  },
  powerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  slider: {
    width: "100%",
    height: 40
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center"
  }
});
