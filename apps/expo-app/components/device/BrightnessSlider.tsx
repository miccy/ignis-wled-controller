import React from "react";
import { View, StyleSheet } from "react-native";
import { Slider } from "tamagui";

export interface BrightnessSliderProps {
  value: number;
  onValueChange: (value: number) => void;
}

export const BrightnessSlider: React.FC<BrightnessSliderProps> = ({
  value,
  onValueChange
}) => {
  return (
    <View style={styles.container}>
      <Slider
        defaultValue={[value]}
        min={0}
        max={255}
        step={1}
        onValueChange={([val]) => onValueChange(val)}
      >
        <Slider.Track backgroundColor="$gray8">
          <Slider.TrackActive backgroundColor="$blue8" />
        </Slider.Track>
        <Slider.Thumb backgroundColor="$blue10" />
      </Slider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40
  }
});
