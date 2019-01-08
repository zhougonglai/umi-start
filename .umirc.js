import path from 'path';
// ref: https://umijs.org/config/
// theme: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'teacher',
      dll: true,
      hd: true,
      fastClick: true,
      hardSource: /* isMac */ process.env.NODE_ENV === "development" ? false : process.platform === 'darwin',
      pwa: {
        manifestOptions: {
          srcPath: 'public/manifest.json',
        },
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          importWorkboxFrom: 'local',
          swSrc: '/src/service-worker.js'
        }
      },
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/PageLoading/index',
      },
      routes: {
        exclude: [
          /components/,
        ],
      },
    }],
  ],
  sass: {},
  targets: {
    android: 5,
    ios: 10,
    chrome: 46,
    firefox: 45, 
    safari: 10,
  },
  proxy: {
    '/yapi': {
      target: 'http://yapi.demo.qunar.com/mock/35763/',
      changeOrigin: true,
      pathRewrite: {'^/yapi': ''}
    }
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
}
