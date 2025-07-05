import React from 'react'

function Greet(props,{name,courseName}) {
    console.log(props);
    return(
        <>
        <div>Greet Components </div>
        <div>Hello my name is :{name} My skills are {courseName}</div>
        {props.children}
        </>
        

    )
    }


export default Greet;
