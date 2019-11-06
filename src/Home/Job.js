import React, { Component } from 'react';
import Content5 from '../Router/Content5';
import '../index.css';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export default class Share extends Component {
    render() {
        return (
            <div>
                
                <Route exact path="/home/job" component={Content5}/>
                <Route path="/home/job/content5/:id" component={Content5}/>
                <div className='pages'>
                {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <div key={item} className='page'>
                               <NavLink activeStyle={
                            {background:'red',
                            color:'#fff'}
                            } to={'/home/job/content5/'+item}>{item}</NavLink>

                            </div>
                        ))
                    }
                </div>
            
            </div>
        )
    }
}
