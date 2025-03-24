# Přehled WLED API

Tento dokument poskytuje přehled API knihovny WLED, které je klíčové pro vývoj aplikací komunikujících se zařízeními využívajícími WLED.

## Úvod do WLED

[WLED](https://github.com/wled/WLED) je open-source firmware pro mikrokontroléry ESP8266 a ESP32, který umožňuje ovládání adresovatelných LED pásků (jako WS2812B, SK6812, APA102) přes WiFi. Projekt nabízí rozsáhlé funkce pro ovládání LED efektů, barev a animací.

## API Endpointy

WLED poskytuje JSON API pro ovládání a dotazování zařízení. Hlavní endpointy jsou:

### 1. Ovládání stavu

- **Endpoint**: `/json/state`
- **Metoda**: GET, POST
- **Popis**: Získání nebo nastavení aktuálního stavu zařízení.

Příklad požadavku pro zapnutí LED a nastavení červené barvy:
```json
{
  "on": true,
  "bri": 255,
  "seg": [
    {
      "col": [[255, 0, 0]]
    }
  ]
}
```

### 2. Informace o zařízení

- **Endpoint**: `/json/info`
- **Metoda**: GET
- **Popis**: Získání informací o zařízení.

### 3. Efekty a palety

- **Endpoint**: `/json`
- **Metoda**: GET
- **Popis**: Získání všech dostupných efektů a palet.

### 4. Předvolby

- **Endpoint**: `/json/presets`
- **Metoda**: GET
- **Popis**: Získání všech uložených předvoleb.

## Klíčové parametry

Toto jsou hlavní parametry, které lze nastavit v objektu stavu:

| Parametr | Typ | Popis |
|----------|-----|-------|
| `on` | Boolean | Stav napájení (true = zapnuto, false = vypnuto) |
| `bri` | Číslo (0-255) | Hlavní jas |
| `seg` | Pole | Pole segmentových objektů |
| `seg[].col` | Pole | Pole barev v RGB formátu |
| `seg[].fx` | Číslo | ID efektu |
| `seg[].sx` | Číslo | Rychlost efektu |
| `seg[].ix` | Číslo | Intenzita efektu |
| `seg[].pal` | Číslo | ID palety |

## Vyhledávání zařízení

Zařízení WLED lze vyhledat v místní síti pomocí:

1. **mDNS**: Zařízení se ohlašují jako `[názevZařízení].local`
2. **SSDP**: Podobně jako u vyhledávání chytrých domácích zařízení

## Integrace v naší aplikaci

V projektu Ignis WLED Controller budeme tyto API endpointy používat k:

1. Vyhledávání WLED zařízení v síti
2. Ovládání LED efektů speciálně přizpůsobených pro žonglovací náčiní
3. Ukládání a načítání předvoleb navržených pro vystoupení
4. Poskytnutí intuitivního UI, které abstrahuje složitost API

## Zdroje pro další četbu

- [Oficiální dokumentace WLED](https://kno.wled.ge/)
- [GitHub repozitář WLED](https://github.com/wled/WLED)
- [Dokumentace JSON API](https://kno.wled.ge/interfaces/json-api/)

## Další kroky

Dalším krokem v naší implementaci je vytvoření JavaScript/TypeScript wrapperu kolem těchto API endpointů, aby bylo jejich použití v naší Expo React Native aplikaci snazší. 