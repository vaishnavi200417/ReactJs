import React ,{component} from 'react'

class Welcome extends component {
    render(){
        return(
            <>
            <div>Welcome components</div>
            <h1>My Name is {this.props.name} and i am{this.props.skill}</h1>

            </>

        )
    }
}

    export default Welcome

