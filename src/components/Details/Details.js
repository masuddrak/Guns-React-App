import React from 'react';
import './Details.css'

const Details = ({gunDetails}) => {
    console.log(gunDetails)
    const {name,price}=gunDetails


    return (
        <div className='details'>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
};

export default Details;