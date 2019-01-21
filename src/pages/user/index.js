import styles from './index.scss';
import { NavBar, Icon, WhiteSpace, List } from 'antd-mobile';
import router from 'umi/router';

const setting = [
  {
    title: '个人主页',
    brief: {
      type: 'avatar',
      source: 'http://dummyimage.com/250x250'
    }
  },
  {
    title: '身份认证',
    brief: {
      type: 'text',
      source: '4120400120012040'
    }
  },
  {
    title: '我的二维码',
    brief: {
      type: 'icon',
      source: <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-qrcode"></use>
              </svg>
    }
  },
  {
    title: '社交账号',
    brief: {
      type: 'icons',
      source: [
        <svg className="icon" aria-hidden="true" key="1">
          <use xlinkHref="#icon-alipay"></use>
        </svg>,
        <svg className="icon" aria-hidden="true" key="2">
          <use xlinkHref="#icon-facebook"></use>
        </svg>,
        <svg className="icon" aria-hidden="true" key="3">
          <use xlinkHref="#icon-twitter"></use>
        </svg>,
      ]
    }
  }
]

const extra = {
  avatar: source => <img src={source} alt="avatar"/>,
  text: source => source,
  icon: source => source,
  icons: source => source
}

export default function() {
  return (
    <>
      <NavBar icon={<Icon type="left" />}
      onLeftClick={() => router.push('/')}>
        个人信息
      </NavBar>
      <WhiteSpace size="lg" />
      <List>
        {
          setting.map((item, i)=>
            <List.Item arrow="horizontal" key={i}
             extra={extra[item.brief.type](item.brief.source)}>
              {item.title}
            </List.Item>)
        }
      </List>
    </>
  );
}
