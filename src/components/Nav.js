import React, { ReactDOM, useState } from 'react';
import { Link } from 'react-router-dom'
import RouteSwitch from '../RouteSwitch';

const Nav = ({shopCart, cartDisplay, setCartDisplay, items, searchResult, setSearchResult, searchBoxResult, setSearchBoxResult}) => {

    function shopCartDisplayOnOff() {
        
        cartDisplay === 'none' ? setCartDisplay('flex') : setCartDisplay('none')
    } 

    async function searchGameDeal(input) {
        let searchGameDeal = await( await fetch(`https://www.cheapshark.com/api/1.0/games?title=${input}`)).json()
        setSearchBoxResult(searchGameDeal)
        
    }
    return(
        <nav>
            <h3>nav</h3>
             <ul className='nav-links' >
                <Link to='/' style={{textDecoration:'none'}}>
                    <li>Home</li>    
                </Link>
                <Link to='/deals' style={{textDecoration:'none'}}>
                    <li>Deals</li> 
                </Link>
                <Link to='/about' style={{textDecoration:'none'}}>
                    <li>About</li>    
                </Link>
{/* 
                <Link >
                    <li className='cartNav' onClick={() => shopCartDisplayOnOff()}>{shopCart.length} Cart</li>    
                </Link> */}

             </ul>
                <div className="searchContainer">
                    <div className="searchElem">
                        <input type="search" className="search" onChange={e => console.log(e.target.value)}></input>
                        <div onClick={ e => searchGameDeal(e.target.parentNode.children[0].value)} className="searchButton"></div>
                    </div>
                </div>
                <Link style={{textDecoration:'none'}}>
                    <div className='cartContainer'>
                        <div className='cartNav' onClick={() => shopCartDisplayOnOff()}>CART [{shopCart.length > 0 ? shopCart.length : "0"}]</div>    
                    </div>
                    
                </Link>
        </nav>
    )
}

export default Nav

