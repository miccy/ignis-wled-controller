import { useEffect, useState } from 'react';
import { getLocales } from 'expo-localization';
import { observable } from '@legendapp/state';

// Definice podporovaných jazyků
export type Language = 'en' | 'cs';

// Struktura překladů
export interface Translations {
  app: {
    title: string;
  };
  devices: {
    title: string;
    addDevice: string;
    noDevices: string;
    connect: string;
    disconnect: string;
  };
  effects: {
    title: string;
    addEffect: string;
    noEffects: string;
    apply: string;
  };
  settings: {
    title: string;
    language: string;
    darkMode: string;
    about: string;
  };
}

// Čeština
const cs: Translations = {
  app: {
    title: 'IGNIS WLED Ovladač',
  },
  devices: {
    title: 'Zařízení',
    addDevice: 'Přidat zařízení',
    noDevices: 'Žádná zařízení nebyla nalezena',
    connect: 'Připojit',
    disconnect: 'Odpojit',
  },
  effects: {
    title: 'Efekty',
    addEffect: 'Přidat efekt',
    noEffects: 'Žádné efekty',
    apply: 'Použít',
  },
  settings: {
    title: 'Nastavení',
    language: 'Jazyk',
    darkMode: 'Tmavý režim',
    about: 'O aplikaci',
  },
};

// Angličtina
const en: Translations = {
  app: {
    title: 'IGNIS WLED Controller',
  },
  devices: {
    title: 'Devices',
    addDevice: 'Add Device',
    noDevices: 'No devices found',
    connect: 'Connect',
    disconnect: 'Disconnect',
  },
  effects: {
    title: 'Effects',
    addEffect: 'Add Effect',
    noEffects: 'No effects',
    apply: 'Apply',
  },
  settings: {
    title: 'Settings',
    language: 'Language',
    darkMode: 'Dark Mode',
    about: 'About',
  },
};

// Tabulka dostupných překladů
const translations: Record<Language, Translations> = {
  cs,
  en,
};

// Pozorovatelný stav pro aktuální jazyk
export const language$ = observable<Language>('cs');

// Hook pro získání překladů
export const useTranslations = () => {
  const [locale, setLocale] = useState<Language>('cs');

  useEffect(() => {
    // Detekce jazyka zařízení
    const deviceLocale = getLocales()[0]?.languageCode as Language;
    
    // Kontrola, zda máme překlady pro daný jazyk, jinak použití výchozího
    if (deviceLocale && translations[deviceLocale]) {
      setLocale(deviceLocale);
      language$.set(deviceLocale);
    }
  }, []);

  return translations[locale];
}; 