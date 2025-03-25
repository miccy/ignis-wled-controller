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
      "expo-router/babel",
      [
        "module-resolver",
        {
          alias: {
            "@": "./"
          }
        }
      ]
    ]
  };
};
