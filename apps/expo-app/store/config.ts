import { MMKV } from "react-native-mmkv";
import * as SecureStore from "expo-secure-store"; // TODO: použít expo-secure-store pro citlivá data (auth)
import { configureSynced } from "@legendapp/state/sync";
import { ObservablePersistMMKV } from "@legendapp/state/persist-plugins/mmkv";

// Hlavní úložiště - MMKV pro aplikační data
export const mainStorage = new MMKV({
  id: "ignis-wled-data",
  encryptionKey: "wled-app-secret" // TODO: Použít environment proměnnou
});

// Konfigurace persistentního úložiště
export const persistConfig = configureSynced({
  persist: {
    plugin: ObservablePersistMMKV
  }
});
