import logo from '/home/kayo-b/the_odin_project/game-store-page/src/logo.svg'
import '/home/kayo-b/the_odin_project/game-store-page/src/App.css';
import { Link } from 'react-router-dom'

function App({items}) {
  let count = 0

  return (
    <div className="App">
      <div className="main-home-container">
      
                  
               
        <div className="home-carousel"> 
        
            <div className="home-slide-track">
            
          {items.map(item => {
            let screenshot = item.screenshots !== undefined ? item.screenshots : "Unavailable"
            count += 1
            if(item.metacriticScore > 86 && screenshot !== "Unavailable" && count < 19) {
              return  <div className="slides-container">
                      <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[0]}></img>
                      <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[1]}></img>
                      <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[2]}></img>
                      <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[3]}></img></div>

            }
                    

          })}
          
          </div>
          <div className="home-title-container"><Link to='/deals' style={{textDecoration:'none', color: "white"}}> <h5 className="home-title">EXPLORE GAME DEALS</h5></Link>  </div>
            </div> 
      </div>
    </div>
  );
}

export default App;
