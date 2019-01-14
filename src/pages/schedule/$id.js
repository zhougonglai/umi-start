import { PureComponent } from "react";
import { NavBar, Icon } from "antd-mobile";
import { connect } from "dva";
import Link from "umi/link";

@connect()
class Slot extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const {computedMatch} = this.props;
    return (
      <>
        <NavBar
        icon={
          <Link to="/">
            <Icon type="left" />
          </Link>
        }>
          {computedMatch.params.id}
        </NavBar>
      </>
    );
  }
}

export default Slot;
