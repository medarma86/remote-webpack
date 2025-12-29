const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'remote-webpack',

  // exposes: {
  //   './Component': './src\app\app.ts',
  // },

  exposes: {
    './ProfileView': './src/app/profile-view/profile-view.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
