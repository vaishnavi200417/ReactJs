import React, { component } from "react"

class UserCondition extends component {
    constructor(props) {
        super(props)
        this.state = {
            logIn : true
        }
    }
    render() {
        return this.state.logIn && <h2>Login Succesfull</h2>
        // return this.state.logInn ? (
        //             <h2>Ternary operator</h2>

        // ) :
        // (
        //     <h2>This is False value</h2>
        // )


    //     let text;
    //     if (this.state.logIn) {

    //             text = <div>UserCondition component</div>
    //     } else {
            
    //             text = <div>Hello World...</div>
    //     }
    //     return(<h1>{text}</h1>)
     }
}
export default UserCondition

