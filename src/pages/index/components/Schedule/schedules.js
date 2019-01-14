import { List, Badge } from "antd-mobile";
import router from "umi/router";

import styles from './index.scss';

const types = {
  regular:[styles.divider, styles.regular].join(' '),
  public: [styles.divider, styles.public].join(' ')
}

const Slot = ({list}) =>
  list.map(({id, title, desc, type, version, tip}) =>
    <List.Item key={id} arrow="horizontal"
    thumb={
        <div className={types[type]}></div>
    }
    extra={
      version === 2 && <Badge text={ typeof tip === 'string' ? tip : 'New'}/>
    }
    onClick={
      () => {router.push(`/schedule/${id}`)}
    }>
      {title}
      <List.Item.Brief>
        {desc}
      </List.Item.Brief>
    </List.Item>);

const Schedules = ({schedules}) =>
  schedules.map((list,i) =>
    <List key={i}
    renderHeader={() =>
      `${list.time}`
    }>
      <Slot list={list.list}/>
    </List>
  )

export default Schedules;
