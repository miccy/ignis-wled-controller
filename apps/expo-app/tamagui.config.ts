import { createInterFont } from "@tamagui/font-inter";
import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui } from "tamagui";

export const tamaguiConfig = createTamagui(defaultConfig);

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

const headingFont = createInterFont({
  size: {
    6: 15,
    9: 32,
    10: 44
  },
  transform: {
    6: "uppercase",
    7: "none"
  },
  weight: {
    6: "400",
    7: "700"
  },
  color: {
    6: "$colorFocus",
    7: "$color"
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6
  },
  face: {
    700: { normal: "InterBold" },
    800: { normal: "InterBold" },
    900: { normal: "InterBold" }
  }
});

const bodyFont = createInterFont(
  {
    face: {
      normal: { normal: "Inter" },
      bold: { normal: "InterBold" }
    }
  },
  {
    sizeSize: size => Math.round(size * 1),
    sizeLineHeight: size => Math.round(size * 1.1 + (size < 20 ? 10 : 5))
  }
);

export const config = createTamagui({
  defaultFont: "body",
  fonts: {
    heading: headingFont,
    body: bodyFont
  },
  tokens,
  themes,
  shorthands,
  mediaQueryDefaultActive: true,
  media: createMedia({
    sm: { maxWidth: 650 },
    md: { maxWidth: 1200 },
    lg: { maxWidth: 1600 },
    xl: { minWidth: 1601 }
  })
});

export type AppConfig = typeof config;

// Tady můžeme přidat další konfigurace pro Tamagui

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}
