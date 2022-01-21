import React from 'react';
import Selected from './Selected/Selected';
import CartPlayer from './cartPlayer/cartPlayer';
import './player.css';
import Data from '../../MOCK_DATA.json';

import { useState } from 'react';


const Player = () => {
    const [data,setData] = useState(Data);
    console.log(Data);  
    //create new state for cartPlayer
     const [cart,setCart] = useState([]);
    
    const handleAddPlayer =(product)=>{
        console.log("product added",product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className='player-container'>
            <div className='player-info'>
                <ul>
                    {
                        data.map(fun => <Selected handleAddPlayer={handleAddPlayer} product={fun}></Selected> )
                    }
                </ul>
            </div>
            <div className='cartPlayer-container'>
            {/* <Selected></Selected> */}
            <CartPlayer cart={cart}></CartPlayer>
            
            
            </div>
            
        </div>
    );
};

export default Player;