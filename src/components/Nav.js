import React from 'react';
import { Link } from 'react-router-dom'

const Nav = ({shopCart}) => {
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

                <Link to='/cart'>
                    <li>{shopCart.length} Cart</li>    
                </Link>

             </ul>
        </nav>
    )
}

export default Nav