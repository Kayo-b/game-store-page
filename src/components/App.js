import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import midjourney from "../svg/midjourney.gif";

function App({ items, loading, setLoading }) {
  let count = 0;

  useEffect(() => {
    const loadingFunc = () => {
      for (let x = 1; x < 76; x++) {
        setTimeout(() => {
          setLoading((prevLoading) => prevLoading + "▮");
        }, x * 200);
      }
    };
    loadingFunc();
  }, []);

  return (
    <div className="App">
      <div className="main-home-container">
        <div className="home-carousel">
          {loading.length < 75 ? (
            <div className="loading">
              {" "}
              LOADING
              <div style={{ color: "green", display: "flex", width: "650px" }}>
                {" "}
                {loading}{" "}
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="home-slide-track">
            {loading.length < 73
              ? ""
              : (() => {
                  const validItems = items.filter(item => item.screenshots !== undefined && item.screenshots !== "Unavailable");
                  const carouselSlides = [];
                  
                  if (validItems.length > 0) {
                    // Keep looping until we have 17 slides, repeating items if necessary
                    for (let i = 0; i < 17; i++) {
                      const item = validItems[i % validItems.length]; // Cycle through available items
                      const screenshot = item.screenshots;
                      
                      carouselSlides.push(
                        <div key={i} className="slides-container">
                          <img
                            className="home-carousel-slide"
                            alt={`screenshot-${i}-0`}
                            src={screenshot[0]}
                          />
                          <img
                            className="home-carousel-slide"
                            alt={`screenshot-${i}-1`}
                            src={screenshot[1]}
                          />
                          <img
                            className="home-carousel-slide"
                            alt={`screenshot-${i}-2`}
                            src={screenshot[2]}
                          />
                          <img
                            className="home-carousel-slide"
                            alt={`screenshot-${i}-3`}
                            src={screenshot[3]}
                          />
                        </div>
                      );
                    }
                  }
                  
                  return carouselSlides;
                })()
          }
            {/* {items.map(item => {
            let screenshot = item.screenshots !== undefined ? item.screenshots : "Unavailable"
            count += 1
            
            if(screenshot !== "Unavailable" && count < 17) {
              return  <div className="slides-container">
                      <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[0]}></img>
                      <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[1]}></img>
                      <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[2]}></img>
                      <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[3]}></img>
                      </div>

            }

          })} */}
          </div>
            <Link
              to="/deals"
              style={{
                zIndex: "1",
                textDecoration: "none",
                marginTop: "150px",
                color: "rgb(188, 187, 208)",
                border: "2px solid #737d94",
                borderRadius: "2px",
                margin: "20px",
                padding: "5px",
                width: "150px",
                height: "30px",
                paddingTop: "15px",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4d6175")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#4d617500")}
            >
              EXPLORE
            </Link>

            <div className="bonfire-container">
              {loading.length < 75 ? (
                ""
              ) : (
                <div className="phrase-container">
                  <span className="darksouls-phrase1">
                    <span>AND</span> <span>SO</span> <span>IT</span>{" "}
                    <span>IS</span>{" "}
                  </span>
                  <span className="darksouls-phrase2">
                    <span>THAT</span> <span>ASH</span>{" "}
                  </span>
                  <span className="darksouls-phrase3">
                    <span>SEEKETH</span> <span>EMBERS</span>
                    <span>...</span>
                  </span>
                </div>
              )}
              {/* <div className="home-background-img-container">
              </div> */}
                  <div className="home-background-img"></div>
              <div className="bonfire">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
