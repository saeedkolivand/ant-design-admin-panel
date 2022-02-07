const CracoLessPlugin = require("craco-less");
const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#2D84FB" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@app": path.resolve(__dirname, "src/app/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
    },
  },
};
