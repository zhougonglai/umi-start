import withRouter from 'umi/withRouter';
import { Fragment, Component } from 'react';

import styles from './index.scss';
import { connect } from 'dva';

@withRouter
@connect(({view}) => ({view}))
class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <Fragment>
        { children }
      </Fragment>
    );
  }
}

export default Layout;
