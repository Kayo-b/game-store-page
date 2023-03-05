import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({items, searchResult, setSearchResult, shopCart, cartDisplay, setCartDisplay}) => {
    
    const [genresArray, setGenresArray] = useState([])
    let tempArr = [];

    function removeFromGenreArray(genre) {
        let tempArr = genresArray;

        tempArr.map(item => {
            if(item === genre){
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
        if(genre !== undefined) tempGenresArray = tempGenresArray.concat(genre)

        
        
        items.map(item => {
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
                } else {
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
    
   

    // function checkForDouble(newItem) {
    //     let result = false;
    //     tempArr.map(item => {if(newItem.dealID === item.dealID) {
    //         result = true;
    //     }})
    //     return result
    // }
    
    function searchOnChange(input) {

        if(input.length > 0) {

            items.map(item => {
              
                if(item.title.toLowerCase().includes(input.toLowerCase()) && checkForDouble(item) === false) {
                    
                    tempArr = tempArr.concat(item)
                    // let temp = searchResult
                    
                    // setSearchResult([...searchResult, item])
                }
            })
        }
        setSearchResult(tempArr)
    }
    return(<div className="sidebarContainer">

        <div className="categories">

        <h5>Search</h5>
        <div className="searchContainer">
                    <div className="searchElem">
                        <input type="search" className="search" onChange={e => searchOnChange(e.target.value)}></input>
                        <div onClick={ e => searchOnChange(e.target.parentNode.children[0].value)} className="searchButton"></div>
                    </div>
                </div>
        <h5>Filter By Genre</h5>
        <label>
            <input type="checkbox" onChange={(e) => e.target.checked ? SetGenreFilter(e.target.value) : removeFromGenreArray(e.target.value)} value="Free to Play"></input>
            Free to Play
        </label>

        <label>
            <input type="checkbox" onChange={(e) => e.target.checked ? SetGenreFilter(e.target.value) : removeFromGenreArray(e.target.value)} value="Action"></input>
            Action
        </label>
        <label>
            <input type="checkbox" onChange={(e) => e.target.checked ? SetGenreFilter(e.target.value) : removeFromGenreArray(e.target.value)} value="Adventure"></input>
            Adventure
        </label>
        <label>
            <input type="checkbox" onChange={(e) => e.target.checked ? SetGenreFilter(e.target.value) : removeFromGenreArray(e.target.value)} value="Casual"></input>
            Casual
        </label>

        <label>
            <input type="checkbox" onChange={(e) => e.target.checked ? SetGenreFilter(e.target.value) : removeFromGenreArray(e.target.value)} value="Indie"></input>
            Indie
        </label>

        <label>
            <input type="checkbox" onChange={(e) => e.target.checked ? SetGenreFilter(e.target.value) : removeFromGenreArray(e.target.value)} value="RPG"></input>
            RPG
        </label>

        <label>
            <input type="checkbox" onChange={(e) => e.target.checked ? SetGenreFilter(e.target.value) : removeFromGenreArray(e.target.value)} value="Racing"></input>
            Racing
        </label>

        <label>
            <input type="checkbox" onChange={(e) => e.target.checked ? SetGenreFilter(e.target.value) : removeFromGenreArray(e.target.value)} value="Simulation"></input>
            Simulation
        </label>
        
        <label>
            <input type="checkbox" onChange={(e) => e.target.checked ? SetGenreFilter(e.target.value) : removeFromGenreArray(e.target.value)} value="Sports"></input>
            Sports
        </label>
        
        <label>
            <input type="checkbox" onChange={(e) => e.target.checked ? SetGenreFilter(e.target.value) : removeFromGenreArray(e.target.value)} value="Strategy"></input>
            Strategy
        </label>
            
        </div>


    </div>)
}

export default Sidebar