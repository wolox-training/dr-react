module.exports = {
  extends: ['wolox-react'],
  plugins:["babel"],
  rules: {
    'no-magic-numbers': 0,
    'class-methods-use-this': 0
  },
  settings: {
    'import/resolver': {
      node: {},
      'babel-module': {
        alias: {
          "~components": "./src/app/components",
          '~scss': './src/scss',
          '~screens': './src/app/screens',
          '~config': './src/config',
          '~constants': './src/constants',
          '~redux': './src/redux',
          '~services': './src/services',
          '~utils': './src/utils',
          '~propTypes': './src/propTypes'
        }
      }
    },
    "react": {
      "version": "detect"
    }
  }
};
