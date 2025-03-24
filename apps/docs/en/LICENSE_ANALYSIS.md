# License Analysis

## Existing Projects and Their Licenses

- **WLED** (https://github.com/wled/WLED)
  - License: EUPL-1.2 (European Union Public License)
  - This is a copyleft license that requires derivative works to be distributed under the same license
  - Allows commercial and non-commercial use

- **WLED-Native-iOS** (https://github.com/Moustachauve/WLED-Native-iOS)
  - License not explicitly stated in the repository
  - For safety, contact the author or treat the project as proprietary
  - Used for experimental purposes only in this project

- **WLED-Native-Android** (https://github.com/Moustachauve/WLED-Native-Android)
  - License not explicitly stated in the repository
  - For safety, contact the author or treat the project as proprietary
  - Used for experimental purposes only in this project

- **WledAppV2** (https://github.com/johne/WledAppV2)
  - License not explicitly stated in the repository

## Strategy for Monorepo

1. **WLED Library**
   - Use as a fork + submodule due to the EUPL-1.2 license
   - Clearly mark the license in README and documentation
   - Any modifications should comply with EUPL-1.2 requirements

2. **Native iOS and Android Apps**
   - Copy to `/apps` directory for experimental purposes only
   - Contact authors for license clarification
   - Document usage as "for study and experimental purposes only"
   - Do not distribute modified versions without license clarification

3. **Expo React Native App**
   - Use MIT license (as stated in the LICENSE file)
   - Clearly separate this code from existing implementations
   - Ensure all third-party libraries used are compatible with MIT license

4. **Documentation**
   - Maintain clear separation between different parts of the project
   - Explicitly state that the project is a collection of existing implementations plus new Expo implementation
   - Document all license requirements and restrictions

## Legal Compliance Checklist

- [ ] Contact native app authors about licenses
- [ ] Review EUPL-1.2 compliance requirements for WLED integration
- [ ] Check license compatibility of all dependencies
- [ ] Update all license references in documentation
- [ ] Create proper attribution file for all third-party code 