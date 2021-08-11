import React, { Component } from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button';
import './index.css'
import { CloseButton, FormControl, InputGroup } from 'react-bootstrap';

export default class index extends Component {



    search = async () => {
        const { newState } = this.props
        //获取用户输入
        //解构赋值
        //方法一：
        // const {keywordElement} = this
        // console.log(keywordElement.value)

        //方法二：
        // const {value} =this.keywordElement
        // console.log(value)

        //方法三：解构赋值连续写法得到value，并随之重命名value为keyword
        const { keywordElement: { value: keyword } } = this


        try {
            //
            //http://localhost:3000/api1/search/users?q=${keyword}

            //发送网络请求前通知app更新状态
            newState({ isLoading: true, isFirstSearch: false })

            //发送网络请求
            const response = await axios.get(`https://api.github.com/search/users?q=${keyword}`)

            //请求成功后通知app更新状态
            newState({ users: response.data.items, isLoading: false });

        }
        catch (e) {
            //update state when catch an error
            newState({ isLoading: false, err: e.message })
        }
    }


    //clear input using close button
    clearInput =()=>{
        const {keywordElement} =this
        keywordElement.value=""
    }

    render() {
        return (
            
                <section className="section">
                    <h1 className="header">FIND GITHUB USER</h1>
                    
                        <InputGroup className="inputLine">
                            <InputGroup.Text >
                                @
                            </InputGroup.Text>

                            <FormControl 
                                    type="text" 
                                    placeholder="Enter the username" 
                                    ref={(currentNode) => { this.keywordElement = currentNode }} />
                            <InputGroup.Text><CloseButton onClick={this.clearInput}/></InputGroup.Text>
                           <Button variant="secondary" onClick={this.search}>Search</Button>
                                         
                        </InputGroup>

                        
                </section>
            
        )
    }
}
