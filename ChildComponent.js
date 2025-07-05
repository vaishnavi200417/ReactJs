import React from 'react'

function ChildComponent (){
    return(
        <>
        <div>ChildComponent</div>
        <button onclick={props.parentHandler("ChildComponent")}>Click Me</button>
        </>
        

    )
    }


export default ChildComponent



