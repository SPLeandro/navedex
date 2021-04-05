import React from 'react';

import './styles.css'

function Button ({onClick, width = "180px", height = "40px", type = "primaryButton", ...props}) {
    return (
        <button 
            style={{width:width, height: height}} 
            onClick={onClick} 
            className={type}
        >
            {props.children}    
        </button>
    )
}

export default Button;