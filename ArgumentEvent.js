import React from 'react'

function ArgumentEvent(){
   const msg = (a)=>{
        alert("Welcome" + a)
    }
    return(
        <>
        <div>ArgumentEvent</div>
        <button onClick={()=>msg("MERN stack")}>Course</button>

        </>

    )
}
export default ArgumentEvent
    
