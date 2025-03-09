# JavaScript/TypeScript Packages

This directory contains JavaScript and TypeScript packages for the Ignis WLED Controller project.

## Contents

- `expo-app/` - Expo React Native application for controlling WLED devices
- `shared/` - Shared utilities and components used across the project

## Development

Each package can be developed independently using Nx commands:

```sh
# Build a specific package
nx build expo-app

# Test a specific package
nx test expo-app

# Run the development server for the Expo app
nx dev expo-app
```

## License

All packages in this directory are licensed under the MIT License. 