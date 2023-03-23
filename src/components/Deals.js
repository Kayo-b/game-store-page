import React, { useState, useEffect }from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'
import Cart from './Cart';

const Shop = ({setCart, shopCart, message, items, searchResult, setSearchResult, cartDisplay, setRerender}) => {

    const[genresArray, setGenresArray] = useState([])
    const[carouselIndex, setCarouselIndex] = useState(0)

    const message2 = searchResult.length > 0 ? `${searchResult.length} deals found` : 'No deals found';
    let intID;
    let counter = 0;

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

    function changeCartColor(e) {
        let cartNav = document.getElementsByClassName("cartNav")[0]
        cartNav.style.color = "green"
        setTimeout(() => cartNav.style.color = "aliceblue", 220)
    }

    function AddToCart(item, e) {
        let repeatedItem = false
        if(shopCart.length > 0) {
            for(let x = 0; x < shopCart.length; x++) {
                    if(shopCart[x].dealID === item.dealID) {
                        
                        let newShopCart = shopCart;
                        newShopCart[x].quantity += 1;
                        setCart([...shopCart]);
                        changeCartColor(e)
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
        changeCartColor(e)
        }

    }

    // function screenshotCarousel() {
    // console.log("carousel Start")
    
    //     if(!intID) {    
      
    //         intID = setInterval( () => {
    //             if(counter < 2) {
    //                 counter += 1;
    //                 setCarouselIndex(counter);
    //             } else {
    //                 clearInterval(intID);
    //                 intID = null;
    //                 counter = 0;
    //                 setCarouselIndex(0); 
    //             } 
    //         }, 2000)    
    //     }   
        
    // }

    // function mouseOverTimer(target) {
    //     console.log("mouseOver")
  
    //         const timer = setTimeout(() => screenshotCarousel(), 2000)
    //         console.log(target)
    //         target.onmouseout = () => clearTimeout(timer)
    // }
    
    // function screenshotCarousel() {
        
    //     let slideFunction = () => {
            
    //         console.log(counter)
    //         var timeout = setTimeout(() => {

    //             if(counter >= 2) {

    //                 counter = 0
    //                 setCarouselIndex(counter)
                    
                    
    //             } else {

    //                 counter += 1;
    //                 setCarouselIndex(counter)
    //                 slideFunction();
    //             }
    //             return () => clearTimeout(timeout)
    //         }, 1000)


    //     }

    //     slideFunction()
        

    // }

    useEffect(() => {
        setTimeout(() => setRerender(true), 1000)
      },[])
      

if(searchResult.length === 0 && genresArray.length > 0) {

    return (
       
        <div className="mainDealsContainer">

        <div className="sidebar-container" >
            <Sidebar items={items} searchResult={searchResult} setSearchResult={setSearchResult} genresArray={genresArray} setGenresArray={setGenresArray} cartDisplay={cartDisplay}/>
        </div>



        <div className="shop-container"> 
            <h5 className="message">{message2}</h5>
        <div className="shop" style={{alignItems: "start"}}>
    
    
        
        {searchResult?.map(item => { 
            let screenshot = item.screenshots !== undefined ? item.screenshots : "Unavailable"
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
                    <div className="tooltip-div" >
                        <span className="tooltip" style={{fontSize:"small"}}>
                        <div className="carousel">
                        <div className="slide-track">
                            <img className="slide" style={{width:"230px"}} alt={`${screenshot}`} src={`${screenshot[0]}`}></img>
                            <img className="slide" style={{width:"230px"}} alt={`${screenshot}`} src={`${screenshot[1]}`}></img>
                            <img className="slide" style={{width:"230px"}} alt={`${screenshot}`} src={`${screenshot[2]}`}></img>
                            <img className="slide" style={{width:"230px"}} alt={`${screenshot}`} src={`${screenshot[3]}`}></img>
                        </div>    
                        </div>
                            <div className="description">{item.short_description}</div>                        </span> 
                    </div>
                    <button onClick={(e) => AddToCart(item, e)} className="add-to-cart-btn">Add to Cart</button>
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
            <Sidebar items={items} searchResult={searchResult} setSearchResult={setSearchResult} genresArray={genresArray} setGenresArray={setGenresArray} cartDisplay={cartDisplay}/>
        </div>
        

        <div className="shop-container"> 
            <h5 className="message">{message2}</h5>
        <div className="shop">
    
    
        
        {searchResult?.map(item => { 
            let screenshot = item.screenshots !== undefined ? item.screenshots : "Unavailable"  
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
                    <div className="tooltip-div" >
                        <span className="tooltip" style={{fontSize:"small"}}>
                        <div className="carousel">
                        <div className="slide-track">
                            <img className="slide" style={{width:"230px"}} alt={`${screenshot}`} src={`${screenshot[0]}`}></img>
                            <img className="slide" style={{width:"230px"}} alt={`${screenshot}`} src={`${screenshot[1]}`}></img>
                            <img className="slide" style={{width:"230px"}} alt={`${screenshot}`} src={`${screenshot[2]}`}></img>
                            <img className="slide" style={{width:"230px"}} alt={`${screenshot}`} src={`${screenshot[3]}`}></img>
                        </div>    
                        </div>
                            <div className="description">{item.short_description}</div>                        </span> 
                    </div>
                    <button onClick={(e) => AddToCart(item, e)}  className="add-to-cart-btn">Add to Cart</button>
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
            let screenshot = item.screenshots !== undefined ? item.screenshots : "Unavailable"
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
                    <div className="tooltip-div" >
                        <span className="tooltip" style={{fontSize:"small"}}>
                        <div className="carousel">
                        <div className="slide-track">
                            <img className="slide" style={{width:"230px"}} alt={`${screenshot}`} src={`${screenshot[0]}`}></img>
                            <img className="slide" style={{width:"230px"}} alt={`${screenshot}`} src={`${screenshot[1]}`}></img>
                            <img className="slide" style={{width:"230px"}} alt={`${screenshot}`} src={`${screenshot[2]}`}></img>
                            <img className="slide" style={{width:"230px"}} alt={`${screenshot}`} src={`${screenshot[3]}`}></img>
                        </div>    
                        </div>
                            <div className="description">{item.short_description}</div>
                        </span> 
                    </div>
                    <button onClick={(e) => AddToCart(item, e)} className="add-to-cart-btn">Add to Cart</button>
                    </div>
                   
            })
        }
           
          </div>  
          </div>   
    </div>
  )

  

}

export default Shop
