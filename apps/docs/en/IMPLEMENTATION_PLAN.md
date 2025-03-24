# Implementation Plan

## Phase 1: Repository Setup and Structure

- [ ] **Repository Creation**
  - [x] Create public GitHub repository
  - [x] Add basic files (README, LICENSE, CODE_OF_CONDUCT, CONTRIBUTING, CHANGELOG)
  - [ ] Update GitHub settings for open source project
  - [ ] Setup issue and PR templates

- [ ] **Git Submodule Setup (WLED Only)**
  - [ ] Fork the WLED repository
  - [x] Add the fork as a submodule
  ```bash
  git submodule add https://github.com/[your-username]/WLED external/wled
  git submodule update --init --recursive
  ```
  - [ ] Document license requirements

- [ ] **Nx and Bun Setup**
  - [x] Initialize Nx workspace
  ```bash
  npx create-nx-workspace@latest ignis-wled-controller
  ```
  - [ ] Configure Nx for multi-language support
  - [x] Configure Bun for package management
  ```bash
  bun install
  ```

- [ ] **Project Structure**
  - [x] Create `/apps` directory for applications
    - [x] iOS app directory
    - [x] Android app directory
    - [ ] Expo app directory
  - [x] Create `/packages` directory for shared JS/TS code
    - [ ] Shared libraries
  - [x] Create `/external` directory for submodules
  - [x] Create multilingual documentation structure
    - [x] `/docs/en` for English docs
    - [x] `/docs/cs` for Czech docs

## Phase 2: Experimenting with Existing Implementations

- [x] **Native App Integration**
  - [x] Copy iOS implementation to `/apps/ios-native`
  - [x] Copy Android implementation to `/apps/android-native`
  - [x] Document findings in README files within native app directories
  ```bash
  # Copy iOS implementation
  cp -r /path/to/WLED-Native-iOS apps/ios-native
  
  # Copy Android implementation
  cp -r /path/to/WLED-Native-Android apps/android-native
  ```

- [ ] **WLED Library Analysis**
  - [ ] Explore API and capabilities
  - [x] Document key functions in `docs/en/WLED_API_OVERVIEW.md` and `docs/cs/WLED_API_OVERVIEW.md`
  - [ ] Test connectivity with hardware

## Phase 3: Expo React Native Implementation

- [ ] **Create Basic Expo App Structure**
  - [ ] Create Expo app
  ```bash
  bunx create-expo-app@latest apps/expo-app
  ```
  - [ ] Set up TypeScript configuration
  - [ ] Configure navigation structure

- [ ] **Implement Core Functionality**
  - [ ] WLED device discovery and connection
  - [ ] Basic control (on/off, brightness, color)

- [ ] **Implement Advanced Functionality**
  - [ ] Effects and animations
  - [ ] User settings
  - [ ] Presets for juggling equipment

## Phase 4: Testing and Documentation

- [ ] **Real-world Testing**
  - [ ] Test with various juggling light toys
  - [ ] Optimize performance and reliability

- [ ] **Complete Documentation**
  - [ ] User guide
  - [ ] Developer documentation
  - [ ] API reference

- [ ] **Release Alpha Version**
  - [ ] Create alpha build for testing
  - [ ] Collect user feedback

## Integration Strategy

- **WLED Library**: Use as a fork + submodule due to the EUPL-1.2 license
- **Native iOS and Android Apps**: Direct copies in the `/apps` directory for experimental purposes only
- **Expo React Native App**: Our own implementation with MIT license 