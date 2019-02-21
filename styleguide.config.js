module.exports = {
  components: 'src/ui/**/*.js',
  usageMode: 'expand',
  skipComponentsWithoutExample: true,
  dangerouslyUpdateWebpackConfig: (c) => {
    c.cache = false
    return c
  },
  styleguideComponents: {
    Wrapper: require('path').join(__dirname, 'src/Theme')
  }
}