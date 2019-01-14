import { PureComponent } from 'react';
import { connect } from 'dva';
import router from 'umi/router';

import {
  SearchBar,
  List,
  Tag,
  Badge,
  NavBar,
  Menu,
  Popover,
  Icon
} from 'antd-mobile';

import { UUIDGeneratorBrowser } from '@/utils';
import Scroll from '@/components/Scroll';

import Schedules from './schedules';
import styles from './index.scss';

const data = [
  {
    time: new Date('2019/1/7 08:00:00'),
    list: [
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: 'new'
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'public',
        tip: '2.0'
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: true
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: false
      },
    ]
  },
  {
    time: new Date('2019/1/7 09:00:00'),
    list: [
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: 'new'
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'public',
        tip: '2.0'
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: true
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: false
      },
    ]
  },
  {
    time: new Date('2019/1/7 13:00:00'),
    list: [
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: 'new'
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'public',
        tip: '2.0'
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: true
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: false
      },
    ]
  }
]

const types = {
  regular:[styles.divider, styles.regular].join(' '),
  public: [styles.divider, styles.public].join(' ')
}

const menus = [
  {
    value: 1,
    label: 'public'
  },
  {
    value: 2,
    label: 'regular'
  }
]


@connect(({app, view, loading}) => ({
  stage: view.tabs.schedule,
  theme: view.theme,
  app,
  logining: loading.effects['app/querySchedule']
}))
class Schedule extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      menu: false,
      popover: false
    }
  }

  toggleMenu = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  togglerPopover = () => {
    this.setState({
      popover: !this.state.popover
    })
  }

  hidePopover = () => {
    this.setState({
      popover: false
    })
  }

  componentDidMount() {
    const date = new Date();
    this.props.dispatch({
      type: 'app/querySchedule',
      payload: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    })
  }

  render() {
    const { menu, popover } = this.state;
    const { theme, app: {schedules} } = this.props;

    return (
      <>
        <NavBar mode={theme.mode}
        icon={
          <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-menu"></use>
          </svg>
        }
        rightContent={
          <Popover mask
          visible={popover}
          overlay={[
            (<Popover.Item key={1} value="scan" icon={
              <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-scan"></use>
              </svg>
            }>scan</Popover.Item>),
            (<Popover.Item key={2} value="mycode" icon={
              <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-qrcode"></use>
              </svg>
            }>mycode</Popover.Item>)
          ]}
          onSelect={this.hidePopover}>
            <Icon type="ellipsis" />
          </Popover>
        }
        onLeftClick={this.toggleMenu}
        >课表</NavBar>
        {
          menu ? <div className={styles.menu_warp}>
          <Menu level={1}
            data={menus}
            multiSelect
            onOk={this.toggleMenu}
            onCancel={this.toggleMenu}/>
          </div>: null
        }
        <SearchBar placeholder="搜索" />
        <div className={[styles.fit_content, styles[theme.mode]].join(' ')}>
          <Scroll direction="vertical">
            <Schedules schedules={schedules}/>
          </Scroll>
        </div>
      </>
    )
  }
}

export default Schedule;
