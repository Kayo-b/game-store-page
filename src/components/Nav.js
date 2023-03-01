import React, { ReactDOM } from 'react';
import { Link } from 'react-router-dom'
import RouteSwitch from '../RouteSwitch';

const Nav = ({shopCart, cartDisplay, setCartDisplay}) => {
    const shopCartEle = document.getElementById("shopCart")
    
    function shopCartDisplayOnOff() {
        //shopCartEle.style.display === 'none' ? shopCartEle.style.display = 'flex' : shopCartEle.style.display = 'none'
        cartDisplay === 'none' ? setCartDisplay('flex') : setCartDisplay('none')
    } 
    return(
        <nav>
            <h3>nav</h3>
             <ul className="nav-links">
                <Link to='/'>
                    <li>Home</li>    
                </Link>
                <Link to='/deals'>
                    <li>Deals</li> 
                </Link>
                <Link to='/about'>
                    <li>About</li>    
                </Link>
{/* 
                <Link >
                    <li className='cartNav' onClick={() => shopCartDisplayOnOff()}>{shopCart.length} Cart</li>    
                </Link> */}

             </ul>

                <Link >
                    <div className='cartNav' onClick={() => shopCartDisplayOnOff()}>CART {shopCart.length > 0 ? shopCart.length : "0"}</div>    
                </Link>
        </nav>
    )
}

export default Nav