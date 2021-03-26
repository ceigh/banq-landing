const publicPath = '/'

module.exports = {
  publicPath,

  pluginOptions: {
    lintStyleOnBuild: true
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
$public-path: '${publicPath}';
@import '@/assets/style/variables';
`
      }
    }
  }
}
