import React, { Suspense, Component } from 'react';
import { connect } from 'dva';
import {
  NavBar
} from 'antd-mobile';

import { useGeoPosition } from 'the-platform';

import { UUIDGeneratorBrowser } from '@/utils';
import PageLoading from '@/components/PageLoading';

import styles from './index.scss';

const Home = React.lazy(() => import('./components/Home'));
const Schedule = React.lazy(() => import('./components/Schedule'));
const Account = React.lazy(() => import('./components/Account'));

const page = {
  home: <Home />,
  schedule: <Schedule />,
  account: <Account />
}

const HomeHeader = React.lazy(() => import('./components/Home/header'))

const Header = ({view}) => {
  return (
    <Suspense fallback={<PageLoading />}>
      {
        view === 'home' ?
          <HomeHeader />
          : view === 'schedule' ?
            <NavBar>课表</NavBar>
            : <NavBar
            icon={
              <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-message"></use>
              </svg>
            }
            rightContent={
              <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-setting"></use>
              </svg>
            }>我的</NavBar>
      }
    </Suspense>
  )
}

@connect(({view}) => ({view}))
class Content extends Component {

  constructor(props){
    super(props);
    this.state = {
      home: {
        search: false
      }
    }
  }

  render() {
    const { view } = this.props;

    return (
      <Suspense fallback={<PageLoading />}>
        {page[view.tabs.select]}
      </Suspense>
    )
  }
}

export default Content;
