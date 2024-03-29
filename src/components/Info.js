import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const Info = () => {
    const [item, setItem] = useState({})

    useEffect(() => {
        fetchItem();
    },[]) 

    
    const location = useLocation();

    const {name} = location.state

    const fetchItem = async() => {
        const fetchItem = await fetch(
            `https://api.rawg.io/api/games/${name}?key=`,
            {method:'GET'}
        );
        const item = await fetchItem.json()
        setItem(item)
    }   

    return( 
        <div className="info"> 
            <h3>{item.name_original}</h3>
        <div className="img-container">
            <img className="img" src={item.background_image} alt="backgroud1"></img>
            <img className="img_add" src={item.background_image_additional} alt="backgroud2"></img>
        </div>
        <p>{item.description_raw}</p></div>
    )
}

export default Info