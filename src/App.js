import React, { Component } from 'react'
import {  } from "react-router-dom";
import { HashRouter,Switch,Route } from 'antd-mobile';
//引入子页面
import Login from './pages/login/Login' //登录
import Reg from './pages/reg/Reg' //注册
import Nav from './pages/nav/Nav' //导航页面

//应用程序入口容器组件
export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
            <Switch>
                <Route  path='/' exact Component={Nav}/>
                <Route  path='/login' exact Component={Login}/>
                <Route  path='/reg' exact Component={Reg}/>
            </Switch>
        </HashRouter>
      </div>
    )
  }
}
