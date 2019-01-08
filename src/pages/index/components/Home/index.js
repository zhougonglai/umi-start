import { PureComponent } from 'react';
import { 
  List,
  WingBlank,
  WhiteSpace,
  Carousel
} from 'antd-mobile';
import { connect } from 'dva';
import BScroll from 'better-scroll';

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

@connect(({app}) => ({app}))
class Home extends PureComponent {
  state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    imgHeight: 176,
    loading: true,
    images: [
      {
        x: eric,
        x2: eric_2,
        x3: eric_3,
        desc: '推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐'
      },
      {
        x: my,
        x2: my_2,
        x3: my_3,
        desc: '推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐'
      },
      {
        x: yx,
        x2: yx_2,
        x3: yx_3,
        desc: '推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐'
      },
      {
        x: st,
        x2: st_2,
        x3: st_3,
        desc: '推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐'
      },
      {
        x: wl,
        x2: wl_2,
        x3: wl_3,
        desc: '推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐推荐'
      },
    ]
  }

  loadEvent = () => {
    this.setState({
      loading: true
    })
  }

  componentDidMount(){
    this.props.dispatch({type: 'app/queryTeacher', payload: 123})
    // this.scroll = new BScroll(`.${styles.bscroll}`,{
    //   eventPassthrough: 'horizontal',
    //   click: true,
    //   tap: true,
    //   scrollbar: {
    //     fade: true
    //   }
    // });
  }

  render() {
    const { loading, app } = this.props;
    const { images } = this.state;
    
    return (
      <>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Carousel autoplay infinite 
          autoplayInterval={5000}
          cellSpacing={16}
          style={{height: 528}}>
            {
              this.state.data.map(key => 
                <img key={key} alt=""
                src={mask} srcSet={`${mask_2} 2x, ${mask_3} 3x`}/>)
            }
          </Carousel>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <img src={cctv} srcSet={`${cctv_2} 2x, ${cctv_3} 3x`} alt="" className={[styles.fit_width, 'lazy-image'].join(' ')}
            onLoad={this.loadEvent}/>
        </WingBlank>
        <WhiteSpace size="lg" />
        <h3>名人倾力推荐</h3>
        <div className={[styles.bscroll].join(' ')} ref={
          el => {
            if(el && el.classList.length){
              setTimeout(() => {
                this.scroll = new BScroll(el,{
                  scrollX: true,
                  eventPassthrough: 'vertical',
                  freeScroll: true,
                  click: true,
                  tap: true
                });
              }, 20);
            }
          }
        }>
            <div className={styles.scroll_horizontal}>
              <div className={styles.horizontal}>
              {
                images.map(({x, x2, x3, desc}, i) => 
                <div className={styles.card} key={i}>
                  <div className={styles.card_media}>
                    <img src={x} srcSet={`${x2} 2x, ${x3} 3x`} alt="" className={[styles.thumb, styles.card_thumb].join(' ')}/>
                  </div>
                  <p className={styles.card_desc}>
                    {desc.length > 39 ? `${desc.substr(0, 39)}...` : desc}
                  </p>
                </div>)
              }
              </div>
            </div>
        </div>
        <img src={foot_fit} srcSet={`${foot_fit_2} 2x, ${foot_fit_3} 3x`} alt="" className={styles.foot_fit}/>
      </>
    )
  }
}

export default Home;