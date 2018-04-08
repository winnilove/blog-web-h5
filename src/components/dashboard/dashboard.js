import React from 'react';
import {
  connect
} from 'react-redux'
import {
  NavBar
} from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import {
  Switch,
  Route
} from 'react-router-dom'
import Boss from '../boss/boss'
import Condidate from '../condidate/condidate'
import User from '../user/user'
import {
  Redirect
} from 'react-router-dom'
import {
  getMsgList,
  recvMsg
} from '../../reducers/chat'

function Msg() {
  return <p>msg</p>
}



@connect(state => state, {
  getMsgList,
  recvMsg
})
class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getMsgList()
    this.props.recvMsg()
  }
  render() {
    const {
      pathname
    } = this.props.location
    const user = this.props.user
    const navList = [{
      path: '/boss',
      text: 'condidate',
      icon: 'boss',
      title: 'condidates',
      component: Boss,
      hide: user.type === 'condidate'
    }, {
      path: '/condidate',
      text: 'bosses',
      icon: 'condidate',
      title: '招聘信息',
      component: Condidate,
      hide: user.type === 'boss'
    }, {
      path: '/msg',
      text: 'msg',
      icon: 'msg',
      title: 'msgs',
      component: Msg,

    }, {
      path: '/me',
      text: 'me',
      icon: 'user',
      title: '个人信息',
      component: User,

    }]
    //console.log(navList.find(v => v.path === pathname))
    //console.log(navList.find(v=>v.path=pathname))
    const page = navList.find(v => v.path === pathname);
    return page ? (
      <div>
        <NavBar className="fixd-header" mode='dard'>{page.title}</NavBar>
        
        <div style={{marginTop:45}}>
          <Switch>
            {navList.map(v=>(
              <Route key={v.path} path={v.path} component={v.component}/>
              ))}
          </Switch>
        </div>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    ) : <Redirect to='/Login' />
  }
}
export default Dashboard;