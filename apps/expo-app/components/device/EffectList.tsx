import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Motion } from "@legendapp/motion";
import { observer } from "@legendapp/state/react";
import { LegendList } from "@legendapp/list";
import { selectedDeviceState$ } from "@/store";
import { effects$, type Effect } from "@/store";

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

  const renderEffect = ({ item }: { item: Effect }) => {
    const isSelected = currentEffectId === Number(item.id);

    return (
      <Motion.View
        className={`p-3 my-1 rounded-lg ${isSelected ? "bg-blue-500" : "bg-gray-700"}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <TouchableOpacity
          onPress={() => handleSelectEffect(Number(item.id))}
          className="w-full"
        >
          <Text
            className={`text-base ${isSelected ? "font-bold text-white" : "text-gray-100"}`}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      </Motion.View>
    );
  };

  return (
    <View className="flex-1">
      <Text className="text-lg font-bold mb-2">Efekty</Text>
      {effectsList.length > 0 ? (
        <LegendList<Effect>
          data={effectsList}
          renderItem={renderEffect}
          keyExtractor={item => item.id}
          estimatedItemSize={50}
          recycleItems={false}
        />
      ) : (
        <Text className="text-gray-400">Žádné efekty nejsou k dispozici</Text>
      )}
    </View>
  );
});
