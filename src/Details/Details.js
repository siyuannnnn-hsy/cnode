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
        let id = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topic/'+id)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    data: res.data.content
                });

            })
            
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let id = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topic/'+id)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res)
                    this.setState({
                        data: res.data.content
                    });
                })
        }
    }
    render(){
        console.log(this.state.data)
        return (
            
            <div>
                {/* {
                    this.state.data.map((item)=>(
                        <div  key={item}> */}
                             <div dangerouslySetInnerHTML={{__html:this.state.data}}></div> 
                          {/* </div>   */}
                    {/* )) */}
                {/* } */}
            </div>
        )
    }
}
