// Learn more https://docs.expo.io/guides/customizing-metro
/**
 * @type {import('expo/metro-config').MetroConfig}
 */
const { getDefaultConfig } = require("expo/metro-config");
const path = require("node:path");

const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true
});

// Přidáváme základní alias
config.resolver.extraNodeModules = {
  "@": path.resolve(__dirname, "./")
};

// Enable Tamagui and add nice web support with optimizing compiler + CSS extraction
const { withTamagui } = require("@tamagui/metro-plugin");
config.resolver.sourceExts.push("mjs");

module.exports = withTamagui(config, {
  components: ["tamagui"],
  config: "./tamagui.config.ts",
  outputCSS: "./tamagui-web.css"
});
