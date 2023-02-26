import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Settings from "./Settings";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import Info from "./Info"
import { ItemsList } from "./Shop";


const RouteSwitch = () => {
    return(
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop/" element={<Shop />} />
                <Route path="/shop/:id" element={<Info />} />
                {/* <Route path="/info" element={<Info />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch