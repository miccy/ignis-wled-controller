import React, { useEffect } from "react";
import { useRouter, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { observer } from "@legendapp/state/react";
import { settings$ } from "@/store";

export default observer(function OnboardingLayout() {
  const router = useRouter();
  const onboardingCompleted = settings$.onboardingCompleted.get();

  // Pokud byl onboarding dokončen, přejdeme na hlavní část aplikace
  useEffect(() => {
    if (onboardingCompleted) {
      router.replace("/(app)");
    }
  }, [onboardingCompleted, router]);

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#121212"
          }
        }}
      />
    </SafeAreaProvider>
  );
});
