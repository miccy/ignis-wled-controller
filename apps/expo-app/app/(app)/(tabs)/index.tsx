// Seznam zařízení - první záložka
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { observer } from "@legendapp/state/react";
import { Motion } from "@legendapp/motion";
import { LegendList } from "@legendapp/list";
import { Link } from "expo-router";
import { devices$ } from "@/store";
import { useDebouncedCallback } from "@/hooks/useDebounce";

export default observer(function DevicesScreen() {
  const devicesList = devices$.list.get();
  const isLoading = devices$.isLoading.get();
  const error = devices$.error.get();

  // Převedení Record<string, Device> na array pro List
  const devicesArray = Object.entries(devicesList).map(([id, device]) => ({
    id,
    ...device
  }));

  const refreshDevices = useDebouncedCallback(() => {
    // Logika pro vyhledávání zařízení bude implementována později
    console.log("Refreshing devices...");
  }, 500);

  const renderDeviceItem = ({ item }: { item: any }) => (
    <Link href={`/device/${item.id}`} asChild>
      <Motion.View
        className="bg-gray-800 rounded-xl p-4 mb-3"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-white text-lg font-bold">{item.name}</Text>
            <Text className="text-gray-400">{item.address}</Text>
          </View>
          <View className="bg-green-500 w-3 h-3 rounded-full" />
        </View>
      </Motion.View>
    </Link>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <StatusBar barStyle="light-content" />

      <View className="p-4 flex-1">
        <Text className="text-white text-2xl font-bold mb-6">
          WLED Zařízení
        </Text>

        {isLoading ? (
          <View className="flex-1 justify-center items-center">
            <Text className="text-gray-400">Hledám zařízení...</Text>
          </View>
        ) : error ? (
          <View className="bg-red-900/40 p-4 rounded-lg mb-4">
            <Text className="text-red-300">{error}</Text>
          </View>
        ) : devicesArray.length === 0 ? (
          <View className="flex-1 justify-center items-center">
            <Text className="text-gray-400 text-center mb-4">
              Žádná zařízení nebyla nalezena
            </Text>
            <Motion.View
              className="bg-blue-600 px-6 py-3 rounded-full"
              whileTap={{ scale: 0.95 }}
              onTouchEnd={refreshDevices}
            >
              <Text className="text-white font-medium">Vyhledat zařízení</Text>
            </Motion.View>
          </View>
        ) : (
          <LegendList
            data={devicesArray}
            renderItem={renderDeviceItem}
            keyExtractor={item => item.id}
            onRefresh={refreshDevices}
            estimatedItemSize={80}
          />
        )}
      </View>
    </SafeAreaView>
  );
});
