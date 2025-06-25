import React, { component } from "react"

class EventBinding extends component {
    constructor(props) {
        super(props)

        this.state = {
            msg: "Hello"
        }

        // this.clickHandler =this.clickHandler.bind(this)
    }

    clickHandler = ()=>{
        this.state({
            msg: "This is class binding"
        })
    }
    render() {
        return (
            <>
                <div>EventBinding</div>
                <h3>{this.state.msg}</h3>
                {/* <button onClick={this.clickHandler.bind(this)}>Change msg</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Change msg</button> */}
                <button onClick={this.clickHandler}>Change msg</button>


            </>
        )
    }
}
export default EventBinding

