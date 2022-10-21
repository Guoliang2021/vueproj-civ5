const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.mode = "production";
      config["performance"] = {
        maxEntrypointSize: 100000000,
        maxAssetSize: 300000000,
      };
    }
  },
  publicPath: "./",
  devServer: {
    host: "127.0.0.1",
    port: 8080,
  },
};
