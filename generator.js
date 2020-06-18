module.exports = (api) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      'qing-markdown': '^1.1.1'
    },
    devDependencies: {
      "qing-markdown-loader": "^1.1.0"
    },
  })
}