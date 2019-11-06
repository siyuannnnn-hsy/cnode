import React from 'react';
import {Route,Link,Redirect,Switch} from 'react-router-dom';
import Home from '../Container/Home';
import Start from '../Container/Start';
import Api from '../Container/Api';
import About from '../Container/About';
import Signin from '../Container/Signin';

export default function Header(){

    return (
            <div className="header">
                <header>
                    <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"/>
                    {/* <Router> */}
                        <div style={{float:"right"}}>
                            <Link to="/home">首页</Link>
                            <Link to="/start">新手入门</Link>
                            <Link to="/api">API</Link>
                            <Link to="/about">关于</Link>
                            <Link to="/signin">登录</Link>
                        </div>
                        {/* <Switch>
                            <Route path='/home' component={Home}/>
                            <Route path='/start' component={Start}/>
                            <Route path='/api' component={Api}/>
                            <Route path='/about' component={About}/>
                            <Route path='/signin' component={Signin}/>
                        </Switch> */}
                    {/* </Router> */}
                </header>
            </div>
        
    )
}