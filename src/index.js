import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import {
  Provider
} from "react-redux";
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import reducers from './reducers/index'
import './config';
import Login from './containers/login/login';
import Index from './containers/index/index';
import Register from './containers/register/register';
import AuthRouter from './components/authroute/authroute';
import Dashboard from './components/dashboard/dashboard';
import Detail from './containers/detail/index';
import List from './containers/list/index';

import './index.css'

const store = createStore(
  reducers,
  compose(
    // 开启redux-thunk
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        {/* 对所有页面都进行权限认证 */}
        <AuthRouter />
        {/* 只要用switch包起来的 只会命中第一个,可以用来实现404 */}
        <Switch>
          <Route path="/index" component={Index} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/detail" component={Detail} />
          <Route path="/list" component={List} />
        
          <Route component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);