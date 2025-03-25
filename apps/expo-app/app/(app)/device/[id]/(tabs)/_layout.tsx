import React from "react";
import { Tabs, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { observer } from "@legendapp/state/react";
import { devices$ } from "@/state/devices";
import { settings$ } from "@/state/settings";

export default observer(function DeviceTabsLayout() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const device = id ? devices$.list[id as string].get() : null;
  const theme = settings$.get()?.theme;
  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      /* zde by bylo detekování systémového tématu */ true);

  if (!device) {
    return null; // Toto by se nemělo stát, ale pro jistotu
  }

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDarkMode ? "#121212" : "#ffffff",
          borderTopColor: isDarkMode ? "#333333" : "#e5e5e5"
        },
        tabBarActiveTintColor: "#3b82f6",
        tabBarInactiveTintColor: isDarkMode ? "#888888" : "#666666",
        headerStyle: {
          backgroundColor: isDarkMode ? "#121212" : "#ffffff"
        },
        headerTintColor: isDarkMode ? "#ffffff" : "#000000"
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Přehled",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          headerTitle: device.name
        }}
      />
      <Tabs.Screen
        name="colors"
        options={{
          title: "Barvy",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="color-palette-outline" size={size} color={color} />
          ),
          headerTitle: `${device.name} - Barvy`
        }}
      />
      <Tabs.Screen
        name="effects"
        options={{
          title: "Efekty",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="sparkles-outline" size={size} color={color} />
          ),
          headerTitle: `${device.name} - Efekty`
        }}
      />
      <Tabs.Screen
        name="segments"
        options={{
          title: "Segmenty",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="layers-outline" size={size} color={color} />
          ),
          headerTitle: `${device.name} - Segmenty`
        }}
      />
    </Tabs>
  );
});
