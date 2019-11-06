import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Signin extends Component {
    render() {
        return (
            <div className='mima'>
                <input type='text' className='input'/>
                <input type='password' className='input'/>
                <Link to='/home'><input type='submit' value="登录" className='sub'/></Link>
            </div>
        )
    }
}
