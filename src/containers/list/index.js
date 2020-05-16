/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import SliderCon from '../../components/silder/index';
import { Drawer, List, Button, Icon, Slider, Tag, Badge, Tabs, InputItem, Flex, WhiteSpace } from 'antd-mobile';
import './index.css'
import {list} from '../../reducers/list'
import {connect} from 'react-redux'
import axios from 'axios'

@connect(
  state => state.list, {
    list
  }
)

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

  componentDidMount(){
      axios.get("/user/pagelist").then(res => {
        if (res.status === 200) {
            console.log(res)
          //console.log(this.props)
          if (res.data.code === 0) {
            // 有登录信息de
            // this.props.loadData(res.data.data);
          } else {
            // this.props.history.push("/login");
          }
        }
      });
  }


  handleChange(key, val) {
    this.setState({
      [key]: val
    });
  }

  toDetail(){
      console.log(this.props)
    this.props.history.push("/detail");
  }

  render() {
    const tabs = [
        { title: <Badge text={'8'}>POPULAR</Badge> },
        { title: <Badge text={'3'}>RECENT</Badge> },
        { title: <Badge dot>UPLOAD</Badge> },
      ];
    return (
        <div className="listCon">
            <div className="header">
              <img src='http://i1.fuimg.com/718574/1a3bc2e877184542.png'></img>
            </div>
            <div className="headerMask">
              <div className="headercon">
                <Tag>Economics</Tag>
                <p>Invest In Main Street: The Steady and Secure Portfolio</p>
                <div className="footerInfolist">
                    <img src='http://i2.tiimg.com/718574/3b14b18639d14fc1.png'></img>
                    <span>Barbara Powell</span>
                </div>
              </div>
            </div>
            <div className="listTab">
            <Tabs tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <div className="itemGlug">
            <div className="itemCloun">
                <div className="item" >
                  <img src='http://i1.fuimg.com/718574/c23dff9b1186d971.png'></img>
                  <span className="title">
                  RT-TEch
                  </span>
                  <span className="discrpt">
                  Apps For Children With Autism Can Offer Intervention Programs
                  </span>
                 <span className="time">
                 Yesterday at 23:00
                 </span>
                </div>
                <div className="item">
                <img src='http://i1.fuimg.com/718574/7dd94774bd8426ad.png'></img>
                  <span className="title">
                  NY TIMES
                  </span>
                  <span className="discrpt">
                  Ways to Make Your IP Address Anonymous
                  </span>
                 <span className="time">
                 31 December 2015
                 </span>
                </div>
                <div className="item">
                  <img src='http://i1.fuimg.com/718574/0ff97c74185b3707.png'></img>
                  <span className="title">
                    West news
                  </span>
                  <span className="discrpt">
                  Different Modern Applications of Piezoelement
                  </span>
                 <span className="time">
                 Yesterday at 23:00
                 </span>
                </div>
                <div className="item">
                <img src='http://i1.fuimg.com/718574/7e299f7c22815743.png'></img>
                  <span className="title">
                    RT-TEch
                  </span>
                  <span className="discrpt">
                    Apps For Children With Autism Can Offer Intervention Programs
                  </span>
                 <span className="time">
                    Yesterday at 23:00
                 </span>
                </div>

                <div className="item">
                  <img src='http://i1.fuimg.com/718574/c23dff9b1186d971.png'></img>
                  <span className="title">
                  RT-TEch
                  </span>
                  <span className="discrpt">
                  Apps For Children With Autism Can Offer Intervention Programs
                  </span>
                 <span className="time">
                 Yesterday at 23:00
                 </span>
                </div>

                <div className="item">
                  <img src='http://i1.fuimg.com/718574/0ff97c74185b3707.png'></img>
                  <span className="title">
                    West news
                  </span>
                  <span className="discrpt">
                  Different Modern Applications of Piezoelement
                  </span>
                 <span className="time">
                 Yesterday at 23:00
                 </span>
                </div>

                <div className="item">
                  <img src='http://i1.fuimg.com/718574/c23dff9b1186d971.png'></img>
                  <span className="title">
                  RT-TEch
                  </span>
                  <span className="discrpt">
                  Apps For Children With Autism Can Offer Intervention Programs
                  </span>
                 <span className="time">
                 Yesterday at 23:00
                 </span>
                </div>
                <div className="item">
                <img src='http://i1.fuimg.com/718574/7dd94774bd8426ad.png'></img>
                  <span className="title">
                  NY TIMES
                  </span>
                  <span className="discrpt">
                  Ways to Make Your IP Address Anonymous
                  </span>
                 <span className="time">
                 31 December 2015
                 </span>
                </div>
                


            </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection:'column', alignItems: 'left', justifyContent: 'center',  backgroundColor: '#fff' }}>
        <div className="seconedGlug" onClick={this.toDetail.bind(this)}>
            <img src='http://i1.fuimg.com/718574/cc801fe6e299fcb5.png'></img>
            <span className="title">
            West news
            </span>
            <span className="discrpt">
            Different Modern Applications of Piezoelement
            </span>
            <div className="footerInfolist"  style={{ justifyContent: 'left', padding: '0', marginTop: 6}}>
                <img src='http://i2.tiimg.com/718574/3b14b18639d14fc1.png'></img>
                <span>Barbara Powell</span>
                <span className="time">
                    Yesterday at 23:00
                </span>
            </div>
        </div>
        <div className="seconedGlug" onClick={this.toDetail.bind(this)}>
            <img src='http://i1.fuimg.com/718574/0ff97c74185b3707.png'></img>
            <span className="title">
            West news
            </span>
            <span className="discrpt">
            Different Modern Applications of Piezoelement
            </span>
            <div className="footerInfolist" style={{ justifyContent: 'left', padding: '0', marginTop: 6}}>
                <img src='http://i2.tiimg.com/718574/3b14b18639d14fc1.png'></img>
                <span>Barbara Powell</span>
                <span className="time">
                    Yesterday at 23:00
                </span>
            </div>
        </div>
        <div className="seconedGlug" >
            <img src='http://i1.fuimg.com/718574/cc801fe6e299fcb5.png'></img>
            <span className="title">
            West news
            </span>
            <span className="discrpt">
            Different Modern Applications of Piezoelement
            </span>
            <div className="footerInfolist"  style={{ justifyContent: 'left', padding: '0', marginTop: 6}}>
                <img src='http://i2.tiimg.com/718574/3b14b18639d14fc1.png'></img>
                <span>Barbara Powell</span>
                <span className="time">
                    Yesterday at 23:00
                </span>
            </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#fff' }}>
        <List>
            <InputItem onChange={v => this.handleChange("user", v)}>
              Text
            </InputItem>
          </List>
          <WhiteSpace />
          <List>
          <InputItem onChange={v => this.handleChange("pwd", v)} >
              ImageUrl
          </InputItem>
          </List>
          <Button onClick={this.handleUpload} type="primary" style={{ margin: 20 }}>Upload</Button>
          <WhiteSpace />
      </div>
    </Tabs>
            </div>
        </div>
    )
  }
}

export default Index;