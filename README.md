# Ignis WLED Controller

This repository is a collection of various implementations for controlling juggling light toys using the WLED library. It includes native implementations for iOS and Android, as well as a web-based implementation and a new implementation using Expo React Native.

## Project Structure

- `wled`: The original WLED library.
- `wled-native-ios`: Native iOS implementation.
- `wled-native-android`: Native Android implementation.
- `expo-react-native`: New implementation using Expo React Native.

## Getting Started

To get started with this project, clone the repository and initialize the submodules.

### Cloning the Repository

```sh
git clone https://github.com/miccy/ignis-wled-controller.git
cd ignis-wled-controller
git submodule update --init --recursive
```

### Using Turborepo and Bun

This project uses Turborepo for managing builds and tests, and Bun for managing JavaScript dependencies.

### Installing Dependencies

```sh
bun install
```

### Building Projects

To build all projects:

```sh
turbo run build
```

To build a specific project (e.g., Expo React Native):

```sh
turbo run build --filter expo-react-native
```

### Running Tests

To run tests for all projects:

```sh
turbo run test
```

To run tests for a specific project (e.g., Expo React Native):

```sh
turbo run test --filter expo-react-native
```

## License

This project is licensed under the terms of the MIT License for the Expo React Native implementation. Each included implementation retains its original license, as specified in their respective directories.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Code of Conduct

Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct.

## Changelog

For changes and updates, see [CHANGELOG.md](CHANGELOG.md).

## Acknowledgments

Special thanks to the authors of the original implementations and the WLED library.