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
        for(const product of card){
            price=price+parseInt(product.price)
        }
        const tex=parseFloat((price*5)/100);
        const grand=price+tex;
    return (
        <div className='container gun-container my-5'>
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
                <h4>Added Summary</h4>
                <hr />
                <p>Total Price:{price}</p>
                <hr />
                <p>Tex:{tex.toFixed(2)}</p>
                <hr />
                <p>Grand Total:{grand.toFixed(2)}</p>
                <hr />
                <p>Adde Gun List:{card.length}</p>
                <hr />
                {
                    card.map(gunDetails=><Details 
                        gunDetails={gunDetails}
                    ></Details>)
                }
                <hr />
                <div className="grand">
                <p>Grand Total</p>
                <p>{grand.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Guns;