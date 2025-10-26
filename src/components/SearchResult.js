import React, { useState } from "react";

const SearchResult = ({
  setCart,
  shopCart,
  searchBoxResult,
  setSearchBoxResult,
  isOpen,
  setIsOpen,
}) => {
  function changeCartColor() {
    let cartNav = document.getElementsByClassName("cartNav")[0];
    cartNav.style.color = "green";
    setTimeout(() => (cartNav.style.color = "aliceblue"), 275);
  }

  function AddToCart(item) {
    let repeatedItem = false;
    if (shopCart.length > 0) {
      for (let x = 0; x < shopCart.length; x++) {
        if (shopCart[x].dealID === item.dealID) {
          let newShopCart = shopCart;
          newShopCart[x].quantity += 1;
          setCart([...shopCart]);
          changeCartColor();
          repeatedItem = true;
        }
      }
    }

    if (repeatedItem === false) {
      let dealObj = {
        title: item.external,
        salePrice: item.cheapest,
        savings: item.cheapest,
        normalPrice: item.cheapest,
        dealID: item.cheapestDealID,
        quantity: 1,
      };

      setCart([...shopCart, dealObj]);
      changeCartColor();
    }
  }

  return (
    <div className="box-result-main-container">
      <div className={"search-box-result-" + (isOpen ? "open" : "closed")}>
        {searchBoxResult.map((item) => {
          if (item === "No results") {
            return (
              <div
                className="result-box-container"
                style={{ color: "aliceblue", heigh: "100px", padding: "5px" }}
              >
                {" "}
                No results{" "}
              </div>
            );
          }
          if (
            item.thumb.includes("steamstatic")
          ) {
            return (
              <div className="result-box-container">
                <button
                  onClick={() => AddToCart(item)}
                  className="add-to-cart-btn-search-box"
                >
                  Add to Cart
                </button>
                <a
                  className="result-deal-box"
                  href={`https://www.cheapshark.com/redirect?dealID={${item.cheapestDealID}}`}
                  style={{ color: "aliceblue" }}
                >
                  <div className="results">
                    <img
                      className="thumbnail"
                      src={item.thumb}
                      alt="thumbnail"
                    ></img>
                    <span>$ {item.cheapest} USD</span>
                  </div>
                </a>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SearchResult;
