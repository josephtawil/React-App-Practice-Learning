import React from 'react';
import PropTypes from 'prop-types';
import "./Mathy.css";

const Mathy = (props) => {
    let result;

    switch (props.operator) {
        case "plus":
            result = props.num1 + props.num2;
            break;
        
        case "minus":
            result = props.num1 - props.num2;
            break;
    
        case "divide":
            result = props.num1 / props.num2;
            break;

        case "multiply":
            result = props.num1 * props.num2;
            break;
            
        default:
            break;
    }
    

    
    return(
        <h1 className={ result > 5 ? "redColor": "normalColor"}>{result}</h1>    
    );
};


Mathy.propTypes = {
    num1: PropTypes.number.isRequired,
    num2: PropTypes.number.isRequired,
    operator: PropTypes.string.isRequired,
}
export default Mathy;