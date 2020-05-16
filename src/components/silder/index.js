import React from "react";
import { Drawer, List, NavBar, Icon, Progress } from 'antd-mobile';
import './index.css'
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     open: true
    };
  }

  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
        <div className="silderCon">
            <div className="imgCon">
            <img src='http://i2.tiimg.com/718574/995f11f30e936b2c.png'></img>
            <p>Clyde Meyert</p>
            <span>San Frasisco, CA</span>
            <div className="progressCon">
                <div style={{textAlign: 'left'}} className="progressSpan">Power</div>
                <div className="progress"><Progress percent={40} position="normal" /></div>
                <div style={{textAlign: 'left'}} className="progressSpan">Activity</div>
                <div className="progress"><Progress percent={60} position="normal" /></div>
                <div style={{textAlign: 'left'}} className="progressSpan">Strength</div>
                <div className="progress"><Progress percent={30} position="normal" /></div>
            </div>
            </div>
        </div>
    )
  }
}

export default Index;