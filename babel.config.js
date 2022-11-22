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
            '@components': './src/components',
            '@assets': './src/assets',
            '@styles': './src/global/styles',
            '@hooks': './src/hooks'
          }
        }
      ]
    ]
  };
};
