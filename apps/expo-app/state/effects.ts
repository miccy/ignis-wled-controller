import { observable } from "@legendapp/state";
import { persistObservable } from "@legendapp/state/persist";
// TODO: Nahradit AsyncStorage za MMKV
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Effect {
  id: string;
  name: string;
  presetId?: number;
  config: Record<string, any>;
}

export interface EffectsState {
  list: Effect[];
  selectedId: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: EffectsState = {
  list: [],
  selectedId: null,
  isLoading: false,
  error: null
};

export const effects$ = observable<EffectsState>(initialState);

// Nastavení persistence dat
persistObservable(effects$, {
  local: {
    name: "wled-effects",
    storage: AsyncStorage
  }
});
