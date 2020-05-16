import React from 'react';
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import {Route} from 'react-router-dom'
import Index from '../boss/boss'
import User from '../user/user'
import {Redirect} from 'react-router-dom'
import {getMsgList,recvMsg} from '../../reducers/chat'

@connect(state => state, {
  getMsgList,
  recvMsg
})
class Dashboard extends React.Component {
  componentDidMount() {

  }
  render() {
    const {
      pathname
    } = this.props.location
    const user = this.props.user
    const navList = [{
      path: '/index',
      text: 'Recommend',
      icon: 'boss',
      title: 'Recommend',
      component: Index,
    }, {
      path: '/index',
      text: 'bosses',
      icon: 'condidate',
      title: 'Other',
      component: Index,
    }, {
      path: '/me',
      text: 'me',
      icon: 'user',
      title: 'Personal',
      component: Index,
    }]

    const page = navList.find(v => v.path === pathname);
    return(
      <div>
        <NavBar className="fixd-header" mode='dard'>{page.title}</NavBar>
        <div style={{marginTop:45,bottom:100}}>
          <Route key={page.path} path={page.path} component={page.component}/>
        </div>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    )
  }
}
export default Dashboard;