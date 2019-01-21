import { PureComponent } from 'react';
import { connect } from 'dva';
import router from 'umi/router';

import {
  List,
  Grid,
  WhiteSpace,
  NavBar
} from 'antd-mobile';

import PageLoading from '@/components/PageLoading';

import styles from './index.scss';

const dashboard = [
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-blue-forward"></use>
          </svg>,
    text: '退出登录',
    path: '/login'
  },
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-blue-thumb"></use>
          </svg>,
    text: '点赞',
    path: '/login'
  },
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-blue-share"></use>
          </svg>,
    text: '分享',
    path: '/login'
  },
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-blue-edit"></use>
          </svg>,
    text: '日志',
    path: '/login'
  },
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-blue-like"></use>
          </svg>,
    text: '喜欢',
    path: '/login'
  },
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-blue-collect"></use>
          </svg>,
    text: '收藏',
    path: '/login'
  },
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-blue-at"></use>
          </svg>,
    text: '提及',
    path: '/login'
  }
];

const setting = [
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-chongzhi"></use>
          </svg>,
    title: '绑卡'
  },
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-zuoyezhongxin"></use>
          </svg>,
    title: '教材'
  },
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-duanxinjilu"></use>
          </svg>,
    title: '留言'
  },
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-jibu"></use>
          </svg>,
    title: '兰迪足迹'
  },
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-xuexizhongxin"></use>
          </svg>,
    title: '学习中心'
  },
]

const ThemeMode = ({ switchMode, light = true }) =>
  light ?
    <svg className="icon" aria-hidden="true" onClick={switchMode}>
      <use xlinkHref="#icon-moon"></use>
    </svg> :
    <svg className="icon" aria-hidden="true" onClick={switchMode}>
      <use xlinkHref="#icon-sun"></use>
    </svg>

@connect(({app, view, loading}) => ({
  app, view,
  loading: loading.effects['app/queryTeacher']
}))
class Account extends PureComponent {

  componentDidMount(){
    this.props.dispatch({type: 'app/queryTeacher', payload: 70816})
  }

  login = () => {
    router.push('/user')
  }

  forward = ({icon, text, path}) => {
    router.push(path);
  }

  render() {
    const { app: { user }, view: { theme }, dispatch } = this.props;
    return (
      <>
        <NavBar mode={theme.mode}
        icon={
          <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-message"></use>
          </svg>
        }
        rightContent={
          [
            <ThemeMode key="theme" light={theme.mode === 'light'} switchMode={() => dispatch({type: 'view/themeMode', payload: theme.mode === 'light' ? 'dark' : 'light'})}/>,
            <svg className="icon" aria-hidden="true" key="setting">
                <use xlinkHref="#icon-setting"></use>
            </svg>
          ]
        }>
          My Account
        </NavBar>
        <List className={'account'}>
          {
            'name' in user ?
            <List.Item thumb={user.thumb} arrow="horizontal"
            className={[styles.account, styles[theme.mode]].join(' ')}
            onClick={this.login}>
              {user.name}
              <List.Item.Brief>
                {
                  [
                    user.mail.substring(0, 6),
                    '***',
                    user.mail.substr(-6)
                  ].join('')
                }
              </List.Item.Brief>
            </List.Item>: <PageLoading />
          }
        </List>
        <WhiteSpace size="lg" />
        <Grid data={dashboard} hasLine={false} className={styles[theme.mode]} onClick={this.forward}/>
        <WhiteSpace size="lg" />
        <List className={styles[theme.mode]}>
          {
            setting.map(({icon, title}, i) =>
              <List.Item thumb={icon} arrow="horizontal" key={i}>
                {title}
              </List.Item>)
          }
        </List>
      </>
    )
  }
}

export default Account;
