import React ,{component} from "react"

class ArgumentClass extends component {

     msg = (a,b)=>{
        alert("Welcome" + a)
        alert(b.type)
    }

    render(){
        return(
            <>
              <div>ArgumentClass</div>
              <button onClick={(event)=>this.msg("MERN",event)}>Course</button>
            </>
        )
    }
    }
    export default ArgumentClass

    