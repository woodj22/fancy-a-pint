const path = require('path')

module.exports = {
    chainWebpack: config => {
      config.resolve.alias.delete("@")
      config.resolve
        .plugin("tsconfig-paths")
        .use(require("tsconfig-paths-webpack-plugin"))
        // const apiClient = 'server'
        // config.resolve.alias.set(
        //   'api-client',
        //   path.resolve(__dirname, `src/api/${apiClient}`)
        // )
      }
    }