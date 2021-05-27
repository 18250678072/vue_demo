const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
    publicPath: './',
    lintOnSave: false,
    configureWebpack: config=>{
        if(isProduction){
            config.externals = {
                'vue': 'Vue',
                'vuex': 'Vuex',
                'vue-router': 'VueRouter',
                'element-ui': 'ELEMENT'
            }
        }
    },
    chainWebpack: config => {
        if (process.env.use_analyzer) {
            // 分析
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
        }
        if (isProduction) {
            config.plugin('html')
            .tap(args => {
                args[0].cdn = cdn;
              return args;
            })
          }
    },
};
