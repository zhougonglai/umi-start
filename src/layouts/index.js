import withRouter from 'umi/withRouter';
import React, { Component } from 'react';
// import {
//   NavBar,
//   Flex
// } from 'antd-mobile';

import styles from './index.scss';
import { connect } from 'dva';

@withRouter
@connect(({view}) => ({view}))
class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <>
        { children }
      </>
    );
  }
}

export default Layout;
