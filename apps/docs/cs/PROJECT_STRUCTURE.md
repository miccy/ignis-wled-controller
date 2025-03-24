# Struktura projektu

## Aktuální struktura monorepa

```zsh
ignis-wled-controller/
├── LICENSE                    # MIT licence pro vlastní kód
├── README.md                  # Hlavní dokumentace projektu
├── CONTRIBUTING.md            # Pokyny pro přispěvatele
├── CODE_OF_CONDUCT.md         # Kodex chování
├── CHANGELOG.md               # Historie změn
├── docs/                      # Dokumentace projektu
│   ├── en/                    # Anglická dokumentace
│   ├── cs/                    # Česká dokumentace
│   └── TODO.md                # Vývojové úkoly
├── packages/                  # JavaScript/TypeScript balíčky
│   ├── expo-app/              # Expo React Native aplikace
│   └── shared/                # Sdílené komponenty a utility
├── apps/                      # Kód nativních aplikací (přímé kopie)
│   ├── ios-native/            # iOS implementace (pro experimenty)
│   └── android-native/        # Android implementace (pro experimenty)
├── external/                  # Externí submoduly
│   └── wled/                  # WLED knihovna jako submodul (forknutý)
├── .gitmodules                # Konfigurace git submodulů
├── package.json               # Hlavní package.json pro monorepo
└── nx.json                    # Nx konfigurace
```
