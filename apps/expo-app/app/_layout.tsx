import "../tamagui-web.css";

import type React from "react";
import { SplashScreen, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { observer } from "@legendapp/state/react";
import { configureMotion } from "@legendapp/motion";
import { settings$ } from "@/store";
import { useTheme } from "tamagui";
import { Provider } from "../components/Provider";
import { useColorScheme } from "react-native";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme
} from "@react-navigation/native";
import { useFonts } from "expo-font";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(app)"
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default observer(function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

  const theme = settings$.theme.get();
  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      /* zde by bylo detekování systémového tématu */ true);

  return (
    <Providers>
      <RootLayoutNav />
    </Providers>
  );
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>;
};

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const theme = useTheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <Stack>
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{
            title: "Tamagui + Expo",
            presentation: "modal",
            animation: "slide_from_right",
            gestureEnabled: true,
            gestureDirection: "horizontal",
            contentStyle: {
              backgroundColor: theme.background.val
            }
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
