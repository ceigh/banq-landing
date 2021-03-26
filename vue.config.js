module.exports = {
  pluginOptions: {
    lintStyleOnBuild: true
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/style/variables";
          @import "@/assets/style/_functions.scss";
        `
      }
    }
  }
}
