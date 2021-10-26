import React from "react";
import PropTypes from "prop-types";


function Food({name, address, rating}) {
    return (
        <div>
            <h2>I like {name}</h2>
            <h4>{rating}/5.0</h4>
            <img src={address} art={name} />
        </div>
    )
};
Food.propTypes={
    name: PropTypes.string.isRequired, // string(required)
    address: PropTypes.string.isRequired, // string(required)
    rating: PropTypes.number, // number or undefined
};