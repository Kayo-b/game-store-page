import React, {useState} from 'react';

const SearchResult = ({searchBoxResult, setSearchBoxResult}) => {


    return(
        <div className="search-box-result">
            {searchBoxResult.map(item => {
                console.log(item.internalName)
            })}
        </div>
    )

}

export default SearchResult;
