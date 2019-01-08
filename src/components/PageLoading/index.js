import { Spin } from 'antd';
// import { Skeleton } from 'antd';
// import 'antd/lib/skeleton/style/index.css';
import 'antd/lib/spin/style/index.css';
import styles from './index.scss';

export default () => (
  <div className={styles.fit_window}>
    <Spin size="large" />
  </div>
);