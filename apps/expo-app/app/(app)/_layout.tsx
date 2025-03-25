import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { observer } from "@legendapp/state/react";
import { settings$ } from "@/store";

export default observer(function TabsLayout() {
  const theme = settings$.theme.get();
  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      /* zde by bylo detekování systémového tématu */ true);

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
          title: "Zařízení",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flash-outline" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="guide"
        options={{
          title: "Průvodce",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Nastavení",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  );
});
