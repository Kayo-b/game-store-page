import React, {useEffect, useState} from "react";
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./components/App";
import Nav from "./components/Nav";
import About from "./components/About";
import Deals from "./components/Deals";
import Info from "./components/Info"
import Cart from "./components/Cart"
import { ItemsList } from "./components/Deals";



const RouteSwitch = () => {
    const [shopCart, setCart] = useState([]);
    const [cartDisplay, setCartDisplay] = useState('none')
    const [test, setTest] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [message, setMessage] = useState('');
    const [items, setItems] = useState([])
    const [apiList, setApiList] = useState([
                    'https://www.cheapshark.com/api/1.0/deals?storeID=1', 
                    'https://www.cheapshark.com/api/1.0/deals?storeID=6'])

    async function fetchItems() {
        let allGamesArray = [];
        for(let x = 0; x < apiList.length; x++) {
            console.log("FETCHINGGGGGGGGGGG")
            const data = await(await fetch(apiList[x])).json();
            allGamesArray = allGamesArray.concat(data)
        }
        setItems(allGamesArray)
        const message = allGamesArray.length > 0 ? `${allGamesArray.length} deals found` : 'No deals found';
        setMessage(message);
    }

    useEffect(() => {
      async function handleSubmit(){
          await fetchItems();
        }
            
        handleSubmit()
   
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
    console.log(searchResult.length)
    return(
        <BrowserRouter>
            <Nav 
            shopCart={shopCart} 
            cartDisplay={cartDisplay} 
            setCartDisplay={setCartDisplay} 
            items={items} 
            searchResult={searchResult} 
            setSearchResult={setSearchResult}/>
            
            <Cart shopCart={shopCart} setCart={setCart} cartDisplay={cartDisplay} setCartDisplay={setCartDisplay}/>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About test={test} />} />
                <Route path="/deals/" element={<Deals 
                    setCart={setCart} 
                    shopCart={shopCart} 
                    items={items} 
                    message={message}
                    searchResult={searchResult} 
                    setSearchResult={setSearchResult}
                    />} />
                <Route path="/deals/:id" element={<Info />} />
                {/* <Route path="/cart" element={<Cart shopCart={shopCart}/>} /> */}
                {/* <Route path="/info" element={<Info />} /> */}
               
            </Routes>
        </BrowserRouter>
        
    )
}

export default RouteSwitch