import { PureComponent } from 'react';
import { SearchBar, Tag, Icon, WhiteSpace } from 'antd-mobile';

import styles from './index.scss';
import Link from 'umi/link';

const tags = [
  {
    label: 'coco'
  },
  {
    label: '华莱士'
  },
  {
    label: '周黑鸭'
  },
  {
    label: '匠人造饭'
  },
  {
    label: '汉堡王'
  },
  {
    label: 'Pizza'
  }
]

class Location extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className={styles.header}>
          <Link to="/">
            <Icon type="left" />
          </Link>
          <SearchBar placeholder={'搜索🔍'}/>
        </div>
        <WhiteSpace size="lg" />
        <div className={styles.tag_container}>
          <div className={styles.container_title}>
            历史搜索
            <div className="fill"></div>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-delete"></use>
            </svg>
          </div>
          <div className={styles.tags}>
            {
              tags.map(({label}, i) =>
              <Tag key={i}>{label}</Tag>)
            }
          </div>
        </div>
      </>
    );
  }
}

export default Location;
