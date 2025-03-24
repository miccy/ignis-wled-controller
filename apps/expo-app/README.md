# Ignis WLED Controller - Expo App

This is the Expo React Native implementation of the Ignis WLED Controller.

## Features

- Cross-platform support (iOS, Android)
- Modern UI/UX design
- Full control of WLED-enabled juggling equipment
- Custom presets for various juggling props

## Development

### Prerequisites

- Node.js (v18 or newer)
- Bun package manager
- Expo CLI

### Getting Started

```sh
# Install dependencies
bun install

# Start the development server
bun start
```

### Available Scripts

- `bun start` - Start the Expo development server
- `bun android` - Start the app on an Android device/emulator
- `bun ios` - Start the app on an iOS simulator
- `bun web` - Start the app in a web browser
- `bun test` - Run tests
- `bun lint` - Lint the code

## New app structure

```
expo-app/
├── app/                          # Expo Router struktura
│   ├── (onboarding)/             # Welcome/onboarding screens
│   │   ├── index.tsx             # První welcome obrazovka
│   │   ├── [...rest].tsx         # Další onboarding obrazovky
│   │   ├── auth.tsx              # Poslední screen - vytvoření účtu/pokračování bez přihlášení
│   │   └── _layout.tsx           # Layout pro onboarding
│   ├── (app)/                    # Hlavní aplikace (po onboardingu)
│   │   ├── (tabs)/               # Hlavní taby
│   │   │   ├── index.tsx         # Devices tab (hlavní)
│   │   │   ├── guide.tsx         # Návody, dokumentace
│   │   │   ├── settings.tsx      # Nastavení
│   │   │   └── _layout.tsx       # Layout pro hlavní taby
│   │   ├── device/               # Detaily zařízení
│   │   │   ├── [id]/             # Dynamické ID zařízení
│   │   │   │   ├── (tabs)/       # Taby v detailu zařízení
│   │   │   │   │   ├── index.tsx # Hlavní ovládání (power, jas)
│   │   │   │   │   ├── colors.tsx # Nastavení barev
│   │   │   │   │   ├── effects.tsx # Nastavení efektů
│   │   │   │   │   ├── segments.tsx # Správa segmentů
│   │   │   │   │   └── _layout.tsx # Layout pro taby v detailu
│   │   │   │   └── _layout.tsx   # Layout pro detail zařízení
│   │   │   └── index.tsx         # Redirect na první tab
│   │   └── _layout.tsx           # Layout pro hlavní aplikaci
│   ├── _layout.tsx               # Root layout
│   └── +not-found.tsx            # 404 stránka
├── components/ # React komponenty
│ ├── device/ # Komponenty specifické pro zařízení
│ │ ├── ColorPicker.tsx
│ │ ├── EffectList.tsx
│ │ ├── SegmentEditor.tsx
│ │ └── BrightnessSlider.tsx
│ ├── ui/ # UI komponenty
│ │ ├── Button.tsx
│ │ ├── Card.tsx
│ │ └── ...
│ └── layout/ # Layout komponenty
│ ├── Header.tsx
│ └── ...
├── lib/ # Knihovny a utility
│ ├── api/ # API klienti
│ │ ├── wled-api.ts # WLED API klient
│ │ └── discovery.ts # Vyhledávání zařízení v síti
│ ├── hooks/ # React hooks
│ │ ├── useDevice.ts
│ │ ├── useEffects.ts
│ │ └── ...
│ └── types/ # TypeScript typy
│ ├── wled.ts # Typy specifické pro WLED API
│ └── ...
└── state/ # Legend State
    ├── index.ts # Export všech stavů
    ├── devices.ts # Stav zařízení
    ├── settings.ts # Nastavení aplikace
    └── effects.ts # Efekty a palety
```

## License

This Expo implementation is licensed under the MIT License.
