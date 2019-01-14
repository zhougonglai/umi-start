# T+ Mobile 技术规格

## 项目规格:
Teacher Mobile项目是专注于手机📱浏览器上运行的项目. 脚手架.开发框架.UI框架.模型层 的项目规格如下:

脚手架: Umi@^2.1.2 (使用版本 2.3.2)<br />开发框架: React@16.6.0<br />UI框架: antd-mobile@^2.2.8<br />模型层: dva<br />Plugins: better-scroll<br />测试: Jest<br />图标: iconfont

本次项目主要使用阿里团队研发的React开发体系.从设计到开发.应用都有非常成功的技术经验.<br />[](https://umijs.org/zh/)[Umi脚手架](https://umijs.org/zh/)封装了一整套优秀的配置.覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求，目前内外部加起来已有 50+ 的插件。<br />[antd-mobile](https://mobile.ant.design/index-cn)  是基于 [ant-design](https://ant.design/index-cn) 设计规范实现的手机平台UI框架, 同时支持 React/React Native.(web/App)<br />组件库预览:<br />![](https://zos.alipayobjects.com/rmsportal/TrdkqxQcrAUcmYelQUNK.png#align=left&display=inline&height=300&linkTarget=_blank&originHeight=300&originWidth=300&width=300)<br />[dva](https://dvajs.com/) 是则是用于React平台的数据流模型层.内置 react-redux.react-thunk.react-saga 一套流行数据处理流水线插件.<br />better-scroll 使用css实现的web滚动插件.主要模拟App中的物理滚动.(模拟的表现力有限)

---
## 项目特性:
* 原生特性:
  * 拨号
  * 邮件
  * 短信
* Web特性:
  * 高清方案
    * 支持 1X.2X.3X图片和背景
    * 项目尺寸会根据屏幕尺寸和分辨率进行公式计算
  * 渐进式网络应用 (progressive-web-apps) (兼容性弱, 仅支持Chrome/Firefox最新的几个版本, Safari 12, 尚未开始)
    * 支持html/css/js/fetch **选择性**资源缓存 (能够增加用户第二次之后的打开速度 约30%)
    * 增加 Add to Homescreen(网络应用安装横幅) 添加至手机桌面
    * 离线消息 notification消息推送依赖
  * 社交发现协议 (单一: 即该项目分享出去的入口仅有一个. 分享多个入口需要和运维协作)
  * 表单上传 **目前** 仅支持 手机相册 上传. 后期有需求 可以 支持手机视频上传
* 开发特性:
  * async/await , 注解支持
  * 约定式路由, 可改配置式路由
  * sass样式语法
  * 本地Mock

## 上线必备开发清单:

- [ ] 基于Ant-Design 配置Landi 特征风格的主题UI 
  - [x] 主题色
  - [ ] 组件参数
- [ ] 课表等定制型组件
- [ ] 主题色切换(日间模式/夜间模式) (可能部分低端浏览器不兼容)
  - [x] css变量
  - [x] js变量
  - [ ] 日间模式/夜间模式 -- 结果不如预期
- [ ] 编译发布验证
- [ ] analytics Google 分析引入
- [ ] 权限路由
- [ ] network offline断网处理
- [ ] 图片加载贴纸
- [x] better-scroll封装 (初步)
- [x] fetch跨域请求

## 优化开发清单:

- [ ] ant-motion 交互式动画库
- [ ] lodash , prop-types 数据处理工具
- [ ] 测试环境特性开发
- [ ] 组件懒加载骨架
- [ ] Service-Worker
  - [ ] 安装
  - [ ] 缓存

<br /><br /><br /><br />![1547464365.png](https://cdn.nlark.com/yuque/0/2019/png/86794/1547464392272-98e11ad1-5bc1-4ff0-ac31-3a9648a43fa9.png#align=left&display=inline&height=300&linkTarget=_blank&name=1547464365.png&originHeight=300&originWidth=300&size=8926&width=300)
