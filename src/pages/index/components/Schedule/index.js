import { PureComponent } from 'react';
import { connect } from 'dva';

import {
  SearchBar,
  List,
  Tag,
  Badge
} from 'antd-mobile';

import { UUIDGeneratorBrowser } from '@/utils';

import styles from './index.scss';

const data = [
  {
    time: new Date('2019/1/7 08:00:00'),
    list: [
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: 'new'
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'public',
        tip: '2.0'
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: true
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: false
      },
    ]
  },
  {
    time: new Date('2019/1/7 09:00:00'),
    list: [
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: 'new'
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'public',
        tip: '2.0'
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: true
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: false
      },
    ]
  },
  {
    time: new Date('2019/1/7 13:00:00'),
    list: [
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: 'new'
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'public',
        tip: '2.0'
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: true
      },
      {
        id: UUIDGeneratorBrowser(),
        title: '课程',
        desc: '副标题',
        type: 'regular',
        tip: false
      },
    ]
  }
]

const types = {
  regular:[styles.divider, styles.regular].join(' '),
  public: [styles.divider, styles.public].join(' ')
}

@connect()
class Schedule extends PureComponent {


  render() {
    return (
      <>
        <SearchBar placeholder="搜索" />
        {
          data.map((list,i) => 
            <List key={i}
            renderHeader={() => 
              `${list.time.getHours()} : ${list.time.getMinutes()} 点`
            }
            >
              {
                list.list.map(({id, title, desc, type, tip}) => 
                <List.Item key={id} arrow="horizontal"
                thumb={
                    <div className={types[type]}></div>
                }
                extra={
                  tip && <Badge text="New"/>
                }
                >
                  {title} 
                  <List.Item.Brief>
                    {desc}
                    {
                      typeof tip === 'string' && <Tag small style={{marginLeft: 32}}>{tip}</Tag>
                    }
                  </List.Item.Brief>
                </List.Item>)
              }
            </List>
          )
        }
      </>
    )
  }
}

export default Schedule;