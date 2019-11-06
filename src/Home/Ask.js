import React, { Component } from 'react';
import Content4 from '../Router/Content4';
import '../index.css';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export default class Share extends Component {
    render() {
        return (
            <div>
                
                <Route exact path="/home/ask" component={Content4}/>
                <Route path="/home/ask/content4/:id" component={Content4}/>
                <div className='pages'>
                {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <div key={item} className='page'>
                               <NavLink activeStyle={
                            {background:'red',
                            color:'#fff'}
                            } to={'/home/ask/content4/'+item}>{item}</NavLink>

                            </div>
                        ))
                    }
                </div>
            
            </div>
        )
    }
}
