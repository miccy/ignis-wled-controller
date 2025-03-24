import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Motion } from "@legendapp/motion";
import { observer } from "@legendapp/state/react";
import { List } from "@legendapp/list";
import { selectedDeviceState$ } from "../../state/devices";
import { effects$ } from "../../state/effects";

interface EffectListProps {
  segmentId: number;
  onSelectEffect?: (effectId: number) => void;
}

export const EffectList = observer(function EffectList({
  segmentId,
  onSelectEffect
}: EffectListProps) {
  const deviceState = selectedDeviceState$.get();
  const effectsList = effects$.list.get();

  const currentEffectId =
    deviceState?.seg?.find(seg => seg.id === segmentId)?.fx ?? 0;

  const handleSelectEffect = (effectId: number) => {
    if (onSelectEffect) {
      onSelectEffect(effectId);
    }
  };

  const renderEffect = ({ item, index }: { item: string; index: number }) => {
    const isSelected = currentEffectId === index;

    return (
      <Motion.View
        className={`p-3 my-1 rounded-lg ${isSelected ? "bg-blue-500" : "bg-gray-700"}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <TouchableOpacity
          onPress={() => handleSelectEffect(index)}
          className="w-full"
        >
          <Text
            className={`text-base ${isSelected ? "font-bold text-white" : "text-gray-100"}`}
          >
            {item}
          </Text>
        </TouchableOpacity>
      </Motion.View>
    );
  };

  return (
    <View className="flex-1">
      <Text className="text-lg font-bold mb-2">Efekty</Text>
      {effectsList.length > 0 ? (
        <List
          data={effectsList}
          renderItem={renderEffect}
          keyExtractor={(_, index) => `effect-${index}`}
          estimatedItemSize={50}
        />
      ) : (
        <Text className="text-gray-400">Žádné efekty nejsou k dispozici</Text>
      )}
    </View>
  );
});
