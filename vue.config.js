const publicPath = '/'

const sassPrependData = `
$public-path: '${publicPath}';
@import '@/assets/style/variables';
`

module.exports = {
  publicPath,

  pluginOptions: {
    lintStyleOnBuild: true
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: sassPrependData
      }
    }
  }
}
