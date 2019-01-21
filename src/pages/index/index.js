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

@connect(({view}) => ({view}))
class Content extends Component {

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
