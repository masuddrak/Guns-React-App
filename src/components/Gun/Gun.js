import React from 'react';
import './Gun.css';

const Gun = ({gun,addToCard}) => {
    // console.log(gun)
    const {img,price,name,capacity}=gun
    return (
        <div className='gun'>
            <div className='gun-info'>
               <img src={img} alt="" />
                <h4>{name}</h4>
                <h6>Price:${price}</h6>
                <p>Capacity:{capacity}</p>
                <button className='card-btn' onClick={()=>addToCard(gun)}>Add Card</button>
            </div>
        </div>
    );
};

export default Gun;