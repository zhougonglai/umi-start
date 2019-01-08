import { Component } from 'react';
import { connect } from 'dva';
import {
  NavBar
} from 'antd-mobile';

import { UUIDGeneratorBrowser } from '@/utils';

import Home from './components/Home';
import Schedule from './components/Schedule';
import Account from './components/Account';

import styles from './index.scss';

const page = {
  home: <Home />,
  schedule: <Schedule />,
  account: <Account />
}

const navbar = {
  home: <NavBar>首页</NavBar>,
  schedule: <NavBar>课表</NavBar>,
  account: <NavBar 
  icon={
    <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-message"></use>
    </svg>
  }
  rightContent={
    <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-setting"></use>
    </svg>
  }>我的</NavBar>,
}

@connect(({view}) => ({view}))
class Content extends Component {

  addTodo = () => {
    this.props.dispatch({
      type: 'main/add',
      payload: {
        id: UUIDGeneratorBrowser(),
        title: UUIDGeneratorBrowser()
      }
    })
  }

  render() {
    const { view } = this.props;
    return (
      <>
        {navbar[view.tabs.select]}
        <div className={styles.tab__content}>
          {page[view.tabs.select]}
        </div>
      </>
    )
  }
}

export default Content;