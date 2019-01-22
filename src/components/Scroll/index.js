import React,{ PureComponent } from 'react';
import BScroll from 'better-scroll';

import styles from './index.scss';

export default class Scroll extends PureComponent{

  constructor(props){
    super(props);
    this.scrollRef = React.createRef()
  }

  rebind = (ref, direction, bindFunc) => {
    if(ref && 'current' in ref){
      setTimeout(() => {
        this.scroll = new BScroll(ref.current,
          direction && direction === 'vertical' ?
          {
            scrollY: true,
            eventPassthrough: 'horizontal',
            freeScroll: true,
            click: true,
            tap: true
          }:{
            scrollX: true,
            eventPassthrough: 'vertical',
            freeScroll: true,
            click: true,
            tap: true
          }
        );
        if(bindFunc){
          bindFunc(this.scroll);
        }
      }, 20);
    } else {
      setTimeout(() => {
        this.rebind(ref, direction, bindFunc);
      }, 600)
    }
  }

  componentDidMount() {
    const { direction, getRef } = this.props;
    this.rebind(this.scrollRef, direction, getRef);
  }


  render() {
    const {className, direction, children} = this.props;
    return (
      <div className={[className, styles.bscroll_warper].join(' ')} ref={this.scrollRef}>
        <div className={direction && direction === 'vertical' ? '' : styles.warper }>{children}</div>
      </div>)
  }
}
