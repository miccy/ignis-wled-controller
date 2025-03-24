# Project Structure

## Current Monorepo Structure

```zsh
ignis-wled-controller/
├── LICENSE                    # MIT license for your own code
├── README.md                  # Main project documentation
├── CONTRIBUTING.md            # Guidelines for contributors
├── CODE_OF_CONDUCT.md         # Code of conduct
├── CHANGELOG.md               # Change history
├── docs/                      # Project documentation
│   ├── en/                    # English documentation
│   ├── cs/                    # Czech documentation
│   └── TODO.md                # Development tasks
├── packages/                  # JavaScript/TypeScript packages
│   ├── expo-app/              # Expo React Native application
│   └── shared/                # Shared components and utilities
├── apps/                      # Native application code (direct copies)
│   ├── ios-native/            # iOS implementation (for experiments)
│   └── android-native/        # Android implementation (for experiments)
├── external/                  # External submodules
│   └── wled/                  # WLED library as a submodule (forked)
├── .gitmodules                # Git submodules configuration
├── package.json               # Main package.json for monorepo
└── nx.json                    # Nx configuration
``` 