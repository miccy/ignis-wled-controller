# Ignis WLED Controller

Komplexní nástroj pro ovládání žonglovacích světelných hraček využívající knihovnu WLED. Tento projekt shromažďuje existující implementace a nabízí novou multiplatformní aplikaci založenou na Expo React Native.

## Přehled projektu

- **WLED knihovna**: Základní knihovna pro ovládání LED světel pomocí ESP32/ESP8266
- **Nativní iOS a Android aplikace**: Existující implementace pro experimentování
- **Expo React Native aplikace**: Nová multiplatformní implementace s moderním UI

## Struktura projektu

```
ignis-wled-controller/
├── apps/                 # Kód nativních aplikací
│   ├── ios-native/       # iOS implementace (pro experimenty)
│   └── android-native/   # Android implementace (pro experimenty)
├── packages/             # JavaScript/TypeScript balíčky
│   ├── expo-app/         # Expo React Native aplikace
│   └── shared/           # Sdílené komponenty a utility
├── external/             # Externí submoduly
│   └── wled/             # WLED knihovna jako submodul
└── docs/                 # Dokumentace
    ├── en/               # Anglická dokumentace
    └── cs/               # Česká dokumentace
```

## Začínáme

### Předpoklady

- [Node.js](https://nodejs.org/) (v18 nebo novější)
- [Bun](https://bun.sh/) pro správu balíčků
- [Nx](https://nx.dev/) pro správu monorepa

### Klonování repozitáře

```sh
git clone https://github.com/miccy/ignis-wled-controller.git
cd ignis-wled-controller
git submodule update --init --recursive
```

### Instalace závislostí

```sh
bun install
```

### Vývojový workflow

Tento projekt používá Nx pro správu monorepa a Bun pro JavaScript závislosti.

#### Kompilace projektů

```sh
nx run-many --target=build
```

Pro kompilaci konkrétního projektu:

```sh
nx build expo-app
```

#### Spuštění testů

```sh
nx run-many --target=test
```

Pro testování konkrétního projektu:

```sh
nx test expo-app
```

## Licence

- **Expo React Native aplikace**: [MIT License](../../LICENSE)
- **WLED knihovna**: [EUPL-1.2](https://github.com/wled/WLED/blob/main/LICENSE)
- **Ostatní implementace**: Viz příslušné repozitáře

## Přispívání

Příspěvky jsou vítány! Přečtěte si prosím [CONTRIBUTING.md](../../CONTRIBUTING.md) pro informace o kodexu chování a procesu pro zasílání pull requestů.

## Dokumentace

- [Anglická dokumentace](../en/README.md)
- [Česká dokumentace](../cs/README.md)
- [Vývojové poznámky](../TODO.md)

## Poděkování

- Autorům původní WLED knihovny
- Tvůrcům nativních iOS a Android implementací
- Komunitě Expo React Native
