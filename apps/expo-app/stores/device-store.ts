//TODO: Změnit na LegendApp State
import { create } from "zustand";
import { WLEDApiClient } from "@/api/wled-api";
import { WLEDDiscovery } from "@/api/discovery";
import type { Device, State, Effect, Palette } from "@/types/wled";

interface DeviceStore {
  devices: Device[];
  selectedDeviceId: string | null;
  currentState: State | null;
  isLoading: boolean;
  error: string | null;

  // Akce
  discoverDevices: () => Promise<void>;
  selectDevice: (deviceId: string) => Promise<void>;
  setState: (newState: Partial<State>) => Promise<void>;
  setEffect: (
    segmentId: number,
    effectId: number,
    paletteId: number
  ) => Promise<void>;
  setColor: (segmentId: number, colors: number[][]) => Promise<void>;
  setBrightness: (brightness: number) => Promise<void>;
  setPower: (on: boolean) => Promise<void>;
}

const discovery = new WLEDDiscovery();
let apiClient: WLEDApiClient | null = null;

export const useDeviceStore = create<DeviceStore>((set, get) => ({
  devices: [],
  selectedDeviceId: null,
  currentState: null,
  isLoading: false,
  error: null,

  discoverDevices: async () => {
    set({ isLoading: true, error: null });

    try {
      const devices = await discovery.discoverDevices();
      set({ devices, isLoading: false });
    } catch (error) {
      set({
        error: `Failed to discover devices: ${error instanceof Error ? error.message : "Unknown error"}`,
        isLoading: false
      });
    }
  },

  selectDevice: async (deviceId: string) => {
    const { devices } = get();
    const device = devices.find(d => d.id === deviceId);

    if (!device) {
      set({ error: `Device ${deviceId} not found` });
      return;
    }

    set({ selectedDeviceId: deviceId, isLoading: true, error: null });

    try {
      apiClient = new WLEDApiClient(`http://${device.address}`);
      const state = await apiClient.getState();
      set({ currentState: state, isLoading: false });
    } catch (error) {
      set({
        error: `Failed to connect to device: ${error instanceof Error ? error.message : "Unknown error"}`,
        isLoading: false,
        selectedDeviceId: null,
        currentState: null
      });
    }
  },

  setState: async (newState: Partial<State>) => {
    if (!apiClient) {
      set({ error: "No device selected" });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      await apiClient.setState(newState);
      const state = await apiClient.getState();
      set({ currentState: state, isLoading: false });
    } catch (error) {
      set({
        error: `Failed to update state: ${error instanceof Error ? error.message : "Unknown error"}`,
        isLoading: false
      });
    }
  },

  setEffect: async (segmentId: number, effectId: number, paletteId: number) => {
    if (!apiClient) {
      set({ error: "No device selected" });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      await apiClient.setEffect(segmentId, effectId, paletteId);
      const state = await apiClient.getState();
      set({ currentState: state, isLoading: false });
    } catch (error) {
      set({
        error: `Failed to set effect: ${error instanceof Error ? error.message : "Unknown error"}`,
        isLoading: false
      });
    }
  },

  setColor: async (segmentId: number, colors: number[][]) => {
    if (!apiClient) {
      set({ error: "No device selected" });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      await apiClient.setColor(segmentId, colors);
      const state = await apiClient.getState();
      set({ currentState: state, isLoading: false });
    } catch (error) {
      set({
        error: `Failed to set color: ${error instanceof Error ? error.message : "Unknown error"}`,
        isLoading: false
      });
    }
  },

  setBrightness: async (brightness: number) => {
    const { setState } = get();
    await setState({ bri: brightness });
  },

  setPower: async (on: boolean) => {
    const { setState } = get();
    await setState({ on });
  }
}));
