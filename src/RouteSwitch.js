import React, {useEffect, useState} from "react";
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./components/App";
import Nav from "./components/Nav";
import About from "./components/About";
import Deals from "./components/Deals";
import Info from "./components/Info";
import Cart from "./components/Cart";
import { randomArray } from "./auxFunction";
import Sidebar from "./components/Sidebar";
import SearchResult from "./components/SearchResult"
import { ItemsList } from "./components/Deals";



const RouteSwitch = () => {
    const [shopCart, setCart] = useState([]);
    const [cartDisplay, setCartDisplay] = useState('hidden')
    const [cartDisplayTrans, setCartDisplayTrans] = useState('translateX(100%)')
    const [test, setTest] = useState([])
    const [rerender, setRerender] = useState(false)
    const [searchResult, setSearchResult] = useState([])
    const [message, setMessage] = useState('');
    const [items, setItems] = useState([])
    const [searchBoxResult, setSearchBoxResult] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [genresArray, setGenresArray] = useState([])
    const [loading, setLoading] = useState("")
    const [apiList, setApiList] = useState([
                    'https://www.cheapshark.com/api/1.0/deals?storeID=1&pageNumber=0',
                    'https://www.cheapshark.com/api/1.0/deals?storeID=7&pageNumber=0'])

    async function fetchItems() {
        let allGamesArray = [];
        for(let x = 0; x < apiList.length; x++) {
            console.log("FETCHINGGGGGGGGGGG")
            const data = await(await fetch(apiList[x])).json();
            setItems(data)
            console.log(data)
            const updatedData = await Promise.all(
                data.map(async item => { 
                    if(item.steamAppID != null) {
                        let screenShotsArray = [];
                        try {
                            let steamApiFetch = await fetch(
                              `https://salty-citadel-78352.herokuapp.com/https://store.steampowered.com/api/appdetails?appids=${item.steamAppID}`
                            );
                            if (!steamApiFetch.ok) {
                              throw new Error(`Fetch failed with status ${steamApiFetch.status}`);
                            }
                        let fetchResult = await steamApiFetch.json()
                        item.genres = fetchResult[item.steamAppID].data.genres;
                        item.short_description = fetchResult[item.steamAppID].data.short_description;
                        for(let i = 0; i < 4; i++) {
                            let random = randomArray([], fetchResult[item.steamAppID]
                                .data.screenshots.length
                                );
                            screenShotsArray.push(fetchResult[item.steamAppID].data.screenshots[random[i]]
                                .path_thumbnail
                                );
                        }
                        item.screenshots = screenShotsArray;
                    } catch(error) { 
                        console.log(error)
                    }
                    
                    }
                    return item
                
        })
        );
            console.log(updatedData)
            allGamesArray = allGamesArray.concat(updatedData)
            
        }   
        
        setItems(allGamesArray);
        const message = items.length > 0 ? `${items.length} deals found` : 'No deals found';
        setMessage(message);
    }
    useEffect(() => {

     fetchItems();

        const closeSearchBox = e => {
            if(e.target.parentNode.children[0].value !== "") {
                if(e.target.parentNode.className !== "searchElem") {
                    setIsOpen(false)
                }      
            }   
        }

        const closeCart = e => {
            if(e.target.className !== "cartNav" && e.target.parentNode.className !== "shopCart" && e.target.parentNode.className !== "cartList" && e.target.parentNode.className !== "button-list") {
                if(e.target.parentNode.className !== "shopCartContainer") {
                    setCartDisplay("hidden")
                    setCartDisplayTrans("translateX(100%)")
                }
            }
        }

        function eventListeners() {
            document.body.addEventListener('click', closeSearchBox)
            document.body.addEventListener('click', closeCart)
        }
        eventListeners()

        return() => eventListeners

    }, [])  


    return(
        <BrowserRouter>
            <Nav 
            shopCart={shopCart} 
            setCart={setCart}
            cartDisplay={cartDisplay} 
            setCartDisplay={setCartDisplay} 
            cartDisplayTrans={cartDisplayTrans} 
            setCartDisplayTrans={setCartDisplayTrans} 
            items={items} 
            searchResult={searchResult} 
            setSearchResult={setSearchResult}
            searchBoxResult={searchBoxResult}
            setSearchBoxResult={setSearchBoxResult}
            isOpen={isOpen}
            setIsOpen={setIsOpen}    
            />
         
            <Cart shopCart={shopCart} setCart={setCart} cartDisplay={cartDisplay} setCartDisplay={setCartDisplay} setCartDisplayTrans={setCartDisplayTrans} cartDisplayTrans={cartDisplayTrans} />
            <Routes>
                <Route path="/" element={<App items={items} setRerender={setRerender} loading={loading} setLoading={setLoading}/>} />
                <Route path="/about" element={<About test={test} />} />
                <Route path="/deals/" element={
                    <Deals 
                    setCart={setCart} 
                    shopCart={shopCart} 
                    items={items} 
                    message={message}
                    searchResult={searchResult} 
                    setSearchResult={setSearchResult}
                    cartDisplay={cartDisplay}
                    cartDisplayTrans={cartDisplayTrans}
                    setRerender={setRerender}
                    />} />
                <Route path="/deals/:id" element={<Info />} />
               
            </Routes>
            
        </BrowserRouter>
        
    )
}

export default RouteSwitch