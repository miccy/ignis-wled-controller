# Analýza licencí

## Existující projekty a jejich licence

- **WLED** (https://github.com/wled/WLED)

  - Licence: EUPL-1.2 (European Union Public License)
  - Tato licence je copyleft a vyžaduje, aby odvozená díla byla distribuována pod stejnou licencí
  - Umožňuje komerční i nekomerční použití

- **WLED-Native-iOS** (https://github.com/Moustachauve/WLED-Native-iOS)

  - Licence explicitně neuvedena v repozitáři
  - Pro jistotu doporučuji kontaktovat autora nebo zacházet s projektem jako s proprietárním

- **WLED-Native-Android** (https://github.com/Moustachauve/WLED-Native-Android)

  - Licence explicitně neuvedena v repozitáři
  - Pro jistotu doporučuji kontaktovat autora nebo zacházet s projektem jako s proprietárním

- **WledAppV2** (https://github.com/johne/WledAppV2)
  - Licence explicitně neuvedena v repozitáři

## Strategie pro monorepo

1. **WLED knihovna**

   - Použít jako submodul (git submodule) kvůli EUPL-1.2 licenci
   - Jasně označit licenci v README a v dokumentaci

2. **Nativní iOS a Android aplikace**

   - Jelikož licence nejsou jednoznačně uvedeny, použít jako submoduly
   - Kontaktovat autory pro upřesnění licenčních podmínek
   - Zdokumentovat použití jako "pouze pro studijní účely"

3. **Vlastní Expo React Native aplikace**

   - Použít MIT licenci (jak je již uvedeno v LICENSE souboru)
   - Jasně oddělit tento kód od existujících projektů

4. **Dokumentace**
   - Udržovat jasné oddělení mezi jednotlivými částmi projektu
   - Explicitně uvést, že projekt je kolekcí existujících implementací a nové Expo implementace
