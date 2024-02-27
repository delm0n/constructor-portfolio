const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "~@/assets/style/default/_variables.scss";
        @import "~@/assets/style/default/_mixins.scss";
      `,
      },
    },
  },
});
