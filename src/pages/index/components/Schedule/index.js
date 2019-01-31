import { PureComponent } from 'react';
import { connect } from 'dva';

import { SearchBar, NavBar, Menu, Popover, Icon } from 'antd-mobile';

import Scroll from '@/components/Scroll';

import Schedules from './schedules';
import styles from './index.scss';

const types = {
  regular: [styles.divider, styles.regular].join(' '),
  public: [styles.divider, styles.public].join(' '),
};

const menus = [
  {
    value: 1,
    label: 'public',
  },
  {
    value: 2,
    label: 'regular',
  },
];

@connect(({ app, view, loading }) => ({
  stage: view.tabs.schedule,
  theme: view.theme,
  app,
  logining: loading.effects['app/querySchedules'],
}))
class Schedule extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      popover: false,
    };
  }

  toggleMenu = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  togglerPopover = () => {
    this.setState({
      popover: !this.state.popover,
    });
  };

  hidePopover = () => {
    this.setState({
      popover: false,
    });
  };

  render() {
    const { menu, popover } = this.state;
    const {
      theme,
      app: { schedules },
    } = this.props;

    return (
      <>
        <NavBar
          mode={theme.mode}
          icon={
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-menu" />
            </svg>
          }
          rightContent={
            <Popover
              mask
              visible={popover}
              overlay={[
                <Popover.Item
                  key={1}
                  value="scan"
                  icon={
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-scan" />
                    </svg>
                  }
                >
                  scan
                </Popover.Item>,
                <Popover.Item
                  key={2}
                  value="mycode"
                  icon={
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-qrcode" />
                    </svg>
                  }
                >
                  mycode
                </Popover.Item>,
              ]}
              onSelect={this.hidePopover}
            >
              <Icon type="ellipsis" />
            </Popover>
          }
          onLeftClick={this.toggleMenu}
        >
          课表
        </NavBar>
        {menu ? (
          <div className={styles.menu_warp}>
            <Menu
              level={1}
              data={menus}
              multiSelect
              onOk={this.toggleMenu}
              onCancel={this.toggleMenu}
            />
          </div>
        ) : null}
        <SearchBar placeholder="搜索" />
        <div className={[styles.fit_content, styles[theme.mode]].join(' ')}>
          <Scroll direction="vertical">
            <Schedules schedules={schedules} />
          </Scroll>
        </div>
      </>
    );
  }
}

export default Schedule;
