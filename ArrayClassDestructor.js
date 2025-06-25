import React, { component } from "react"

class ArrayClassDestructor extends component {
    constructor() {
        super()
        this.color = ['Red', 'Green', 'Blue'];
        [this.firstcolor, this.secondcolor, this.thirdcolor] = this.color
    }
    render() {
        return (
            <>
                <div>ArrayClassDestructor</div>
                <h3>FirstColor : {this.firstcolor}</h3>
                <h3>SecondColor : {this.secondcolorcolor}</h3>
                <h3>ThirdColor : {this.thirdcolor}</h3>

            </>
        )
    }
}
export default ArrayClassDestructor
