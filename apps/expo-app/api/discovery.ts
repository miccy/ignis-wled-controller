import * as Network from "expo-network"; // TODO: použít expo-network kde to bude možné
import NetInfo from "@react-native-community/netinfo";
import { Platform } from "react-native";
import { Device } from "@/types/wled"; // TODO: přidat typy
import { MDNS_SERVICE_TYPE, FALLBACK_SCAN_IPS } from "@/constants/network"; // TODO: přidat konstanty

export class WLEDDiscovery {
  // Vyhledání zařízení pomocí mDNS (pro Android a iOS)
  async discoverDevices(): Promise<Device[]> {
    try {
      if (Platform.OS === "web") {
        return this.scanNetworkFallback();
      }

      // Pro skutečnou implementaci by zde byl použit nějaký mDNS/Zeroconf balíček
      // V Expo by to mohlo být např. react-native-zeroconf nebo podobný
      // Pro účely návrhu používáme mock
      const devices = await this.mockDiscoveredDevices();

      return devices;
    } catch (error) {
      console.error(
        "mDNS discovery failed, falling back to network scan",
        error
      );
      return this.scanNetworkFallback();
    }
  }

  // Záložní metoda pro vyhledávání, funguje skenováním IP adres
  private async scanNetworkFallback(): Promise<Device[]> {
    const networkState = await NetInfo.fetch();
    const devices: Device[] = [];

    if (!networkState.isConnected || !networkState.details) {
      return devices;
    }

    // Vytvoření seznamu IP adres k testování
    // Pro skutečnou implementaci bychom na základě IP a masky sítě vygenerovali rozsah
    // Pro návrh používáme předem definované adresy

    const promises = FALLBACK_SCAN_IPS.map(async ip => {
      try {
        const response = await fetch(`http://${ip}/json/info`, {
          method: "GET",
          timeout: 1000
        });

        if (response.ok) {
          const info = await response.json();
          devices.push({
            id: info.mac || ip,
            name: info.name || `WLED at ${ip}`,
            address: ip,
            version: info.ver
          });
        }
      } catch {
        // Ignorujeme chyby, protože testujeme mnoho IP adres
      }
    });

    await Promise.all(promises);
    return devices;
  }

  // Mock metoda pro účely návrhu
  private async mockDiscoveredDevices(): Promise<Device[]> {
    return [
      {
        id: "aa:bb:cc:dd:ee:ff",
        name: "WLED Juggling Clubs",
        address: "192.168.1.100",
        version: "0.13.1"
      },
      {
        id: "aa:bb:cc:dd:ee:gg",
        name: "WLED Poi",
        address: "192.168.1.101",
        version: "0.13.1"
      }
    ];
  }
}
