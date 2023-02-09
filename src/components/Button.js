import React from "react";
import PropTypes from 'prop-types'

class Button extends React.Component{
    render(){
        return(
            <div>
                <button> Button</button>
            </div>
        )
    }
}

Button.propTypes = {
    color : PropTypes.number
}

export default Button;