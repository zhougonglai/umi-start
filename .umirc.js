import path from 'path';
import defaultSettings from './src/defaultSetting';
// ref: https://umijs.org/config/
// theme: https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less
export default {
  sass: {},
  targets: {
    android: 5,
    ios: 10,
    chrome: 46,
    firefox: 45,
    safari: 10,
  },
  theme: {
    ...defaultSettings.theme
  },
  proxy: {
    '/mock': {
      target: 'https://www.easy-mock.com/mock/5c34bf0190862b0b0cf503c0',
      changeOrigin: true
    }
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
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
        workboxOptions: {
          importWorkboxFrom: 'local'
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
  ]
}
