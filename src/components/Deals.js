import React, { useState, useEffect }from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';

const Shop = ({setCart, shopCart, message, items, searchResult, setSearchResult}) => {
    // const [message, setMessage] = useState('');
    // const [items, setItems] = useState([])
    // const [apiList, setApiList] = useState([
    //                 'https://www.cheapshark.com/api/1.0/deals?storeID=1', 
    //                 'https://www.cheapshark.com/api/1.0/deals?storeID=6'])

    // async function fetchItems() {
    //     let allGamesArray = [];
    //     for(let x = 0; x < apiList.length; x++) {
    //         console.log("FETCHINGGGGGGGGGGG")
    //         const data = await(await fetch(apiList[x])).json();
    //         allGamesArray = allGamesArray.concat(data)
    //     }


    //     setItems(allGamesArray)

    //     const message = allGamesArray.length > 0 ? `${allGamesArray.length} deals found` : 'No deals found';
    //     setMessage(message);

    // }

    // useEffect(() => {
    //   async function handleSubmit(){
    //       await fetchItems();
    //     }
    //     if(items.length === 0) {
    //         console.log("fetch?")
    //         handleSubmit()
    //     }
        
    // }, [])  

    function storeID(id) {
      switch(id){
          case '1':
              return "Steam"
          break;
          case '6':
              return "D2D"
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
                        console.log(newShopCart)
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

if(searchResult.length > 0) {
    return (
        <div className="shop">
            <div className="message">{message}</div>
            
            {searchResult?.map(item => { 
               let gameName = `${item.metacriticLink}`
              
                gameName = gameName.slice(9)
                return <div key={item.dealID + items.indexOf(item)} className="gameDiv">
                    <h5 className="game-title">{item.title}</h5>
                    <img className="thumbnail" src={item.thumb} alt="thumbnail"></img>
                    
                    <a href={`https://www.cheapshark.com/redirect?dealID={${item.dealID}}`}>
                        
                        <p className="store-link">Get it on {storeID(item.storeID)}</p>
                        
                    </a>
                    <Link to={`/deals/${gameName}`} state={{name: gameName}}>
                        <div className="info">Info</div>
                    </Link>
                    
                    <button onClick={() => AddToCart(item)}>Add to Cart</button>
        </div>
    })}
               
              </div>   
      );
}
  return (
    <div className="shop">
        <div className="message">{message}</div>
        
        {items?.map(item => { 
           let gameName = `${item.metacriticLink}`
          
            gameName = gameName.slice(9)
            return <div key={item.dealID + items.indexOf(item)} className="gameDiv">
                <h5 className="game-title">{item.title}</h5>
                <img className="thumbnail" src={item.thumb} alt="thumbnail"></img>
                
                <a href={`https://www.cheapshark.com/redirect?dealID={${item.dealID}}`}>
                    
                    <p className="store-link">Get it on {storeID(item.storeID)}</p>
                    
                </a>
                <Link to={`/deals/${gameName}`} state={{name: gameName}}>
                    <div className="info">Info</div>
                </Link>
                
                <button onClick={() => AddToCart(item)}>Add to Cart</button>
    </div>
})}
           
          </div>   
  );

}

// export function ItemsList({ gameName }) { 
//     return <Link to={`/shop/${gameName}`} state={{name: gameName}}>
//     <div className="details">Info</div>
//     </Link> }


export default Shop
