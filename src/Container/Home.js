import React, { Component } from 'react';
import {Route,Link} from "react-router-dom";
import All from '../Home/All';
import Good from '../Home/Good';
import Dev from '../Home/Dev';
import Share from '../Home/Share';
import Job from '../Home/Job';
import Ask from '../Home/Ask';
import Details from '../Details/Details';

export default class Home extends Component {
    render() {
        return (
            <div>
                    <div className='home'>
                        <Link to="/home/all">全部</Link>
                        <Link to="/home/good">精华</Link>
                        <Link to="/home/share">分享</Link>
                        <Link to="/home/ask">问答</Link>
                        <Link to="/home/job">招聘</Link>
                        <Link to="/home/dev">客户端测试</Link>
                    </div>
                    {/* <Switch> */}
                        <Route  path='/home/all' component={All}/>
                        <Route  path='/home/good' component={Good}/>
                        <Route  path='/home/share' component={Share}/>
                        <Route path='/home/ask' component={Ask}/>
                        <Route  path='/home/job' component={Job}/>
                        <Route  path='/home/dev' component={Dev}/>
                        {/* <Route  path='/Details/Details' component={Details}/> */}
                    {/* </Switch> */}
                
                
            </div>
        )
    }
}
