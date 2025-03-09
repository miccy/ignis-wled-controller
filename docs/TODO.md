# TODO Tree

## Phase 1: Repository Setup and Structure
- [ ] **Repository Creation**
  - [x] Create public GitHub repository
  - [x] Add basic files (README, LICENSE, CODE_OF_CONDUCT, CONTRIBUTING, CHANGELOG)
  - [ ] Update GitHub settings for open source project
  - [ ] Setup issue and PR templates

- [ ] **Nx Setup**
  - [ ] Initialize Nx workspace
    ```bash
    npx create-nx-workspace@latest ignis-wled-controller
    ```
  - [ ] Configure Nx for multi-language support
  - [ ] Configure Bun as package manager
    ```bash
    bun install
    ```

- [ ] **Project Structure**
  - [ ] Create `/apps` directory for native apps
    - [ ] iOS app directory
    - [ ] Android app directory
  - [ ] Create `/packages` directory for JS/TS code
    - [ ] Expo app 
    - [ ] Shared libraries
  - [ ] Create `/external` directory for submodules
  - [ ] Create multilingual documentation structure
    - [x] `/docs/en` for English docs
    - [x] `/docs/cs` for Czech docs

- [ ] **WLED Library Integration**
  - [ ] Fork WLED repository
  - [ ] Add as submodule
    ```bash
    git submodule add https://github.com/[username]/WLED external/wled
    ```
  - [ ] Document license requirements

## Phase 2: Experimenting with Existing Implementations
- [ ] **Native Apps Analysis**
  - [ ] Copy iOS implementation to `/apps/ios-native`
  - [ ] Copy Android implementation to `/apps/android-native`
  - [ ] Document findings in `docs/native-apps-research.md`

- [ ] **WLED Library Analysis**
  - [ ] Study API and capabilities
  - [ ] Document key functions in `docs/wled-api-overview.md`
  - [ ] Test connectivity with hardware

## Phase 3: Expo React Native Implementation
- [ ] **Basic App Structure**
  - [ ] Create Expo app
    ```bash
    bunx create-expo-app packages/expo-app --template
    ```
  - [ ] Set up TypeScript configuration
  - [ ] Configure navigation structure

- [ ] **Core Functionality**
  - [ ] Device discovery
  - [ ] Connection management
  - [ ] Basic control (on/off, brightness, color)

- [ ] **Advanced Features**
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

- [ ] **Alpha Release**
  - [ ] Create alpha build
  - [ ] Collect user feedback 