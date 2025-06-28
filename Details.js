import React from "react";
import Persons from "./Persons";

function Details() {
    // const persons = [
    //     {
    //         id: 11,
    //         name: "John",
    //         age: 21,
    //         course: "ReactJs"
    //     },
    //     {
    //         id: 12,
    //         name: "Max",
    //         age: 23,
    //         course: "MERN"

    //     },
    //     {
    //         id:13,
    //         name:"Prince",
    //         age:20,
    //         course:"MEAN"
    //     }
    // ]
    const names = ['John',"Prince","Max",'John']

    const personList = names.map((name,index)=>(
                <h2 key ={index}>{name}</h2>


    )
)
    return (
        <>
            <div>Details</div>
            <div>{personList}</div>
            </>
    )
}


export default Details