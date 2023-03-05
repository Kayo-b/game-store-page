import logo from '/home/kayo-b/the_odin_project/game-store-page/src/logo.svg'
import '/home/kayo-b/the_odin_project/game-store-page/src/App.css';


function App() {
  return (
    <div className="App">
      <div>
      <div className="searchContainer">
                    <div className="searchElem">
                        <input type="search" className="search" onChange={e => console.log("change!")}></input>
                        <div onClick={ e => console.log("click!")} className="searchButton"></div>
                    </div>
                </div>
      </div>
    </div>
  );
}

export default App;
