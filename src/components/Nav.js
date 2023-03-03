import React, { ReactDOM, useState } from 'react';
import { Link } from 'react-router-dom'
import RouteSwitch from '../RouteSwitch';

const Nav = ({shopCart, cartDisplay, setCartDisplay, items, searchResult, setSearchResult}) => {
    const [prevInputValue, setPrevInputValue] = useState("")
    // const [tempArr, setTempArr] = useState([])
    const shopCartEle = document.getElementById("shopCart")
    let tempArr = []
    function shopCartDisplayOnOff() {
        //shopCartEle.style.display === 'none' ? shopCartEle.style.display = 'flex' : shopCartEle.style.display = 'none'
        cartDisplay === 'none' ? setCartDisplay('flex') : setCartDisplay('none')
    } 

    function checkForDouble(newItem) {
        let result = false;
        tempArr.map(item => {if(newItem.dealID === item.dealID){
            result = true;
        }})
        return result
    }
    
    function searchOnChange(input) {

        if(input.length > 0) {

            items.map(item => {
                console.log(checkForDouble(item))
                if(item.title.toLowerCase().includes(input.toLowerCase()) && checkForDouble(item) === false) {
                    
                    tempArr = tempArr.concat(item)
                    // let temp = searchResult
                    
                    // setSearchResult([...searchResult, item])
                }
            })
        }
        setSearchResult(tempArr)
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
                        <input type="search" className="search" onChange={e => searchOnChange(e.target.value)}></input>
                        <div onClick={ e => searchOnChange(e.target.parentNode.children[0].value)} className="searchButton"></div>
                    </div>
                </div>
                <Link style={{textDecoration:'none'}}>
                    <div className='cartContainer'>
                        <div className='cartNav' onClick={() => shopCartDisplayOnOff()}>CART ({shopCart.length > 0 ? shopCart.length : "0"})</div>    
                    </div>
                    
                </Link>
        </nav>
    )
}

export default Nav

