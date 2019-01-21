
import React, { PureComponent, Suspense } from 'react';
import PropTypes from 'prop-types';
import PageLoading from '@/components/PageLoading';
import { InputItem, WingBlank, Button, WhiteSpace } from 'antd-mobile';
import Link from 'umi/link';

import styles from './index.scss';
import router from 'umi/router';

const logo = require('@/assets/logo@200x200.png');

class Register extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      type: 'phone'
    }
  }

  switchType = () => {
    this.setState({
      type: this.state.type === 'phone' ? 'email' : 'phone'
    })
  }

  backAccount = () => {
    router.push('/');
  }

  render() {
    const { type } = this.state;

    return (
      <Suspense fallback={<PageLoading />}>
        <div className={styles.logo_content}>
          <img src={logo} className={styles.logo} alt="logo"/>
        </div>
        <WingBlank size="lg">
          <div className={styles.form_content}>
            <InputItem type={type} placeholder={type === 'phone' ? '手机号' : '邮箱'} className={[styles.form_contrl, styles.user_id].join(' ')} />
            <div className={styles.switch} onClick={this.switchType}>
              switch to {type === 'phone' ? 'email' : 'phone'}
            </div>
            <InputItem type="password" placeholder="密码" className={[styles.form_contrl, styles.password].join(' ')} />
          </div>
          <WhiteSpace size="lg" />
          <div className={styles.actions}>
            <Button type="primary" onClick={this.backAccount}>注册</Button>
          </div>
        </WingBlank>
      </Suspense>
    );
  }
}

Register.propTypes = {

};

export default Register;
