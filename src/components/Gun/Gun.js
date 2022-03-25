import React from 'react';
import Popup from '../Popup/Popup';
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
               
                <div className='card-btn'>
                <button className='card-btns' onClick={()=>addToCard(gun)}>Add Card</button>
                <Popup gun={gun}></Popup>
                </div>
             
            </div>
        </div>
    );
};

export default Gun;