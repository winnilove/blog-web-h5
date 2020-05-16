import React from "react";
import bg from "./indexback.png";
import SliderCon from '../../components/silder/index';
import { Drawer, List, NavBar, Icon, Slider } from 'antd-mobile';
import './index.css'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     open: false
    };
  }

  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }

  goIndex = () => {
    this.props.history.push("/list");
  }

  render() {
    const sidebar = (<SliderCon></SliderCon>);

    return (
        <div>
            <div className="conimg">
            <div  className="mask">
            </div>
                <img src={bg} className="App-logo" alt="logo" />
            </div>
            <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange} style={{ backgroundColor: 'transparent', zIndex: 10 }}>BLOG</NavBar>
            {/* <Drawer
                className="my-drawer"
                style={{ minHeight:'60px' }}
                enableDragHandle
                contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                sidebar={sidebar}
                open={this.state.open}
                onOpenChange={this.onOpenChange}
            >
            </Drawer> */}
            <div className="footer">
                <p>Invest In Main Street: The Steady and Secure Portfolio</p>
                <div className="footerInfo">
                    <img src='http://i2.tiimg.com/718574/3b14b18639d14fc1.png'></img>
                    <span>Barbara Powell</span>
                    <div className="icon" onClick={this.goIndex}>
                     <Icon type="right" size="md" style={{color: "#fff", }}/>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Index;