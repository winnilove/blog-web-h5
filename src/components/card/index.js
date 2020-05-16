import React from "react";
import { Drawer, List, NavBar, Icon, Progress } from 'antd-mobile';
import './index.css'
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
        <div className="cardCon">
           
        </div>
    )
  }
}

export default Index;