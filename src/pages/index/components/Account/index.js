import { PureComponent } from 'react';
import { connect } from 'dva';

import {
  List,
  Grid,
  WhiteSpace
} from 'antd-mobile';

import styles from './index.scss';

const dashboard = [
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-blue-edit"></use>
          </svg>,
    text: '日志'
  },
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-blue-thumb"></use>
          </svg>,
    text: '点赞'
  },
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-blue-share"></use>
          </svg>,
    text: '分享'
  },
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-blue-edit"></use>
          </svg>,
    text: '日志'
  },
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-blue-like"></use>
          </svg>,
    text: '喜欢'
  },
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-blue-collect"></use>
          </svg>,
    text: '收藏'
  },
  {
    icon: <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-blue-at"></use>
          </svg>,
    text: '提及'
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

@connect(({app}) => ({app}))
class Account extends PureComponent {

  render() {
    const {app} = this.props;
    return (
      <>
        <List className={'account'}>
          <List.Item thumb={app.user.thumb} arrow="horizontal" className={styles.account}>
            {app.user.name}
            <List.Item.Brief>
              {
                [
                  app.user.mail.substring(0, 6),
                  '***',
                  app.user.mail.substr(-6)
                ].join('')
              }
            </List.Item.Brief>
          </List.Item>
        </List>
        <WhiteSpace size="lg" />
        <Grid data={dashboard} hasLine={false}/>
        <WhiteSpace size="lg" />
        <List>
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