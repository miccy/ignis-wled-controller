import { observable } from "@legendapp/state";
import { syncObservable } from "@legendapp/state/sync";
import { persistConfig } from "./config";

// Typy
export interface Device {
  id: string;
  name: string;
  ipAddress: string;
  connected: boolean;
}

export interface Effect {
  id: string;
  name: string;
  presetId?: number;
  config: Record<string, any>;
}

export interface Settings {
  theme: "light" | "dark" | "system";
  darkMode: boolean;
  language: string;
}

export interface Segment {
  id: number;
  fx: number;
  pal: number;
  col: number[][];
}

export interface DeviceState {
  on: boolean;
  bri: number;
  seg: Segment[];
  info?: {
    effects?: string[];
    palettes?: string[];
  };
}

// Hlavní store
export const store = observable({
  devices: {
    list: [] as Device[],
    selectedId: null as string | null,
    selectedDevice: null as Device | null,
    deviceStates: {} as Record<string, DeviceState>,
    isLoading: false,
    error: null as string | null
  },
  effects: {
    list: [] as Effect[],
    selectedId: null as string | null,
    isLoading: false,
    error: null as string | null
  },
  settings: {
    darkMode: false,
    language: "cs"
  }
});

// Perzistence pro hlavní data
syncObservable(
  store.devices,
  persistConfig({
    persist: {
      name: "wled-devices"
    }
  })
);

syncObservable(
  store.effects,
  persistConfig({
    persist: {
      name: "wled-effects"
    }
  })
);

syncObservable(
  store.settings,
  persistConfig({
    persist: {
      name: "wled-settings"
    }
  })
);

// Exporty pro jednodušší přístup
export const devices$ = store.devices;
export const selectedDeviceState$ = store.devices.selectedDevice;
export const effects$ = store.effects;
export const settings$ = store.settings;
