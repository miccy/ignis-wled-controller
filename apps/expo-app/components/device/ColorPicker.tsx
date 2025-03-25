import React, { useState, useEffect, type FC } from "react";
import { Stack } from "tamagui";
import type { Segment } from "@/store";
import ColorPicker from "reanimated-color-picker";
import { View } from "react-native";

interface Props {
  selectedSegment: number;
  onSegmentChange: (segmentId: number) => void;
  segments: Segment[];
}

export const ColorPickerComponent: FC<Props> = ({
  selectedSegment,
  segments
}) => {
  const currentSegment = segments[selectedSegment];
  const [color, setColor] = useState("#FF0000");

  // Aktualizace barvy při změně segmentu
  useEffect(() => {
    if (currentSegment?.col?.[0]) {
      const [r, g, b] = currentSegment.col[0];
      const hexColor = rgbToHex(r, g, b);
      setColor(hexColor);
    }
  }, [currentSegment]);

  const handleColorChange = ({ hex }: { hex: string }) => {
    setColor(hex);
  };

  const handleColorComplete = ({ hex }: { hex: string }) => {
    const rgb = hexToRgb(hex);
    if (rgb && currentSegment) {
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
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16)
        }
      : null;
  };

  return (
    <Stack>
      <View style={{ height: 300 }}>
        <ColorPicker
          value={color}
          onComplete={handleColorComplete}
          onChange={handleColorChange}
          boundedThumb
          style={{
            width: "100%",
            height: "100%"
          }}
        />
      </View>
    </Stack>
  );
};
