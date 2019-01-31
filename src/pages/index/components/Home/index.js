import React, { PureComponent, Suspense, useState } from 'react';
import { WingBlank, WhiteSpace, Carousel } from 'antd-mobile';
import { connect } from 'dva';
import { Img } from 'the-platform';

import Scroll from '@/components/Scroll';
import PageLoading from '@/components/PageLoading';

import styles from './index.scss';

const cctv = require('@/assets/cctv.png');
const cctv_2 = require('@/assets/cctv@2x.png');
const cctv_3 = require('@/assets/cctv@3x.png');

const mask = require('@/assets/mask.png');
const mask_2 = require('@/assets/mask@2x.png');
const mask_3 = require('@/assets/mask@3x.png');

const eric = require('@/assets/eric.png');
const eric_2 = require('@/assets/eric@2x.png');
const eric_3 = require('@/assets/eric@3x.png');

const my = require('@/assets/my.png');
const my_2 = require('@/assets/my@2x.png');
const my_3 = require('@/assets/my@3x.png');

const yx = require('@/assets/yx.png');
const yx_2 = require('@/assets/yx@2x.png');
const yx_3 = require('@/assets/yx@3x.png');

const st = require('@/assets/st.png');
const st_2 = require('@/assets/st@2x.png');
const st_3 = require('@/assets/st@3x.png');

const wl = require('@/assets/wl.png');
const wl_2 = require('@/assets/wl@2x.png');
const wl_3 = require('@/assets/wl@3x.png');

const foot_fit = require('@/assets/foot_fit.png');
const foot_fit_2 = require('@/assets/foot_fit@2x.png');
const foot_fit_3 = require('@/assets/foot_fit@3x.png');

const HomeHeader = React.lazy(() => import('./header'));

@connect(({ view }) => ({ stage: view.tabs.home, theme: view.theme }))
class Home extends PureComponent {
  state = {
    data: [1, 2, 3],
    images: [
      {
        x: eric,
        x2: eric_2,
        x3: eric_3,
        desc:
          '推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐',
      },
      {
        x: my,
        x2: my_2,
        x3: my_3,
        desc:
          '推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐',
      },
      {
        x: yx,
        x2: yx_2,
        x3: yx_3,
        desc:
          '推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐',
      },
      {
        x: st,
        x2: st_2,
        x3: st_3,
        desc:
          '推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐',
      },
      {
        x: wl,
        x2: wl_2,
        x3: wl_3,
        desc:
          '推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐',
      },
    ],
  };

  searchOn = () => {
    this.props.dispatch({
      type: 'view/homeSearch',
      payload: !this.props.stage.search,
    });
  };
  render() {
    const { stage, theme } = this.props;
    const { images } = this.state;

    return (
      <>
        <HomeHeader search={stage.search} theme={theme.mode} searchOn={this.searchOn} />
        <Scroll
          direction="vertical"
          className={[styles.content, theme.mode === 'light' ? styles.light : styles.dark].join(
            ' '
          )}
        >
          <WhiteSpace size="lg" />
          <WingBlank size="lg">
            <Carousel
              autoplay
              infinite
              autoplayInterval={5000}
              cellSpacing={16}
              style={{ height: 528 }}
            >
              {this.state.data.map(key => (
                <Suspense fallback={<PageLoading />} key={key}>
                  <Img alt="" src={mask} srcSet={`${mask_2} 2x, ${mask_3} 3x`} />
                </Suspense>
              ))}
            </Carousel>
          </WingBlank>
          <WhiteSpace size="lg" />
          <WingBlank size="lg">
            <img
              src={cctv}
              srcSet={`${cctv_2} 2x, ${cctv_3} 3x`}
              alt=""
              className={[styles.fit_width, 'lazy-image'].join(' ')}
            />
          </WingBlank>
          <WhiteSpace size="lg" />
          <h3 className={styles.title}>名人倾力推荐</h3>
          <Scroll direction="horizontal">
            <div className={styles.scroll_horizontal}>
              <div className={styles.horizontal}>
                {images.map(({ x, x2, x3, desc }, i) => (
                  <div className={styles.card} key={i}>
                    <div className={styles.card_media}>
                      <img
                        src={x}
                        srcSet={`${x2} 2x, ${x3} 3x`}
                        alt=""
                        className={[styles.thumb, styles.card_thumb].join(' ')}
                      />
                    </div>
                    <p className={styles.card_desc}>
                      {desc.length > 39 ? `${desc.substr(0, 39)}...` : desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Scroll>
          <img
            src={foot_fit}
            srcSet={`${foot_fit_2} 2x, ${foot_fit_3} 3x`}
            alt=""
            className={styles.foot_fit}
          />
        </Scroll>
      </>
    );
  }
}

export default Home;
