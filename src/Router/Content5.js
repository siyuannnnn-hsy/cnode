import React from 'react';
import {Route,Link} from "react-router-dom";
// 无状态组件
export default class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
        
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topics?tab=job&&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    data: res.data
                });
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?tab=job&&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res)
                    this.setState({
                        data: res.data
                    });
                })
        }
    }
    render(){
        return (
            <div>
                
                {
                    this.state.data.map((item)=>(
                        <div style={{border:'1px solid black',width:800,height:50,overflow:'hidden',background:'#999',marginTop:2,}} key={item.id}>
                            <img src={item.author.avatar_url} style={{height:30,width:30,float:'left',marginTop:5,marginLeft:5}}/>
                            <h4 style={{float:'left',marginLeft:10}}>{item.reply_count}</h4><h2 style={{float:'left'}}>/</h2><h5 style={{float:'left'}}>{item.visit_count}</h5>
                            <h4 style={{float:'left',marginTop:15,marginLeft:10}}><Link to={'/Details/Details/'+item.id}>{item.title}</Link></h4>
                            <h5 style={{float:'right'}}>5小时前</h5>
                        </div>
                    ))
                }
            </div>
        )
    }
}
