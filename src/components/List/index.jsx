import React, { Component } from 'react'
import './index.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Spinner} from 'react-bootstrap'


export default class index extends Component {
    render() {
        const { users, isLoading, isFirstSearch, err } = this.props
        return (

            <div >
                {
                    isFirstSearch ? <h2 className="text">Welcome! </h2> :
                        isLoading ? <h3 className="text loading"> <Spinner animation="border" variant="dark" /> loading...</h3> :
                            err ? <h3>{err}</h3> :
                                
                                users.map((userObj) => {
                                    return (<Card className="eachCard" key={userObj.id}>

                                        <Card.Img alt="cannot be loaded" src={userObj.avatar_url} style={{ textAlign:"center" }} />

                                        <h1 className="card-text">{userObj.login}</h1>
                                        <Button variant="outline-secondary" href={userObj.html_url} target="_blank" >
                                        {userObj.login}'s github
                                        
                                        </Button>
                                    </Card>)

                                })
                }




            </div>

        )
    }
}
