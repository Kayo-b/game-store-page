import logo from '/home/kayo-b/the_odin_project/game-store-page/src/logo.svg'
import '/home/kayo-b/the_odin_project/game-store-page/src/App.css';
import { Link } from 'react-router-dom'

function App({items}) {
  let count = 0
  function slideKinght() {
    document.getElementsByClassName("home-background-img")[0].style.transform = "translateX(80%)"
  }
  return (
    <div className="App">
      <div className="main-home-container">
      
                  
               
        <div className="home-carousel"> 
        
            <div className="home-slide-track">
            
          {items.map(item => {
            let screenshot = item.screenshots !== undefined ? item.screenshots : "Unavailable"
            count += 1
            if(item.metacriticScore > 86 && screenshot !== "Unavailable" && count < 24) {
              return  <div className="slides-container">
                      <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[0]}></img>
                      <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[1]}></img>
                      <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[2]}></img>
                      <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[3]}></img>
                      </div>

            }

          })}
          
          </div>

         
         
            <div className="home-background-img-container">
              
              <div className="home-deals-link-container" >
              <div className="home-background-img"></div>
              
              </div>
              <Link to='/deals' style={{zIndex:'1', textDecoration:'none', marginTop: "150px", color: "rgb(188, 187, 208)", border: "2px solid #737d94", borderRadius: "2px", margin: "20px", padding: "5px", width: "150px", height:"30px", paddingTop: "15px"}} onMouseOver={e => e.target.style.backgroundColor = "#4d6175"} onMouseOut={e => e.target.style.backgroundColor = "#4d617500"}>EXPLORE</Link>
              
              <div className="bonfire-container">
                <span className='darksouls-phrase'>"AND SO IT IS THAT ASH SEEKETH EMBERS..."</span>
                <div className="bonfire"></div>
              </div>
             
              

              </div>
            </div> 


      </div>
    </div>
  );
}

export default App;
