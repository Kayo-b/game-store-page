import React, {useState} from 'react';

const SearchResult = ({searchBoxResult, setSearchBoxResult, isOpen, setIsOpen}) => {
  

    return(
        <div className="box-result-main-container">
        <div className={"search-box-result-" + (isOpen ? "open" : "closed")}>
        {searchBoxResult.map(item => {
                if(item.thumb.includes("https://cdn.cloudflare.steamstatic.com/steam")) {
                    return <div className="result-box-container"> 
                    <a className="result-deal-box" href={`https://www.cheapshark.com/redirect?dealID={${item.cheapestDealID}}`}>
                    <div className="results">
                   
                        <img className="thumbnail" src={item.thumb} alt="thumbnail"></img>
                        <span>$ {item.cheapest} USD</span>
                
                        </div>
                              
                        </a>
                        </div>
                }
               
            })}
        
        </div>
        </div>

    )

}

export default SearchResult;
