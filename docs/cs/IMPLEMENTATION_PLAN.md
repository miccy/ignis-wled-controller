# Plán implementace

## Fáze 1: Založení repozitáře a nastavení struktury

- [ ] **Vytvoření repozitáře**
  - [x] Založit veřejný GitHub repozitář
  - [x] Přidat základní soubory (README, LICENSE, CODE_OF_CONDUCT, CONTRIBUTING, CHANGELOG)
  - [ ] Aktualizovat nastavení GitHub pro open source projekt
  - [ ] Nastavit šablony pro issues a PR

- [ ] **Nastavení git submodulu (pouze pro WLED)**
  - [ ] Forknout WLED repozitář
  - [ ] Přidat fork jako submodul
  ```bash
  git submodule add https://github.com/[vaše-uživatelské-jméno]/WLED external/wled
  git submodule update --init --recursive
  ```
  - [ ] Zdokumentovat licenční požadavky

- [ ] **Nastavení Nx a Bun**
  - [x] Inicializovat Nx workspace
  ```bash
  npx create-nx-workspace@latest ignis-wled-controller
  ```
  - [ ] Konfigurovat Nx pro podporu více jazyků
  - [x] Nastavit Bun pro správu balíčků
  ```bash
  bun install
  ```

- [ ] **Struktura projektu**
  - [x] Vytvořit adresář `/apps` pro nativní aplikace
    - [ ] Adresář pro iOS aplikaci
    - [ ] Adresář pro Android aplikaci
  - [x] Vytvořit adresář `/packages` pro JS/TS kód
    - [ ] Expo aplikace
    - [ ] Sdílené knihovny
  - [x] Vytvořit adresář `/external` pro submoduly
  - [x] Vytvořit vícejazyčnou strukturu dokumentace
    - [x] `/docs/en` pro anglickou dokumentaci
    - [x] `/docs/cs` pro českou dokumentaci

## Fáze 2: Experimenty s existujícími implementacemi

- [ ] **Integrace nativních aplikací**
  - [ ] Zkopírovat iOS implementaci do `/apps/ios-native`
  - [ ] Zkopírovat Android implementaci do `/apps/android-native`
  - [ ] Zdokumentovat poznatky do `docs/native-apps-research.md`
  ```bash
  # Zkopírovat iOS implementaci
  cp -r /cesta/k/WLED-Native-iOS apps/ios-native
  
  # Zkopírovat Android implementaci
  cp -r /cesta/k/WLED-Native-Android apps/android-native
  ```

- [ ] **Analýza WLED knihovny**
  - [ ] Prozkoumat API a možnosti WLED
  - [ ] Zdokumentovat klíčové funkce do `docs/wled-api-overview.md`
  - [ ] Otestovat konektivitu s hardwarem

## Fáze 3: Implementace Expo React Native aplikace

- [ ] **Vytvořit základní strukturu Expo aplikace**
  - [ ] Vytvořit Expo aplikaci
  ```bash
  bunx create-expo-app@latest packages/expo-app
  ```
  - [ ] Nastavit TypeScript konfiguraci
  - [ ] Nakonfigurovat navigační strukturu

- [ ] **Implementovat základní funkce**
  - [ ] Vyhledávání a připojení k WLED zařízením
  - [ ] Základní ovládání (zapnutí/vypnutí, jas, barva)

- [ ] **Implementovat pokročilé funkce**
  - [ ] Efekty a animace
  - [ ] Uživatelská nastavení
  - [ ] Předvolby pro žonglovací náčiní

## Fáze 4: Testování a dokumentace

- [ ] **Testování na reálných zařízeních**
  - [ ] Testovat aplikaci s různými žonglovacími světelnými hračkami
  - [ ] Optimalizovat výkon a spolehlivost

- [ ] **Kompletní dokumentace**
  - [ ] Uživatelská příručka
  - [ ] Vývojářská dokumentace
  - [ ] API reference

- [ ] **Release alpha verze**
  - [ ] Vytvořit alpha build pro testování
  - [ ] Sbírat zpětnou vazbu od prvních uživatelů

## Strategie integrace

- **WLED knihovna**: Použít jako fork + submodul kvůli EUPL-1.2 licenci
- **Nativní iOS a Android aplikace**: Přímé kopie v adresáři `/apps` pouze pro experimentální účely
- **Expo React Native aplikace**: Naše vlastní implementace s MIT licencí
