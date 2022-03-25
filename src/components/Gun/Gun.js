import React from 'react';
import './Gun.css';

const Gun = ({gun}) => {
    console.log(gun)
    const {img,price,name,capacity}=gun
    return (
        <div className='gun'>
            <img src={img} alt="" />
        </div>
    );
};

export default Gun;