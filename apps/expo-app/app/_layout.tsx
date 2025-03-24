import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { observer } from '@legendapp/state/react';
import { configureMotion } from '@legendapp/motion';
import { settings$ } from '../state/settings';

// Konfigurace Legend Motion pro použití s NativeWind
// Pokud budeme později používat NativeWind
// configureMotion({ styled });

export default observer(function RootLayout() {
  const theme = settings$.theme.get();
  const isDarkMode = theme === 'dark' || 
    (theme === 'system' && /* zde by bylo detekování systémového tématu */true);

  return (
    <SafeAreaProvider>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: isDarkMode ? '#121212' : '#ffffff',
          },
          headerTintColor: isDarkMode ? '#ffffff' : '#000000',
          contentStyle: {
            backgroundColor: isDarkMode ? '#121212' : '#f5f5f5',
          },
        }}
      >
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
});
