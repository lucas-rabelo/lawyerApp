module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver',
        {
          'root': ['./src'],
          alias: {
            '@pages': './src/pages',
            '@components': './scr/components',
            '@assets': './scr/assets',
            '@styles': './scr/global/styles',
          }
        }
      ]
    ]
  };
};
