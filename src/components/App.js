import logo from '/home/kayo-b/the_odin_project/game-store-page/src/logo.svg'
import '/home/kayo-b/the_odin_project/game-store-page/src/App.css';
import { Link } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import midjourney from '../svg/midjourney.gif'


function App({items, setRerender, loading, setLoading}) {
  let count = 0
  const [homeRerender, setHomeRerender] = useState(false)

  useEffect(() => {
    const loadingFunc = () => {
      for(let x = 1; x < 52; x++) {
        setTimeout(() => {setLoading(prevLoading => prevLoading + "▮")}, x * 280)
      }

      
    }
    loadingFunc()
  },[])
  
  
  return (
    <div className="App">
      <div className="main-home-container">
        <div className="home-carousel"> 
        {loading.length < 50 ? <div style={{width:"100%", color:"green", display:"flex", flexDirection:"column", alignItems:"center", position:"absolute",  top: "150px", zIndex: "3"}}> LOADING<div style={{color:"green", display:"flex", width:"550px"}}> {loading} </div></div> : ""} 
            <div className="home-slide-track">
            
            {/* {count === 0 ? Array(14).fill().map((_,i) => <div style={{width:"240px", height:"120px"}} key={i}></div>) : null} */}
            
          
          {loading.length < 50 ? Array(14).fill().map((_,i) => <div style={{width:"240px", height:"120px"}} key={i}></div>) : items.map(item => {
            let screenshot = item.screenshots !== undefined ? item.screenshots : "Unavailable"
            count += 1
            
            if(screenshot !== "Unavailable" && count < 20) {
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
              {items.length < 51 ? "" :  <div className="phrase-container">
                <span className='darksouls-phrase1'><span>AND</span> <span>SO</span> <span>IT</span> <span>IS</span> </span>
                <span className='darksouls-phrase2'><span>THAT</span> <span>ASH</span> </span>
                <span className='darksouls-phrase3'><span>SEEKETH</span> <span>EMBERS</span><span>...</span></span>
                </div>}
               
              <div className="bonfire"></div>
              </div>
              </div>
            </div> 


      </div>
    </div>
  );


  
// if(items.length > 0){
//   return (
//     <div className="App">
//       <div className="main-home-container">
//         <div className="home-carousel"> 
//             <div className="home-slide-track">            
          
//          {(item => {
//             let screenshot = item.screenshots !== undefined ? item.screenshots : "Unavailable"
//             count += 1
//             if(screenshot !== "Unavailable" && count < 20) {
//               return  <div className="slides-container">
//                       <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[0]}></img>
//                       <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[1]}></img>
//                       <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[2]}></img>
//                       <img className="home-carousel-slide" alt={`${screenshot}`} src={screenshot[3]}></img>
//                       </div>

//             }

//           })}
          
//           </div>
//             <div className="home-background-img-container">
              
//               <div className="home-deals-link-container" >
//               <div className="home-background-img"></div>
              
//               </div>
//               <Link to='/deals' style={{zIndex:'1', textDecoration:'none', marginTop: "150px", color: "rgb(188, 187, 208)", border: "2px solid #737d94", borderRadius: "2px", margin: "20px", padding: "5px", width: "150px", height:"30px", paddingTop: "15px"}} onMouseOver={e => e.target.style.backgroundColor = "#4d6175"} onMouseOut={e => e.target.style.backgroundColor = "#4d617500"}>EXPLORE</Link>
              
//               <div className="bonfire-container">
//               {items.length === 0 ? "" :  <div className="phrase-container">
//                 <span className='darksouls-phrase1'><span>AND</span> <span>SO</span> <span>IT</span> <span>IS</span> </span>
//                 <span className='darksouls-phrase2'><span>THAT</span> <span>ASH</span> </span>
//                 <span className='darksouls-phrase3'><span>SEEKETH</span> <span>EMBERS</span><span>...</span></span>
//                 </div>}
               
//               <div className="bonfire"></div>
//               </div>
//               </div>
//             </div> 


//       </div>
//     </div>
//   );}


}



export default App;
