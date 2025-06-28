import React, { component } from "react"
import ChildComponent from "./childComponent";

class ParentComp extends component {
    constructor(props) {
        super(props)

        this.state = {
            ParentName : "John"

        }
        this.parentOne = this.parentOne.bind(this)
    }
    parentOne(childdata){
    //     console.log(`Hello + ${this.state.ParentName}`);
    alert(`Hello ${this.state.ParentName} from ${childdata}`)
     }

    render() {
        return (
            <>
                <div>
                    <ChildComponent parentHandler ={this.parentOne}/>
                </div>
                {/* <div>{this.parentOne()}</div> */}
                
            </>
        )
    }
}
export default ParentComp
