import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TypeProps extends Component {
    render() {
        const { myName, mynumber, value, anytype, bollean } = this.props
        return (
            < div >
            <p>My name is {myName}</p>
            <p>My age is {mynumber}</p>
            <p>My value is {value}</p>
            <p>My anytype {anytype}</p>
            <p>bollean : {bollean ? 'true':'false'}</p>




            </div>


        )
}
}

TypeProps.propTypes = {
    myName: PropTypes.string.isRequired,
    mynumber : PropTypes.number.isRequired,
    value : PropTypes.array.isRequired,
    anytype : PropTypes.any.isRequired,
    boolean : PropTypes.bool.isRequired

}
export default TypeProps
