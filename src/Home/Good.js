import React, { Component } from 'react';
import Content2 from '../Router/Content2';
import '../index.css';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


export default class Good extends Component {
    render() {
        return (
            <div>
                <Route exact path="/home/good" component={Content2}/>
                <Route path="/home/good/content2/:id" component={Content2}/>
                <div className='pages'>
                {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <div key={item} className='page'>
                               <NavLink activeStyle={
                            {background:'red',
                            color:'#fff'}
                            } to={'/home/good/content2/'+item}>{item}</NavLink>

                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
