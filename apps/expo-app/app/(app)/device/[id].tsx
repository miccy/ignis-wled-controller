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
import { devices$, type Device } from "@/store";
import { ColorPickerComponent } from "@/components/device/ColorPicker";
import { EffectList } from "@/components/device/EffectList";
import { observer } from "@legendapp/state/react";
import { Motion } from "@legendapp/motion";
import { BrightnessSlider } from "@/components/device/BrightnessSlider";

export default observer(function DeviceScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [selectedSegment, setSelectedSegment] = useState(0);

  const device = devices$.list.get().find(d => d.id === id);
  const deviceState = id ? devices$.deviceStates[id]?.get() : null;
  const isLoading = devices$.isLoading.get();

  useEffect(() => {
    if (id) {
      devices$.selectedId.set(id);
    }
  }, [id]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!device || !deviceState) {
    return (
      <View style={styles.container}>
        <Text>Zařízení nenalezeno</Text>
      </View>
    );
  }

  const handleToggle = () => {
    if (id) {
      devices$.deviceStates[id].on.set(!deviceState.on);
    }
  };

  const handleBrightnessChange = (value: number) => {
    if (id) {
      devices$.deviceStates[id].bri.set(value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Stack.Screen
        options={{
          title: device.name,
          headerLargeTitle: true
        }}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <BrightnessSlider
            value={deviceState.bri}
            onValueChange={handleBrightnessChange}
          />
          <ColorPickerComponent
            selectedSegment={selectedSegment}
            onSegmentChange={setSelectedSegment}
            segments={deviceState.seg}
          />
          <EffectList segments={deviceState.seg} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  scrollView: {
    flex: 1
  },
  content: {
    padding: 16,
    gap: 16
  }
});
