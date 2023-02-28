import React, {useState} from "react";
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
    
    return(
        <BrowserRouter>
            <Nav shopCart={shopCart} cartDisplay={cartDisplay} setCartDisplay={setCartDisplay}/>
            <Cart  shopCart={shopCart} setCart={setCart} cartDisplay={cartDisplay}/>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/deals/" element={<Deals setCart={setCart} shopCart={shopCart}/>} />
                <Route path="/deals/:id" element={<Info />} />
                {/* <Route path="/cart" element={<Cart shopCart={shopCart}/>} /> */}
                {/* <Route path="/info" element={<Info />} /> */}
               
            </Routes>
        </BrowserRouter>
        
    )
}

export default RouteSwitch