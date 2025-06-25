import React ,{component} from "react"

class Counter extends component {
    constructor(props){
        super(props)
        this.state= {
            Count : 0
        
        }
    }

    changeCount() {
        this.setstate({
            Count : this.state.Count + 1
        })

    }
    render() {
        return (
            <>
            <div>{this.state.Count}</div>
            <button onClick={()=>{this.changeCount()}}>click</button>
            </>
           
        )
    }
}

    export default Counter

