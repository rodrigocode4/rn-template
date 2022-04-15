/* eslint-disable func-names */
const path = require('path')

module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          root: path.resolve(),
          rootPathPrefix: '~/',
          rootPathSuffix: 'src',
        },
      ],
    ],
  }
}
