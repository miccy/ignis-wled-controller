import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { observer } from "@legendapp/state/react";
import { devices$ } from "@/store";

export default observer(function DeviceLayout() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const device = id ? devices$.list[id as string].get() : null;

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
});
