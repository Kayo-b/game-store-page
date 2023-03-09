import React, {useEffect, useState} from "react";
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./components/App";
import Nav from "./components/Nav";
import About from "./components/About";
import Deals from "./components/Deals";
import Info from "./components/Info";
import Cart from "./components/Cart";
import Sidebar from "./components/Sidebar";
import SearchResult from "./components/SearchResult"
import { ItemsList } from "./components/Deals";



const RouteSwitch = () => {
    const [shopCart, setCart] = useState([]);
    const [cartDisplay, setCartDisplay] = useState('none')
    const [test, setTest] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [message, setMessage] = useState('');
    const [items, setItems] = useState([])
    const [searchBoxResult, setSearchBoxResult] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [genresArray, setGenresArray] = useState([])
    const [apiList, setApiList] = useState([
                    'https://www.cheapshark.com/api/1.0/deals?storeID=1&pageNumber=0&sortBy=metacritic',
                    'https://www.cheapshark.com/api/1.0/deals?storeID=7&pageNumber=0&sortBy=metacritic'])

    async function fetchItems() {
        let allGamesArray = [];
        for(let x = 0; x < apiList.length; x++) {
            console.log("FETCHINGGGGGGGGGGG")
            const data = await(await fetch(apiList[x])).json();
            data.map(async item => { 
                if(item.steamAppID != null) {
                    let steamApiFetch = await(await fetch(`https://salty-citadel-78352.herokuapp.com/https://store.steampowered.com/api/appdetails?appids=${item.steamAppID}`)).json()
                    item.genres = steamApiFetch[item.steamAppID].data.genres
                }
               
        })
            allGamesArray = allGamesArray.concat(data)
        }   
       //const test =  await (await fetch("https://salty-citadel-78352.herokuapp.com/https://store.steampowered.com/api/appdetails?appids=440")).json();
        
       // /IStoreService/GetAppList/v1/?key=98EAB273BB02586DBC4DDAC476EB3EDD&format=json
   // console.log(test)
        setItems(allGamesArray)
        const message = allGamesArray.length > 0 ? `${allGamesArray.length} deals found` : 'No deals found';
        setMessage(message);
    }

    useEffect(() => {
      async function handleSubmit(){
          await fetchItems();
        }

        handleSubmit()

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
                    setCartDisplay("none")
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

    // useEffect(() => {
    //     const dataFetch = async() => {
    //         const data = await fetch('https://jsonplaceholder.typicode.com/todos/3')
    //         .then(response => response.json())
    //         .then(json => json)

    //         setTest([...test, data])
    //     }
        
    //     dataFetch()
    // },[])

    return(
        <BrowserRouter>
            <Nav 
            shopCart={shopCart} 
            cartDisplay={cartDisplay} 
            setCartDisplay={setCartDisplay} 
            items={items} 
            searchResult={searchResult} 
            setSearchResult={setSearchResult}
            searchBoxResult={searchBoxResult}
            setSearchBoxResult={setSearchBoxResult}
            isOpen={isOpen}
            setIsOpen={setIsOpen}    
            />
            
            <Cart shopCart={shopCart} setCart={setCart} cartDisplay={cartDisplay} setCartDisplay={setCartDisplay}/>
            {/* <SearchResult searchBoxResult={searchBoxResult} setSearchBoxResult={setSearchBoxResult} isOpen={isOpen} setIsOpen={setIsOpen}/> */}
            <Routes>
                <Route path="/" element={<App />} />
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
                    />} />
                <Route path="/deals/:id" element={<Info />} />
                {/* <Route path="/cart" element={<Cart shopCart={shopCart}/>} /> */}
                {/* <Route path="/info" element={<Info />} /> */}
               
            </Routes>
            
        </BrowserRouter>
        
    )
}

export default RouteSwitch