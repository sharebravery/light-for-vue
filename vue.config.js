/*
 * @Author: sharebravery
 * @Date: 2021-08-25 10:37:57
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-09-04 14:41:23
 * @Weather: ~(～￣▽￣)～
 */
let proxyTarget = process.env.VUE_APP_API_BASE_URL;

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: false, // 生产环境构建不生成 source map，加快打包速度
  configureWebpack: {
    mode: process.env.production ? "production" : "development",
    // devtool: process.env.NODE_ENV ? "source-maps" : "eval",
    resolve: {
      alias: {
        components: "@/components",
        // content: "components/content",
        // common: "components/common",
        assets: "@/assets",
        plugins: "@/plugins",
        views: "@/views"
      }
    }
  },
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: proxyTarget,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
