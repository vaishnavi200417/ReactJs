import React ,{component} from 'react'

class EventClass extends component {

    clickhandler(){
         console.log("User clicked on button");

    }

    render(){
        return(
            <>
              <div> EventClick</div>
            <button onClick={this.clickhandler}>click Me</button>
            </>
        )
    }
    }
    export default EventClass

    
