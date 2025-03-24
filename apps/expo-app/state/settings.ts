import { observable } from "@legendapp/state";
import { persistObservable } from "@legendapp/state/persist";
import AsyncStorage from "@react-native-async-storage/async-storage"; // TODO: Nahradit za MMKV

export interface SettingsState {
  darkMode: boolean;
  notificationsEnabled: boolean;
  autoConnect: boolean;
  apiKey?: string;
}

const initialState: SettingsState = {
  darkMode: false,
  notificationsEnabled: true,
  autoConnect: true,
  apiKey: undefined
};

export const settings$ = observable<SettingsState>(initialState);

// Nastavení persistence dat
persistObservable(settings$, {
  local: {
    name: "wled-settings",
    storage: AsyncStorage
  }
});
