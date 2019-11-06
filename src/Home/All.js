import React, { Component } from 'react';
// import {HashRouter as Router,Route,Link,Redirect,Switch,NavLink} from "react-router-dom";
import Content from '../Router/Content';
import '../index.css';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export default class All extends Component {
    render() {
        return (
            <div>
                {/* <Content /> */}
                <Route exact path="/home/all" component={Content}/>
                <Route path="/home/all/content/:id" component={Content}/>
                <div className='pages'>
                {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <div key={item} className='page'>
                               <NavLink activeStyle={
                            {background:'red',
                            color:'#fff'}
                            } to={'/home/all/content/'+item}>{item}</NavLink>

                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
