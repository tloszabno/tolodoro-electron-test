module.exports = {
  extends: 'erb/typescript',
  rules: {
    'import/no-extraneous-dependencies': 'off',
    "import/prefer-default-export": "off",
    "react/prop-types" : "off",
    'semi' : 'off'
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: require.resolve('./configs/webpack.config.eslint.js')
      }
    }
  }
};
