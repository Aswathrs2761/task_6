import React from 'react';
import { Link } from "react-router-dom";

const Nav = ({cart}) => {

    return (
        <div className='products'>
            <div className='name'>
             <Link to = "/"> <h1> Cartify </h1> </Link>
            </div>
            <div className='cart'>
                <Link to = "Cart">  <h1> Cart :{cart.length} </h1> </Link>
            </div>
        </div>
    );
};

export default Nav;