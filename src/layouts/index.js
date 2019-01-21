import withRouter from 'umi/withRouter';
import { Fragment, Component } from 'react';

import styles from './index.scss';
import { connect } from 'dva';
import { ConfigProvider } from 'antd';


@withRouter
@connect(({view, app}) => ({view, app}))
class Layout extends Component {

  componentDidMount(){
    const { network: {online, connection} } = this.props.app;
    if(connection){
      connection.addEventListener('typechange', () => {
        // console.log('网络',connection);
      })
    } else {
      // console.log('online',online , navigator.onLine);
    }
  }

  render() {
    const { children, app:{network} } = this.props;

    return (
      <ConfigProvider {...network}>
        { children }
      </ConfigProvider>
    );
  }
}

export default Layout;
