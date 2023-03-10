import React, { useState, useEffect }from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'
import Cart from './Cart';

const Shop = ({setCart, shopCart, message, items, searchResult, setSearchResult, cartDisplay}) => {

    const[genresArray, setGenresArray] = useState([])
    const message2 = searchResult.length > 0 ? `${searchResult.length} deals found` : 'No deals found';

    function storeID(id) {
      switch(id){
          case '1':
              return "Steam"
          break;
          case '6':
              return "D2D"
          break;
          case '7':
            return "GoG"
            break;
          default:
              return "?"  

      }
    }

    function AddToCart(item) {
        let repeatedItem = false
        if(shopCart.length > 0) {
            for(let x = 0; x < shopCart.length; x++) {
                    if(shopCart[x].dealID === item.dealID) {
                        
                        let newShopCart = shopCart;
                        newShopCart[x].quantity += 1;
                        setCart([...shopCart]);
                        repeatedItem = true;
                    }
            }
        }

        if(repeatedItem === false) {
            let dealObj = {
                title: item.title,
                salePrice: item.salePrice ,
                savings: item.savings,
                normalPrice: item.normalPrice,
                dealID: item.dealID,
                quantity: 1
            }

        setCart([...shopCart, dealObj])
        }

    }

if(searchResult.length === 0 && genresArray.length > 0) {

    return (

        <div className="mainDealsContainer">
        <div className="sidebar-shader" style={{backgroudColor: "rgb( 255, 255, 255, 0.500)"}}> 
        <div className="sidebar-container" >
            <Sidebar items={items} searchResult={searchResult} setSearchResult={setSearchResult} genresArray={genresArray} setGenresArray={setGenresArray}/>
        </div>
        </div>


        <div className="shop-container"> 
            <h5 className="message">{message2}</h5>
        <div className="shop" style={{alignItems: "start"}}>
    
    
        
        {searchResult?.map(item => { 
          
           let gameName = `${item.metacriticLink}`
          
            gameName = gameName.slice(9)
            return <div className="game-container">
                    
                    <a href={`https://www.cheapshark.com/redirect?dealID={${item.dealID}}`} key={item.dealID + items.indexOf(item)} className="gameDiv">
                    <span className="tooltip">Tool Tip!!!</span>
                        <span className="game-title-container"><h5 className="game-title">{item.title}</h5></span>
                        <img className="thumbnail" src={item.thumb} alt="thumbnail"></img>
                        <p className="store-link" style={{color: "white"}}><span className="sale-price">$ {item.salePrice}</span><span  className={`${storeID(item.storeID)}`}></span></p>
{/*                     
                        <a href={`https://www.cheapshark.com/redirect?dealID={${item.dealID}}`}>

                            <p className="store-link" style={{color: "white"}}>Get it on {storeID(item.storeID)}</p>

                        </a> */}
                        {/* <Link to={`/deals/${gameName}`} state={{name: gameName}}>
                            <div className="info" style={{color: "white"}}>+Info</div>
                        </Link> */}

                        
                    </a>
                    <button onClick={() => AddToCart(item)} className="add-to-cart-btn">Add to Cart</button>
                    </div>
                   
            })
        }
           
          </div>  
          </div>   
    </div>
      )
}
if(searchResult.length > 0) {
    return (

        <div className="mainDealsContainer">
        <div className="sidebar-container">
            <Sidebar items={items} searchResult={searchResult} setSearchResult={setSearchResult} genresArray={genresArray} setGenresArray={setGenresArray}/>
        </div>

        <div className="shop-container"> 
            <h5 className="message">{message2}</h5>
        <div className="shop">
    
    
        
        {searchResult?.map(item => { 
          
           let gameName = `${item.metacriticLink}`
          
            gameName = gameName.slice(9)
            return <div className="game-container">
                    <a href={`https://www.cheapshark.com/redirect?dealID={${item.dealID}}`} key={item.dealID + items.indexOf(item)} className="gameDiv">
                        <span className="game-title-container"><h5 className="game-title">{item.title}</h5></span>
                        <img className="thumbnail" src={item.thumb} alt="thumbnail"></img>
                        <p className="store-link" style={{color: "white"}}><span className="sale-price">$ {item.salePrice}</span><span  className={`${storeID(item.storeID)}`}></span></p>
{/*                     
                        <a href={`https://www.cheapshark.com/redirect?dealID={${item.dealID}}`}>

                            <p className="store-link" style={{color: "white"}}>Get it on {storeID(item.storeID)}</p>

                        </a> */}
                        {/* <Link to={`/deals/${gameName}`} state={{name: gameName}}>
                            <div className="info" style={{color: "white"}}>+Info</div>
                        </Link> */}

                        
                    </a>
                    <button onClick={() => AddToCart(item)} className="add-to-cart-btn">Add to Cart</button>
                    </div>
                   
            })
        }
           
          </div>  
          </div>   
    </div>
      )
}
  return (
    
    <div className="mainDealsContainer">

        <div className="sidebar-container">
            <Sidebar items={items} searchResult={searchResult} setSearchResult={setSearchResult} genresArray={genresArray} setGenresArray={setGenresArray} cartDisplay={cartDisplay}/>
        </div>

        <div className="shop-container"> 
            <h5 className="message">{message}</h5>
        <div className="shop">
    
    
        
        {items?.map(item => { 
          
           let gameName = `${item.metacriticLink}`
          
            gameName = gameName.slice(9)
            return <div className="game-container">
            
                    <a href={`https://www.cheapshark.com/redirect?dealID={${item.dealID}}`} key={item.dealID + items.indexOf(item)} className="gameDiv">
                    
                        <span className="game-title-container"><h5 className="game-title">{item.title}</h5></span>
                        <img className="thumbnail" src={item.thumb} alt="thumbnail"></img>
                        <p className="store-link" style={{color: "white"}}><span className="sale-price">$ {item.salePrice}</span><span  className={`${storeID(item.storeID)}`}></span></p>
{/*                     
                        <a href={`https://www.cheapshark.com/redirect?dealID={${item.dealID}}`}>

                            <p className="store-link" style={{color: "white"}}>Get it on {storeID(item.storeID)}</p>

                        </a> */}
                        {/* <Link to={`/deals/${gameName}`} state={{name: gameName}}>
                            <div className="info" style={{color: "white"}}>+Info</div>
                        </Link> */}

                        
                    </a>
                    <div className="tooltip-div"> <span className="tooltip" style={{fontSize:"small"}}><img style={{width:"180px", margin:"-2px"}} alt="tooltipScreenshots" src={`${item.screenshots}`}></img>{item.short_description}</span> </div>
                    <button onClick={() => AddToCart(item)} className="add-to-cart-btn">Add to Cart</button>
                    </div>
                   
            })
        }
           
          </div>  
          </div>   
    </div>
  )

  

}

// export function ItemsList({ gameName }) { 
//     return <Link to={`/shop/${gameName}`} state={{name: gameName}}>
//     <div className="details">Info</div>
//     </Link> }


export default Shop
