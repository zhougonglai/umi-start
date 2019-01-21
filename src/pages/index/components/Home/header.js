import { useState, Suspense ,PureComponent } from 'react';
import { useGeoPosition } from 'the-platform';
import { connect } from 'dva';
import { Toast } from 'antd-mobile';
import Link from 'umi/link';

import styles from './header.scss';

@connect()
class Header extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      coordsState: {
        latitude: '',
        longitude: ''
      }
    };
  }

  shareApp = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Teacher Landi',
        text: '兰迪教师端',
        url: window.location.href
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(err => {
        console.log(`Couldn't share because of`, err.message);
      });
    } else {
      Toast.fail('终端不支持 share', 3);
    }
  }

  render() {
    const { coordsState } = this.state;
    const { theme }  = this.props;

    return (
      <div className={[styles.header, theme === 'light' ? styles.light : styles.dark].join(' ')}>
        <div className={styles.left}>
          <Link to="/search" name="search">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-location"></use>
            </svg>
          </Link>
        </div>
        <div className={styles.right}>
          <svg className="icon" aria-hidden="true" onClick={this.shareApp}>
            <use xlinkHref="#icon-blue-share"></use>
          </svg>
          分享
        </div>
      </div>
    );
  }
}

export default Header;
