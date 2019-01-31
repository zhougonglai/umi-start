import withRouter from 'umi/withRouter';
import React, { Fragment, Component, useState, useEffect } from 'react';

import styles from './index.scss';
import { connect } from 'dva';
import { ConfigProvider } from 'antd';

@withRouter
@connect(({ view, app }) => ({ view, app }))
class Layout extends Component {
  render() {
    const {
      children,
      app: { network },
    } = this.props;

    return <ConfigProvider {...network}>{children}</ConfigProvider>;
  }
}

export default Layout;
