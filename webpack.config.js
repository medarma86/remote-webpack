const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'remote-webpack',

  exposes: {
    './profile-feature': './src/app/profile/profile.routes.ts',
    './data-service': './src/app/profile/shared-data.service.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
