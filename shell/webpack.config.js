const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  shared: {
    ...shareAll({
      singleton: true,
      eager: false,
      strictVersion: false,
      requiredVersion: "auto",
    }),
  },
});
