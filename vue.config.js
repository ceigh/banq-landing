const publicPath = process.env.PUBLIC_PATH || '/'

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
@import '@/assets/style/_mixins';
`
      }
    }
  }
}
