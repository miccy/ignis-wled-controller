import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Motion } from "@legendapp/motion";
import Slider from "@react-native-community/slider";
import { observer } from "@legendapp/state/react";

interface BrightnessSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export const BrightnessSlider = observer(function BrightnessSlider({
  value,
  onChange
}: BrightnessSliderProps) {
  return (
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={255}
        step={1}
        value={value}
        onValueChange={onChange}
        minimumTrackTintColor="#3b82f6"
        maximumTrackTintColor="#4b5563"
        thumbTintColor="#60a5fa"
        style={styles.slider}
      />
      <View style={styles.labelsContainer}>
        <Text style={styles.label}>0</Text>
        <Text style={styles.label}>255</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  label: {
    color: '#888888',
    fontSize: 12,
  },
});
