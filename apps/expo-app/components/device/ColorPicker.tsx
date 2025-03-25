import React, { useState, useEffect, type FC } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ColorPicker, fromHsv, toHsv } from "react-native-color-picker";
import { devices$ } from "@/store";

interface Props {
  segmentId: number;
  initialColor?: string; // Hex barva
  onColorChange?: (color: string) => void;
}

export const ColorPickerComponent: FC<Props> = ({
  segmentId,
  initialColor = "#FF0000",
  onColorChange
}) => {
  const [color, setColor] = useState(initialColor);
  const deviceState =
    devices$.deviceStates[devices$.selectedId.get()]?.state.get();

  // Aktualizace barvy při změně segmentu
  useEffect(() => {
    if (deviceState?.seg) {
      const segment = deviceState.seg.find(s => s.id === segmentId);
      if (segment?.col?.[0]) {
        const [r, g, b] = segment.col[0];
        const hexColor = rgbToHex(r, g, b);
        setColor(hexColor);
      }
    }
  }, [deviceState, segmentId]);

  const handleColorChange = (hsv: any) => {
    const newColor = fromHsv(hsv);
    setColor(newColor);
    onColorChange?.(newColor);
  };

  const handleColorSubmit = () => {
    const rgb = hexToRgb(color);
    if (rgb && deviceState) {
      // TODO: Implementovat setColor akci
    }
  };

  // Pomocné funkce pro konverzi barev
  const rgbToHex = (r: number, g: number, b: number) => {
    return (
      "#" +
      [r, g, b]
        .map(x => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  };

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  };

  return (
    <View style={styles.container}>
      <ColorPicker
        color={color}
        onColorChange={handleColorChange}
        style={styles.picker}
      />
      <TouchableOpacity style={styles.button} onPress={handleColorSubmit}>
        <Text style={styles.buttonText}>Použít barvu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 350
  },
  picker: {
    flex: 1
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
});
