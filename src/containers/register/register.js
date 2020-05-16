import React from "react";
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Radio
} from "antd-mobile";
import {
  connect
} from 'react-redux'
import {
  register
} from "../../reducers/login";
import {
  Redirect
} from "react-router-dom"
import formhoc from '../../components/form-hoc/form-hoc'

import './login.css'
import loginbackimg from './loginbg.png';

@connect(
  state => state.user, {
    register
  }
)
@formhoc
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this)
  }
  componentDidMount() {
    this.props.handleChange('type', 'condidate')
  }
  handleRegister() {
    this.props.register(this.props.state)
  }
  render() {
    const RadioItem = Radio.RadioItem;
    return <div className="container">
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <p className="welcome">WELCOME</p>
        <span className="welcomelabel">
        The labels you love
discover over 850 world-class fashion brands here.
        </span>
        <div className="conimg">
          <div  className="mask">
          </div>
        <img src={loginbackimg} className="App-logo" alt="logo" />
        </div>
        <WingBlank>
          <List>
            {this.props.msg ? <p className="error-msg">
                {this.props.msg}
              </p> : null}
            <InputItem onChange={v => this.props.handleChange("user", v)}>
              Username
            </InputItem>
            <InputItem type="password" onChange={v => this.props.handleChange("pwd", v)}>
              Password
            </InputItem>
            <InputItem type="password" onChange={v => this.props.handleChange("pwd2", v)}>
            Confirm
            </InputItem>
          </List>
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <Button onClick={this.handleRegister} type="primary">
          Sign up
          </Button>
        </WingBlank>
      </div>;
  }
}
export default Register;