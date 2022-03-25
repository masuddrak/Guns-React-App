import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Gun from '../Gun/Gun';
import './Guns.css';

const Guns = () => {
    const [card,setCard]=useState([]);
    const [guns,setGuns]=useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res=>res.json())
        .then(data=>setGuns(data))
    },[])
    const addToCard=(gun)=>{
        const newCard=[...card,gun];
        setCard(newCard)
    }

    let price=0;
    let names;
        for(const product of card){
            price=price+parseInt(product.price)
        }
        const tex=parseFloat((price*5)/100);
        const grand=price+tex;
    return (
        <div className='container gun-container'>
            <div className="guns">
            {
                guns.map(gun=><Gun 
                    gun={gun}
                    key={gun.id}
                    addToCard={addToCard}
                ></Gun>)
            }
            </div>
            <div className="added-guns ">
                <h4>Added List</h4>
                <p>Added Guns:{card.length}</p>
                <p>Total Price:{price}</p>
                <p>Tex:{tex.toFixed(2)}</p>
                <p>Grand Total:{grand.toFixed(2)}</p>
                <p>{names}</p>
                {
                    card.map(gunDetails=><Details 
                        gunDetails={gunDetails}
                    ></Details>)
                }
            </div>
        </div>
    );
};

export default Guns;