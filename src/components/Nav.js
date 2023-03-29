import React, { ReactDOM, useState } from 'react';
import { Link } from 'react-router-dom'
import RouteSwitch from '../RouteSwitch';
import SearchResult from './SearchResult'

const Nav = ({setCart, shopCart, cartDisplay, setCartDisplay, cartDisplayTrans, setCartDisplayTrans, items, searchResult, setSearchResult, searchBoxResult, setSearchBoxResult, isOpen, setIsOpen}) => {
    const [saveInput, setSaveInput] = useState("")

    function shopCartDisplayOnOff() {
        
        cartDisplay === 'hidden' ? setCartDisplay('visible') : setCartDisplay('hidden')
        cartDisplayTrans === 'translateX(100%)' ? setCartDisplayTrans('translateX(2%)') : setCartDisplayTrans('translateX(100%)')
        
    } 

    async function searchGameDeal(input) {
        
        if(input === "") return
        if(saveInput !== input) {
            let searchGameDeal = fetch(`https://www.cheapshark.com/api/1.0/games?title=${input}&limit=6`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                return res
            })
            .catch(res => {
                return res
            });
           let fetchResult = await(searchGameDeal)
          if(fetchResult.length === 0) {
            setSearchBoxResult(["No results"])
           
          } else {
            setSearchBoxResult(fetchResult)
            setSaveInput(input)
          }

        }

            !isOpen ? setIsOpen(true) : setIsOpen(true)
        
        
        
    }
    let reduceQuantity = shopCart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)
    return(
        
        <nav>
            <div className="store-logo"><span style={{fontSize:'medium', color:'rgb(183, 193, 202)'}}>stem</span></div>
             <ul className='nav-links' >
                <Link to='/game-store-page/' style={{textDecoration:'none'}}>
                    <li>HOME</li>    
                </Link>
                <Link to='/deals' style={{textDecoration:'none'}}>
                    <li>DEALS</li> 
                </Link>
                <Link to='/about' style={{textDecoration:'none'}}>
                    <li>ABOUT</li>    
                </Link>

             </ul>
                <div className="searchContainer">
                    <div className="searchElem">
                        <input type="search" className="search" placeholder="Find the best deals..." onKeyDown={e => e.key === "Enter" ? searchGameDeal(e.target.value) : () => null} style={{backgroundColor:"#14345e", color:"aliceblue"}}></input>
                        <div onClick={ e => searchGameDeal(e.target.parentNode.children[0].value)} className="searchButton"></div>
                        
                    </div>
                    <SearchResult setCart={setCart} shopCart={shopCart} searchBoxResult={searchBoxResult} setSearchBoxResult={setSearchBoxResult} isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
                <Link style={{textDecoration:'none'}}>
                    <div className='cartContainer'>
                    
                        <div className='cartNav'  onClick={() => shopCartDisplayOnOff()}>CART [{shopCart.length > 0 ? reduceQuantity : 0}]</div>    
                    </div>
                </Link>
        </nav>
    )
}

export default Nav

