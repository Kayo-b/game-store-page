import logo from '/home/kayo-b/the_odin_project/game-store-page/src/logo.svg'
import '/home/kayo-b/the_odin_project/game-store-page/src/App.css';


function App({items}) {
  return (
    <div className="App">
      <div className="main-home-container">
        <h4 className="home-title">Explore game deals</h4>
        <div className="home-carousel"> 
            <div className="home-slide-track">
          {items.map(item => {
            let screenshot = item.screenshots !== undefined ? item.screenshots : "Unavailable"
            if(item.metacriticScore > 70 && screenshot !== "Unavailable") {
              return  <div className="slides-container">
                      <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[0]}></img>
                      <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[1]}></img>
                      <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[2]}></img>
                      <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[3]}></img></div>

            }
                    

          })}
          
          </div>
            </div> 
      </div>
    </div>
  );
}

export default App;
