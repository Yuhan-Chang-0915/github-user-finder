import React, { Component } from 'react'
import Search from "./components/Search"
import List from "./components/List"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


export default class App extends Component {

    state ={users:[],
    isFirstSearch:true,
    isloading:false,
    err:""} //初始化状态

    newState =(stateObj)=>{
        this.setState(stateObj)


    }
    

    render() {
        return (


            <div className="container">
                
                <Search newState={this.newState}/>
                
                <List {...this.state}/>
                
            </div>

        )
    }
}
