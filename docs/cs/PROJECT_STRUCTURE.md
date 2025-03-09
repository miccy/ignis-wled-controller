# Struktura projektu

## Doporučená struktura monorepa

```zsh
ignis-wled-controller/
├── LICENSE # MIT licence pro váš vlastní kód
├── README.md # Hlavní dokumentace projektu
├── CONTRIBUTING.md # Pokyny pro přispěvatele
├── CODE_OF_CONDUCT.md # Kodex chování
├── CHANGELOG.md # Historie změn
├── docs/ # Dokumentace projektu
│ └── updated/ # Vaše aktualizované dokumenty
├── packages/ # Balíčky monorepa
│ ├── expo-app/ # Vaše nová Expo React Native aplikace
│ ├── shared/ # Sdílený kód (volitelné)
│ └── web/ # Případná webová implementace (volitelné)
├── external/ # Externí submoduly
│ ├── wled/ # WLED knihovna jako submodul
│ ├── wled-native-ios/ # iOS implementace jako submodul
│ └── wled-native-android/ # Android implementace jako submodul
├── .gitmodules # Konfigurace git submodulů
├── package.json # Hlavní package.json pro monorepo
├── turbo.json # Konfigurace Turborepo
└── bun.lockb # Bun lockfile
```
