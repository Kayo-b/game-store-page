import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({items, searchResult, setSearchResult, shopCart, cartDisplay, setCartDisplay, setGenresArray, genresArray}) => {
    const [genreNotFound, setGenreNotFound] = useState(false)
   
    let tempArr = [];

    function removeFromGenreArray(genre) {
        let tempArr = genresArray;
        genre.parentNode.parentNode.style.backgroundColor = "rgba(203, 203, 203, 0.0)"
        tempArr.map(item => {
            if(item === genre.value){
                tempArr.splice(tempArr.indexOf(item), 1)
            }
        })
        if(tempArr.length === 0) {
            setSearchResult(items)
        } else {
            setGenresArray(tempArr)
        
            SetGenreFilter()
        }
    }

    function checkForDouble(newItem) {
        let result = false;
        tempArr.map(item => {
            if(newItem.dealID === item.dealID){
                result = true;
        }})
        return result
    }

    function SetGenreFilter(genre) {
       
        let tempGenresArray = genresArray
        
        if(genre !== undefined){
            tempGenresArray = tempGenresArray.concat(genre.value)
            genre.parentNode.parentNode.style.backgroundColor = "rgba(203, 203, 203, 0.478)"
        }   
        items.map((item) => {
            let count = 0;

            if(item.genres) {
                if(tempGenresArray.length === 1) {
                    for(let x = 0; x < item.genres.length; x++) {
                        for(let k = 0; k < tempGenresArray.length; k++) {
                            if(item.genres[x].description === tempGenresArray[k] && checkForDouble(item) === false) {
                                tempArr = tempArr.concat(item);
                            }   
                        }        
                    }
                } 
                else {
                    for(let x = 0; x < item.genres.length; x++) {
                        for(let k = 0; k < tempGenresArray.length; k++) {
                            if(tempGenresArray[k] === item.genres[x].description && checkForDouble(item) === false) {
                                count += 1;
                            }
                        }
                    }
                    if(count === tempGenresArray.length) {
                        tempArr = tempArr.concat(item);
                    }
                }
                

            }
        })

        setGenresArray(tempGenresArray)
        setSearchResult(tempArr)
    }
    
    function searchOnChange(input) {

        if(input.length > 0) {

            items.map(item => {
              
                if(item.title.toLowerCase().includes(input.toLowerCase()) && checkForDouble(item) === false) {
                    
                    tempArr = tempArr.concat(item)
                }
            })
        }
        setSearchResult(tempArr)
    }

    return(
    
    <div className="sidebarContainer">
        
        <div className="categories">
        <div className="searchContainer">
                    <div className="searchElem">
                        <input type="search" style={{backgroundColor:"aliceblue"}} className="search" placeholder='Filter by name' onChange={e => searchOnChange(e.target.value)}></input>
                        <div onClick={ e => searchOnChange(e.target.parentNode.children[0].value)} className="searchButton"></div>
                    </div>
                </div>
        <span style={{fontSize:"small", marginLeft:"5px"}}>Filters</span>
        <div className="labels-container">
        <div className="labels"> 
        <label >
            <input className="sidebar-check" type="checkbox" onChange={(e) => e.target.checked ? SetGenreFilter(e.target) : removeFromGenreArray(e.target)} value="Free to Play"></input>
            Free to Play
        </label>
        </div>    

        <div className="labels"> 
        <label>
            <input type="checkbox" className="sidebar-check" onChange={(e) => e.target.checked ? SetGenreFilter(e.target) : removeFromGenreArray(e.target)} value="Action"></input>
            Action
        </label>
        </div>  

        <div className="labels"> 
        <label>
            <input type="checkbox" className="sidebar-check" onChange={(e) => e.target.checked ? SetGenreFilter(e.target) : removeFromGenreArray(e.target)} value="Adventure"></input>
            Adventure
        </label>
        </div>  

        <div className="labels"> 
        <label>
            <input type="checkbox" className="sidebar-check" onChange={(e) => e.target.checked ? SetGenreFilter(e.target) : removeFromGenreArray(e.target)} value="Casual"></input>
            Casual
        </label>    
        </div>  

        <div className="labels"> 
        <label>
            <input type="checkbox" className="sidebar-check" onChange={(e) => e.target.checked ? SetGenreFilter(e.target) : removeFromGenreArray(e.target)} value="Indie"></input>
            Indie
        </label>   
        </div>  

        <div className="labels"> 
        <label>
            <input type="checkbox" className="sidebar-check" onChange={(e) => e.target.checked ? SetGenreFilter(e.target) : removeFromGenreArray(e.target)} value="RPG"></input>
            RPG
        </label>
        </div>  

        <div className="labels"> 
        <label>
            <input type="checkbox" className="sidebar-check" onChange={(e) => e.target.checked ? SetGenreFilter(e.target) : removeFromGenreArray(e.target)} value="Racing"></input>
            Racing
        </label>
        </div>  
      
        <div className="labels"> 
        <label>
            <input type="checkbox" className="sidebar-check" onChange={(e) => e.target.checked ? SetGenreFilter(e.target) : removeFromGenreArray(e.target)} value="Simulation"></input>
            Simulation
        </label>   
        </div>  

        <div className="labels"> 
        <label>
            <input type="checkbox" className="sidebar-check" onChange={(e) => e.target.checked ? SetGenreFilter(e.target) : removeFromGenreArray(e.target)} value="Sports"></input>
            Sports
        </label>  
        </div>     

        <div className="labels"> 
        <label>
            <input type="checkbox" className="sidebar-check"onChange={(e) => e.target.checked ? SetGenreFilter(e.target) : removeFromGenreArray(e.target)} value="Strategy"></input>
            Strategy              
        </label>
        </div>  
        </div>
            <div className="sidebar-shader" style={{display: cartDisplay}}></div>

        </div>


    </div>
    
    )
}

export default Sidebar