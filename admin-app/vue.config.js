module.exports = {
  configureWebpack: {
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' },
      proxy: 'https://devtest.sportsspace.ru'
    }
  }
}
