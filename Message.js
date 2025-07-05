import React ,{component} from 'react'

class Message extends component {
    constructor(){
        super()
        this.state={
            msg : "Welcome to javascript"
        }
    }

    changeMsg() {
        this.setstate({
            msg : "Welcome to ReactJs"
        })

    }


    render() {
        return (
            <>
            <div>{this.state.msg}</div>
            <button onClick={()=>{this.changeMsg()}}>Change Msg</button>
            </>
           
        )
    }
}

    export default Message

