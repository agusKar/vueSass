module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/_breakpoints.scss";
          @import "@/styles/_functions.scss";
          @import "@/styles/_variables.scss";
          @import "@/styles/_utilities.scss";
          @import "@/styles/_colors.scss";
        `
      }
    }
  }
};