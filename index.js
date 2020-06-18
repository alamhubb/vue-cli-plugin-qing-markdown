module.exports = api => {
  api.chainWebpack(webpackConfig => {
    // 通过 webpack-chain 修改 webpack 配置
    webpackConfig.module
      .rule('md').test(/\.md$/).use('qing-markdown-loader').loader('qing-markdown-loader')
  })
}
