# Implementation Plan for Ignis WLED Controller

## Overview

This document outlines the implementation plan for the Ignis WLED Controller project, which is a collection of various implementations for controlling juggling light toys using the WLED library. The project includes native implementations for iOS and Android, as well as a web-based implementation and a new implementation using Expo React Native.

## Steps

1. **Create a Public Repository**

   - Set up the repository as public on GitHub.

2. **Add License File**

   - Add `LICENSE.md` file with the MIT license.

3. **Add README.md**

   - Prepare detailed documentation in the `README.md` file.

4. **Add CONTRIBUTING.md**

   - Prepare `CONTRIBUTING.md` with guidelines for contributors.

5. **Add CODE_OF_CONDUCT.md**

   - Prepare `CODE_OF_CONDUCT.md` with the code of conduct.

6. **Add ISSUE_TEMPLATE.md and PULL_REQUEST_TEMPLATE.md**

   - Create templates for issues and pull requests.

7. **Set Up GitHub Actions**

   - Prepare CI/CD pipeline using GitHub Actions.

8. **Integrate Submodules**

   - Add submodules for external WLED repositories:
     ```sh
     git submodule add https://github.com/wled/WLED wled
     git submodule add https://github.com/Moustachauve/WLED-Native-iOS wled-native-ios
     git submodule add https://github.com/Moustachauve/WLED-Native-Android wled-native-android
     ```

9. **Set Up Turborepo and Bun**

   - Configure Turborepo for managing builds and tests.
   - Use Bun for managing JavaScript dependencies.

10. **Update Documentation for Monorepo**

    - Update `README.md` with information on using Turborepo and Bun.

11. **Create and Configure Markdown Files**
    - Create `CHANGELOG.md` for tracking changes.
    - Create `LICENSE.md` and `README.md` files for individual projects.

## Detailed Steps

### Create a Public Repository

- Go to GitHub and create a new repository.
- Set the repository visibility to public.
- Clone the repository to your local machine.

### Add License File

- Add the following content to `LICENSE.md`:
