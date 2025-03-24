// Správa zařízení pomocí Legend State
import { observable } from "@legendapp/state";
import { persistObservable } from "@legendapp/state/persist-plugins/local-storage";
import type { Device, State } from "@/types/wled";

// Typy pro stav zařízení
interface DevicesState {
  list: Record<string, Device>;
  selectedId: string | null;
  deviceStates: Record<string, State | null>;
  isLoading: boolean;
  error: string | null;
}

// Výchozí stav
const initialState: DevicesState = {
  list: {},
  selectedId: null,
  deviceStates: {},
  isLoading: false,
  error: null
};

// Vytvoření observable objektu
export const devices$ = observable(initialState);

// Perzistence stavu zařízení
persistObservable(devices$, {
  name: "wled-devices",
  storage: "AsyncStorage" // Pro React Native
});

// Computed properties
export const selectedDevice$ = observable(() => {
  const selectedId = devices$.selectedId.get();
  return selectedId ? devices$.list[selectedId].get() : null;
});

export const selectedDeviceState$ = observable(() => {
  const selectedId = devices$.selectedId.get();
  return selectedId ? devices$.deviceStates[selectedId].get() : null;
});
