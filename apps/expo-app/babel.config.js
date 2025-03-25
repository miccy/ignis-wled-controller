module.exports = api => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "transform-inline-environment-variables",
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === "development"
        }
      ],

      // Přidáváme resolver pro aliasy cest
      [
        "module-resolver",
        {
          alias: {
            "@": "./"
          }
        }
      ],

      // NOTE: this is only necessary if you are using reanimated for animations
      "react-native-reanimated/plugin"
    ]
  };
};
