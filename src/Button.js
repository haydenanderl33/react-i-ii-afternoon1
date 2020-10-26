import React from 'react'


function Button (props) {
        return (
            <div className="buttons">
                <button onClick={ () => props.handleDecrease()}> Previous </button>
                <button onClick={ () => props.handleIncrease()}> Next </button>

            
            </div>
        )
    }

export default Button