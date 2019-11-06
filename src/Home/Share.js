import React, { Component } from 'react';
import Content3 from '../Router/Content3';
import '../index.css';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export default class Share extends Component {
    render() {
        return (
            <div>
                
                <Route exact path="/home/share" component={Content3}/>
                <Route path="/home/share/content3/:id" component={Content3}/>
                <div className='pages'>
                {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <div key={item} className='page'>
                               <NavLink activeStyle={
                            {background:'red',
                            color:'#fff'}
                            } to={'/home/share/content3/'+item}>{item}</NavLink>

                            </div>
                        ))
                    }
                </div>
            
            </div>
        )
    }
}
