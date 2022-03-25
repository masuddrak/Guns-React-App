import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';
import './Guns.css';

const Guns = () => {
    const [guns,setGuns]=useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res=>res.json())
        .then(data=>setGuns(data))
    },[])
    return (
        <div className='container gun-container'>
            <div className="guns">
            {
                guns.map(gun=><Gun 
                    gun={gun}
                    key={gun.id}
                ></Gun>)
            }
            </div>
            <div className="added-guns ">
                <h1>Added Guns List</h1>
            </div>
        </div>
    );
};

export default Guns;