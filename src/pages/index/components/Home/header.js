import { useState, Suspense ,PureComponent } from 'react';
import { useGeoPosition } from 'the-platform';
import { connect } from 'dva';
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

  render() {
    const { coordsState } = this.state;
    const { theme }  = this.props;

    return (
      <div className={[styles.header, theme === 'light' ? styles.light : styles.dark].join(' ')}>
        <div className={styles.left}>
          <Link to="/search">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-location"></use>
            </svg>
          </Link>
        </div>
        <div className={styles.right}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-blue-share"></use>
          </svg>
          分享
        </div>
      </div>
    );
  }
}

export default Header;
