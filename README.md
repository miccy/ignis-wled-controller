# Ignis WLED Controller

A comprehensive toolkit for controlling juggling light toys using the WLED library. This project collects existing implementations and offers a new cross-platform application based on Expo React Native.

## Project Overview

- **WLED Library**: Core library for controlling LED lights with ESP32/ESP8266
- **Native iOS and Android apps**: Existing implementations for experimentation
- **Expo React Native app**: New cross-platform implementation with modern UI

## Project Structure

```
ignis-wled-controller/
├── apps/                 # Application code
│   ├── ios-native/       # iOS implementation (for experiments)
│   ├── android-native/   # Android implementation (for experiments)
│   └── expo-app/         # Expo React Native application
├── packages/             # JavaScript/TypeScript shared packages
│   └── shared/           # Shared components and utilities
├── external/             # External submodules
│   └── wled/             # WLED library as a submodule
└── docs/                 # Documentation
    ├── en/               # English documentation
    └── cs/               # Czech documentation
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Bun](https://bun.sh/) for package management
- [Nx](https://nx.dev/) for monorepo management

### Cloning the Repository

```sh
git clone https://github.com/miccy/ignis-wled-controller.git
cd ignis-wled-controller
git submodule update --init --recursive
```

### Installing Dependencies

```sh
bun install
```

### Development Workflow

This project uses Nx for monorepo management and Bun for JavaScript dependencies.

#### Building Projects

```sh
nx run-many --target=build
```

To build a specific project:

```sh
nx build expo-app
```

#### Running Tests

```sh
nx run-many --target=test
```

To test a specific project:

```sh
nx test expo-app
```

## WLED API Integration

This project is built around the WLED API for controlling LED devices. For details on how we use the API, see:

- [WLED API Overview (English)](docs/en/WLED_API_OVERVIEW.md)
- [Přehled WLED API (Česky)](docs/cs/WLED_API_OVERVIEW.md)

## License

- **Expo React Native app**: [MIT License](LICENSE)
- **WLED library**: [EUPL-1.2](https://github.com/wled/WLED/blob/main/LICENSE)
- **Other implementations**: See respective repositories

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Documentation

- [English Documentation](docs/en/README.md)
- [Czech Documentation](docs/cs/README.md)

## Acknowledgments

- Authors of the original WLED library
- Creators of the native iOS and Android implementations
- Expo React Native community