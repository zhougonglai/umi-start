import { PureComponent } from 'react';
import { connect } from 'dva';
import {
  TabBar
} from 'antd-mobile';

const bowser = require('bowser');

@connect(({view, app}) => ({view, app}))
class Layout extends PureComponent {

  componentWillMount(){
    if(this.props.app.ua.target && 'browser' in this.props.app.ua.parsed){

    } else {
      const {parsedResult, _ua} = bowser.getParser(window.navigator.userAgent);
      this.props.dispatch({
        type: 'app/setUA',
        payload: {
          target: _ua,
          parsed: parsedResult
        }
      })
    }
  }
  render() {
    const { children, view } = this.props;
    const light = view.theme.mode === 'light';
    return (
      <TabBar
      prerenderingSiblingsNumber={0}
      barTintColor={light ? '#fafafa' : '#13c2c2'}
      tintColor={light ? '#13c2c2' : '#fafafa'}
      unselectedTintColor={light ? '#888' : '#e8e8e8'}
      >
        <TabBar.Item
          title="Home"
          key="home"
          selected={view.tabs.select === 'home'}
          onPress={() => this.props.dispatch({type: 'view/select', payload: 'home'})}
          icon={
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-home"></use>
            </svg>
          }
          selectedIcon={
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-home-fill"></use>
            </svg>
          }>
          {children}
        </TabBar.Item>
        <TabBar.Item
          title="Schedule"
          key="schedule"
          selected={view.tabs.select === 'schedule'}
          onPress={() => this.props.dispatch({type: 'view/select', payload: 'schedule'})}
          icon={
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-calendar"></use>
            </svg>
          }
          selectedIcon={
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-calendar-fill"></use>
            </svg>
          }>
          {children}
        </TabBar.Item>
        <TabBar.Item
          title="Account"
          key="account"
          selected={view.tabs.select === 'account'}
          onPress={() => this.props.dispatch({type: 'view/select', payload: 'account'})}
          icon={
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-user"></use>
            </svg>
          }
          selectedIcon={
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-user"></use>
            </svg>
          }>
          {children}
        </TabBar.Item>
      </TabBar>
    )
  }
}

export default Layout
