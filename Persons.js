import React from 'react'

function Persons({person}) {
    return (
        <div><h3>My Name is {person.name}. I am {person.age} years old. My id is {person.id}
        and my course is{person.course}</h3></div>

    )
}

export default Persons
