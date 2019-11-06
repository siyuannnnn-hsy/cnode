import React, { Component } from 'react';
import Header from './Components/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Container/Home';
import Start from './Container/Start';
import Api from './Container/Api';
import About from './Container/About';
import Details from './Details/Details';

export default class App extends Component {
    render() {
        return (
          <Router>
              <div>
                  <Header/>
              </div>
              <div className="content">
                <div className="left">
                    <Route  path='/Details/Details/:id' component={Details}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/start" component={Start}/>
                    <Route path="/api" component={Api}/>
                    <Route path="/about" component={About}/>

                </div>
                <div className='right'>
                    <h3 style={{marginLeft:20}}>CNode：Node.js专业中文社区</h3>
                </div>
              </div>
          </Router>
        )
    }
}
