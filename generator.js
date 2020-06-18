module.exports = (api) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      'qing-markdown': '^1.0.5'
    }
  })
}