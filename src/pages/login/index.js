
import React, { PureComponent, Suspense } from 'react';
import PropTypes from 'prop-types';
import PageLoading from '@/components/PageLoading';
import { InputItem, WingBlank, Button, WhiteSpace, Toast } from 'antd-mobile';
import Link from 'umi/link';
import {} from 'rc-form';

import styles from './index.scss';
import router from 'umi/router';
import { connect } from 'dva';

const logo = require('@/assets/logo@200x200.png');


@connect(({loading}) => ({
  loading: loading.effects['app/login']
}))
class Login extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      id: '',
      password: ''
    }
  }

  onChange = (fild, value) => {
    this.setState({
      [fild]: value
    })
  }

  queryTeacher = () => {

  }

  createPasswordCredential = async ({id, password}) => {
    if(window.PasswordCredential) {
      Toast.info('浏览器自动储存密码 API');
      return navigator.credentials.store(await navigator.credentials.create({password:{id, password}}))
    } else {
      Toast.info('浏览器 Cache API 储存证书');
      return Promise.resolve({id ,password})
    }
  }

  login = () => {
    const { id, password } = this.state;
    this.props.dispatch({
      type: 'app/login',
      payload: {
        id, password
      }
    }).then(res => {
      this.createPasswordCredential({id ,password})
      .then(credential => {
        router.push('/')
      });
    });
  }

  componentDidMount() {
    if('credentials' in navigator) {
      Toast.info('使用 PasswordCredential 证书');
      navigator.credentials.get({
        password: true,
        unmediated: true,
        federated: {
          providers: [ window.location.href ]
        }
      }).then(cred => {
        console.log(cred);
        this.props.dispatch({
          type: 'app/login',
          payload: cred
        }).then(
          router.push('/')
        )
      })
    } else {
      Toast.info('使用 Cache API 证书');
    }
  }

  render() {
    const { id, password } = this.state;
    const { loading } = this.props;

    return (
      <Suspense fallback={<PageLoading />}>
        <div className={styles.logo_content}>
          <img src={logo} className={styles.logo} alt="logo"/>
        </div>
        <WingBlank size="lg">
          <div className={styles.form_content}>
            <InputItem type="text" value={id} onChange={e => this.onChange('id', e)} placeholder="手机号/邮箱" className={[styles.form_contrl, styles.user_id].join(' ')} />
            <WhiteSpace size="lg"/>
            <InputItem type="password" value={password} onChange={e => this.onChange('password', e)} placeholder="密码" className={[styles.form_contrl, styles.password].join(' ')} />
          </div>
          <WhiteSpace size="lg" />
          <div className={styles.actions}>
            <Button type="primary" loading={loading} onClick={this.login}>登录</Button>
          </div>
          <WhiteSpace size="lg" />
          <div className={styles.tips}>
            <Link to="/pwd">forgotpassword</Link>
            <Link to="/register">register</Link>
          </div>
        </WingBlank>
      </Suspense>
    );
  }
}

Login.propTypes = {

};

export default Login;
