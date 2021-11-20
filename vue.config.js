/*
 * @Author: sharebravery
 * @Date: 2021-08-25 10:37:57
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-11-20 22:27:10
 * @Weather: ~(～￣▽￣)～
 */
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const proxyTarget = process.env.VUE_APP_API_BASE_URL;
console.log("[ proxyTarget ]", proxyTarget);
const isProd = process.env.NODE_ENV === "production";
const productionGzipExtensions = ["js", "css"];

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false, // 生产环境构建不生成 source map，加快打包速度
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
  },

  configureWebpack: {
    mode: process.env.production ? "production" : "development",
    devtool: process.env.NODE_ENV ? "source-maps" : "eval",
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

  configureWebpack: config => {
    config.performance = {
      hints: false
    };

    // 生产环境下将资源压缩成gzip格式
    if (isProd) {
      // add `CompressionWebpack` plugin to webpack plugins
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
    config => {
      config.plugin("fork-ts-checker").tap(args => {
        let totalmem = Math.floor(os.totalmem() / 1024 / 1024); //get OS mem size
        let allowUseMem = totalmem > 5120 ? 5120 : totalmem > 2048 ? 2048 : 1024;
        args[0].memoryLimit = allowUseMem;
        return args;
      }),
        // it can improve the speed of the first screen, it is recommended to turn on preload
        config.plugin("preload").tap(() => [
          {
            rel: "preload",
            // to ignore runtime.js
            fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
            include: "initial"
          }
        ]);
    };
  },

  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            "primary-color": "#1DA57A",
            "link-color": "#1DA57A",
            "border-radius-base": "2px"
          },
          javascriptEnabled: true
        }
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less"
      // patterns: [path.resolve(__dirname, "./src/theme/theme.less")],
    }
  }
};
