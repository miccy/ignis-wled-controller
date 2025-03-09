# Plán implementace

## Fáze 1: Založení repozitáře a nastavení struktury

1. **Vytvoření repozitáře**

   - Založit veřejný GitHub repozitář
   - Přidat základní soubory (README, LICENSE, CODE_OF_CONDUCT, CONTRIBUTING, CHANGELOG)

2. **Nastavení git submodulů**

   - Přidat WLED, WLED-Native-iOS a WLED-Native-Android jako submoduly

   ```bash
   git submodule add https://github.com/wled/WLED external/wled
   git submodule add https://github.com/Moustachauve/WLED-Native-iOS external/wled-native-ios
   git submodule add https://github.com/Moustachauve/WLED-Native-Android external/wled-native-android
   ```

3. **Nastavení Turborepo a Bun**
   - Inicializovat Turborepo strukturu
   ```bash
   bunx create-turbo@latest
   ```
   - Upravit konfiguraci pro Bun
   ```bash
   bun install
   ```

## Submoduly vs. kopírování kódu

Pro integraci existujících projektů doporučuji **použít git submoduly** místo kopírování kódu, a to z několika důvodů:

1. **Respektování licencí** - zejména u projektu WLED s EUPL-1.2 licencí
2. **Jednodušší aktualizace** - můžete snadno aktualizovat na novější verze
3. **Jasné oddělení** - kód zůstává jasně oddělený a přiřaditelný k původním autorům
4. **Čistší historie commitů** - nebudete mít ve své historii cizí kód

Příkazy pro přidání submodulů:

```bash
git submodule add https://github.com/wled/WLED external/wled
git submodule add https://github.com/Moustachauve/WLED-Native-iOS external/wled-native-ios
git submodule add https://github.com/Moustachauve/WLED-Native-Android external/wled-native-android
git submodule update --init --recursive
```

````

## Plán implementace

```markdown:docs/updated/IMPLEMENTATION_PLAN.md
# Plán implementace

## Fáze 1: Založení repozitáře a nastavení struktury

1. **Vytvoření repozitáře**
   - Založit veřejný GitHub repozitář
   - Přidat základní soubory (README, LICENSE, CODE_OF_CONDUCT, CONTRIBUTING, CHANGELOG)

2. **Nastavení git submodulů**
   - Přidat WLED, WLED-Native-iOS a WLED-Native-Android jako submoduly
   ```bash
   git submodule add https://github.com/wled/WLED external/wled
   git submodule add https://github.com/Moustachauve/WLED-Native-iOS external/wled-native-ios
   git submodule add https://github.com/Moustachauve/WLED-Native-Android external/wled-native-android
````

3. **Nastavení Turborepo a Bun**
   - Inicializovat Turborepo strukturu
   ```bash
   bunx create-turbo@latest
   ```
   - Upravit konfiguraci pro Bun
   ```bash
   bun install
   ```

## Fáze 2: Experimenty s existujícími implementacemi

1. **Kompilace a testování nativních aplikací**

   - Experimentovat s iOS a Android implementacemi
   - Zdokumentovat poznatky do `docs/native-apps-research.md`

2. **Analýza WLED knihovny**
   - Prozkoumat API a možnosti WLED
   - Zdokumentovat klíčové funkce do `docs/wled-api-overview.md`

## Fáze 3: Implementace Expo React Native aplikace

1. **Vytvořit základní strukturu Expo aplikace**

   ```bash
   bunx create-expo-app@latest packages/expo-app
   ```

2. **Implementovat základní funkce**

   - Vyhledávání a připojení k WLED zařízením
   - Základní ovládání (zapnutí/vypnutí, jas, barva)

3. **Implementovat pokročilé funkce**
   - Efekty a animace
   - Uživatelská nastavení
   - Předvolby pro žonglovací náčiní

## Fáze 4: Testování a dokumentace

1. **Testování na reálných zařízeních**

   - Testovat aplikaci s různými žonglovacími světelnými hračkami
   - Optimalizovat výkon a spolehlivost

2. **Kompletní dokumentace**

   - Uživatelská příručka
   - Vývojářská dokumentace
   - API reference

3. **Release alpha verze**
   - Vytvořit alpha build pro testování
   - Sbírat zpětnou vazbu od prvních uživatelů

````

## Aktualizace README

```markdown:docs/updated/README.md
# Ignis WLED Controller

Ignis WLED Controller je komplexní řešení pro ovládání žonglovacích světelných hraček (tyče, poi, kuželky atd.) využívající knihovnu WLED. Tento projekt shromažďuje existující implementace a nabízí novou multiplatformní aplikaci založenou na Expo React Native.

## Přehled projektu

- **WLED Knihovna**: Základní knihovna pro ovládání LED světel pomocí ESP32/ESP8266
- **Nativní iOS a Android aplikace**: Existující implementace pro studijní účely
- **Expo React Native aplikace**: Nová multiplatformní implementace s moderním UI

## Začínáme

### Klonování repozitáře

```bash
git clone https://github.com/miccy/ignis-wled-controller.git
cd ignis-wled-controller
git submodule update --init --recursive
````

### Instalace závislostí

```bash
bun install
```

### Spuštění Expo aplikace

```bash
cd packages/expo-app
bun start
```

## Vývoj

Tento projekt používá Turborepo pro správu monorepa a Bun pro správu JavaScript závislostí.

### Kompilace všech projektů

```bash
bunx turbo run build
```

### Spuštění testů

```bash
bunx turbo run test
```

## Struktura projektu

- `external/`: Externí submoduly (WLED, nativní aplikace)
- `packages/`: Balíčky monorepa
  - `expo-app/`: Expo React Native aplikace
  - `shared/`: Sdílené komponenty a utility
- `docs/`: Dokumentace projektu

## Licence

- **Expo React Native aplikace**: [MIT License](LICENSE)
- **WLED knihovna**: [EUPL-1.2](https://github.com/wled/WLED/blob/main/LICENSE)
- **Ostatní implementace**: Viz příslušné repozitáře

## Přispívání

Příspěvky jsou vítány! Přečtěte si prosím [CONTRIBUTING.md](CONTRIBUTING.md) pro více informací.

## Poděkování

- Autoři původní WLED knihovny
- Tvůrci nativních iOS a Android implementací
- Komunita Expo React Native

````

## Aktualizace package.json pro Turborepo a Bun

```json:docs/updated/package.json
{
  "name": "ignis-wled-controller",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "lint": "turbo run lint",
    "test": "turbo run test",
    "format": "prettier --write \"**/*.{ts,tsx,md}\""
  },
  "devDependencies": {
    "prettier": "^3.0.0",
    "turbo": "latest"
  },
  "engines": {
    "node": ">=18.0.0",
    "bun": ">=1.0.0"
  },
  "packageManager": "bun@1.0.0"
}
````

## Konfigurace Turborepo

```json:docs/updated/turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "build/**"]
    },
    "lint": {},
    "dev": {
      "cache": false,
      "persistent": true
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"]
    }
  }
}
```

## Shrnutí a další kroky

```markdown:docs/updated/NEXT_STEPS.md
# Další kroky pro projekt Ignis WLED Controller

## Okamžité kroky

1. **Založit repozitář a nastavit základní strukturu**
   - Vytvořit GitLab/GitHub repozitář
   - Přidat README.md, LICENSE, CODE_OF_CONDUCT.md, CONTRIBUTING.md, CHANGELOG.md
   - Nastavit git submoduly pro externí projekty

2. **Inicializovat Turborepo a Bun**
   - Nastavit workspace pro monorepo
   - Konfigurovat skripty pro build, test a development

3. **Kontaktovat autory nativních aplikací**
   - Zjistit licenční podmínky pro iOS a Android implementace
   - Domluvit případnou spolupráci

## Krátkodobé cíle (1-2 týdny)

1. **Prozkoumat WLED API**
   - Pochopit hlavní funkce a možnosti knihovny
   - Zdokumentovat klíčové API endpointy

2. **Vytvořit základní Expo aplikaci**
   - Nastavit projekt s TypeScript a Expo
   - Implementovat základní UI layout

3. **Implementovat vyhledávání WLED zařízení**
   - Navrhnout robustní způsob připojení k zařízením
   - Otestovat připojení na reálných zařízeních

## Střednědobé cíle (1-2 měsíce)

1. **Implementovat kompletní ovládání**
   - Funkce pro změnu barvy, jasu a efektů
   - Uživatelsky přívětivé rozhraní pro nastavení

2. **Optimalizovat pro žonglovací hračky**
   - Vytvořit specializované předvolby pro různé typy náčiní
   - Implementovat časování vhodné pro žonglování

3. **Alpha testování**
   - Vydat první testovací verzi pro omezený počet uživatelů
   - Sbírat zpětnou vazbu a upravovat aplikaci

## Dlouhodobé cíle

1. **Rozšířit o pokročilé funkce**
   - Synchronizace více zařízení
   - Vlastní efekty a animace

2. **Vydat stabilní verzi**
   - Publikovat aplikaci v App Store a Google Play
   - Vytvořit kompletní dokumentaci

3. **Vybudovat komunitu**
   - Podporovat přispěvatele
   - Pořádat workshopy pro žongléry
```

Doufám, že tato analýza a plán vám pomohou při realizaci vašeho projektu. Pokud budete mít další dotazy nebo potřebovat další dokumenty, rád pomůžu!

## Fáze 2: Experimenty s existujícími implementacemi

1. **Kompilace a testování nativních aplikací**

   - Experimentovat s iOS a Android implementacemi
   - Zdokumentovat poznatky do `docs/native-apps-research.md`

2. **Analýza WLED knihovny**
   - Prozkoumat API a možnosti WLED
   - Zdokumentovat klíčové funkce do `docs/wled-api-overview.md`

## Fáze 3: Implementace Expo React Native aplikace

1. **Vytvořit základní strukturu Expo aplikace**

   ```bash
   bunx create-expo-app@latest packages/expo-app
   ```

2. **Implementovat základní funkce**

   - Vyhledávání a připojení k WLED zařízením
   - Základní ovládání (zapnutí/vypnutí, jas, barva)

3. **Implementovat pokročilé funkce**
   - Efekty a animace
   - Uživatelská nastavení
   - Předvolby pro žonglovací náčiní

## Fáze 4: Testování a dokumentace

1. **Testování na reálných zařízeních**

   - Testovat aplikaci s různými žonglovacími světelnými hračkami
   - Optimalizovat výkon a spolehlivost

2. **Kompletní dokumentace**

   - Uživatelská příručka
   - Vývojářská dokumentace
   - API reference

3. **Release alpha verze**
   - Vytvořit alpha build pro testování
   - Sbírat zpětnou vazbu od prvních uživatelů
