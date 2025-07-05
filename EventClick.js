import React from 'react'

function EventClick() {
    function clickhandler() {
        console.log("User clicked on button");
    }
    return (
        <>
            <div> EventClick</div>
            <button onClick={clickhandler}>click Me</button>

        </>


    )
}
export default EventClick
