// WLED API implementace
import { WLED_API_ENDPOINTS, WLED_API_METHODS } from "../constants/api";
import type { Device, State, Info, Effects, Palettes } from "../types/wled";

export class WLEDApiClient {
  constructor(private baseUrl: string) {}

  // Získání základních informací o zařízení
  async getInfo(): Promise<Info> {
    return this.fetchFromApi<Info>(WLED_API_ENDPOINTS.INFO);
  }

  // Získání aktuálního stavu
  async getState(): Promise<State> {
    return this.fetchFromApi<State>(WLED_API_ENDPOINTS.STATE);
  }

  // Nastavení nového stavu
  async setState(newState: Partial<State>): Promise<void> {
    return this.fetchFromApi(
      WLED_API_ENDPOINTS.STATE,
      WLED_API_METHODS.POST,
      newState
    );
  }

  // Získání seznamu efektů
  async getEffects(): Promise<Effects> {
    const info = await this.getInfo();
    return info.effects;
  }

  // Získání seznamu palet
  async getPalettes(): Promise<Palettes> {
    const info = await this.getInfo();
    return info.palettes;
  }

  // Nastavení efektu pro segment
  async setEffect(
    segmentId: number,
    effectId: number,
    paletteId: number
  ): Promise<void> {
    const state = {
      seg: [
        {
          id: segmentId,
          fx: effectId,
          pal: paletteId
        }
      ]
    };
    return this.setState(state);
  }

  // Nastavení barvy pro segment
  async setColor(segmentId: number, colors: number[][]): Promise<void> {
    const state = {
      seg: [
        {
          id: segmentId,
          col: colors
        }
      ]
    };
    return this.setState(state);
  }

  // Nastavení jasu
  async setBrightness(brightness: number): Promise<void> {
    return this.setState({ bri: brightness });
  }

  // Zapnutí/vypnutí
  async setPower(on: boolean): Promise<void> {
    return this.setState({ on });
  }

  // Interní metoda pro komunikaci s API
  private async fetchFromApi<T>(
    endpoint: string,
    method: string = WLED_API_METHODS.GET,
    body?: any
  ): Promise<T> {
    const url = `${this.baseUrl}/${endpoint}`;

    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json"
      }
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`API call failed: ${response.status}`);
    }

    if (method === WLED_API_METHODS.GET) {
      return await response.json();
    }

    return undefined as any;
  }
}
