module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      // extensions: [],
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views',
        'network': '@/network'
      }
    }
  }
}
