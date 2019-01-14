import { ActivityIndicator } from 'antd-mobile';
import styles from './index.scss';

export default () => (
  <div className={styles.fit_window}>
    <ActivityIndicator size="large"/>
  </div>
);