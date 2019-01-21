import { PureComponent } from "react";
import { NavBar, Icon, WingBlank, WhiteSpace, Card, Toast } from "antd-mobile";
import { connect } from "dva";
import Link from "umi/link";

@connect(({app}) => ({schedule: app.schedule}))
class Slot extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentDidMount(){
    const {computedMatch: {params}, dispatch } = this.props;
    dispatch({
      type: 'app/querySchedule',
      payload: params.id
    }).then(data => {
      // console.log(data)
    })
  }

  showNotification = () => {
    if('Notification' in window){
      if (Notification.permission === "granted") {
        new Notification(this.props.schedule.title, {
          body: this.props.schedule.desc,
          icon: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg'
        });
      } else {
        Notification.requestPermission().then(result => {
          if(result === 'granted') {
              new Notification(this.props.schedule.title, {
                body: this.props.schedule.desc,
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg'
              });
          } else {
            console.log('被拒绝');
          }
        });
      }
    } else {
      Toast.fail('终端不支持 Notification', 3);
    }
  }


  render() {
    const {computedMatch, schedule} = this.props;
    return (
      <>
        <NavBar mode="light"
        icon={
          <Link to="/">
            <Icon type="left"/>
          </Link>
        }
        rightContent={
          <svg className="icon" aria-hidden="true" onClick={this.showNotification}>
              <use xlinkHref="#icon-icon-yichang"></use>
          </svg>
        }>
          {schedule.title}
        </NavBar>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
            <Card>
              <Card.Header title={schedule.title} extra={schedule.version}/>
              <Card.Body>
                <div>
                  {schedule.desc}
                </div>
              </Card.Body>
              <Card.Footer content={schedule.tip} extra={schedule.time}/>
            </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
      </>
    );
  }
}

export default Slot;
