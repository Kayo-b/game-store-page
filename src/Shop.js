import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [nationalities, setNationalities] = useState([]);
    const [message, setMessage] = useState('');
    const [personName, setPersonName] = useState('');
    const [items, setItems] = useState([])
    const [apiList, setApiList] = useState([
                    'https://www.cheapshark.com/api/1.0/deals?storeID=1', 
                    'https://www.cheapshark.com/api/1.0/deals?storeID=6'])

    async function fetchItems() {
        let allGamesArray = [];
        for(let x = 0; x < apiList.length; x++) {
            const data = await(await fetch(apiList[x])).json();
            allGamesArray = allGamesArray.concat(data)
        }

        // const data = await(await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1')).json();
        // const amount = data.length
        // const gamesNumber = amount ? data.country : [];
        

        // const otherStore = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=6')
        // .then(res => res.json())

        // setItems(otherStore.concat(otherStore))

        // let allGamesArray = data.concat(otherStore)
        setItems(allGamesArray)

        // var dataMain = Promise.all([fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'), fetch('https://www.cheapshark.com/api/1.0/deals?storeID=6&upperPrice=15')])
        // .then(res => Promise.all(res.map(res => res.json())))
        // .then(data => data)
        // console.log(dataMain)
     
        console.log(items)
        console.log(items.length)
        const message = allGamesArray.length > 0 ? `${allGamesArray.length} deals found` : 'No deals found';
        setMessage(message);

    // } catch (err) {
    //     console.log(`err: ${err.message}`);
    //     setNationalities([]);
    //     setMessage('Could not fetch deals, try again later.');
    // }
  }

  useEffect(() => {
    async function handleSubmit(){
        
        await fetchItems();
      }
      handleSubmit()
  },[])  


  return (
    <div className="shop">
        <div className="message">{message}</div>
        {console.log(items)}
        {items?.map(item => { 
           let gameName = `${item.metacriticLink}`
            console.log(gameName)
            gameName = gameName.slice(9)
            return <div key={item.title} className="gameDiv">

                <a href={`https://www.cheapshark.com/redirect?dealID={${item.dealID}}`}>
                    <h5 className="game-title">{item.title}</h5>
                </a>

                <img className="thumbnail" src={item.thumb} alt="thumbnail"></img>

                 <Link to={`/shop/${gameName}`} state={{name: gameName}}>
                    <div className="details">Info</div>
                </Link> 
        {/* <ItemsList gameName={gameName}/> */}
    </div>
})}
           
          </div>   
  );

}
// {Array.isArray(items) && items.map(
//     item => {
//       var gameName = `${item.metacriticLink}`
      
//       gameName = gameName.slice(9)
//       const flagUrl = item.thumb;
//       const altText = `${item.title} deal`;
//       return <div key={item.title}><h3>{item.title}</h3> 
//       <img src={flagUrl} alt={altText} style={{
//         border: "1px solid black"
//       }} />
      
//        <Link to={`/shop/${gameName}`} state={{name: gameName}}><div className="details">Info</div> </Link>
//       </div>
//     }
//   )}

export function ItemsList({ gameName }) { 
    return <Link to={`/shop/${gameName}`} state={{name: gameName}}><div className="details">Info</div></Link> }
//     return items?.map(item => { 
//     let gameName = `${item.metacriticLink}`
//     console.log(gameName)
//     gameName = gameName.slice(9)
//     return <div className="gameDiv">

//         <a href={`https://www.cheapshark.com/redirect?dealID={${item.dealID}}`}>
//             <h5 className="game-title">{item.title}</h5>
//         </a>

//         <img className="thumbnail" src={item.thumb} alt="thumbnail"></img>
        
      
//         <div><Link to={`/shop/${gameName}`} state={{name: gameName}}><div className="details">Info</div></Link> </div>  
       

        
//     </div>
// })}

// const Shop = () => {
    
//     useEffect(() => {
        
//         fetchItems();
//     }, [])

//     const [items, setItems] = useState([])

//     const fetchItems = async () => {
//         try {

//             const steamData = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
//             // .then(res=>res.json())
//             // .then(print=>console.log(print))
//             const steamDeals = await steamData.json()
//             setItems(steamDeals)

//         } catch (err) {
//             console.log(`err: ${err.message}`);
//             setItems([])
//         }


//         // const requestOptions = {
//         //     method: 'POST',

//         // }
//         // const requestHeaderIGDB = {
//         //     method: 'POST',
//         //     headers: {
//         //         "Client-ID":"emjxtjdm4r6zsam311xpzv6ne7renk",
//         //         "Authorization": "Bearer tgwq7cyn3zbcvcn1tu6sbgpbpndj5w "
//         //     },
//         //     Body: "fields *;"
//         // }
//         // fetch("https://id.twitch.tv/oauth2/token?client_id=emjxtjdm4r6zsam311xpzv6ne7renk&client_secret=z2is0jtg3m5shv0m93g5by3xfar0o5&grant_type=client_credentials", requestOptions)
//         // .then(res=>res.json())
//         // .then(json=>console.log(json))
//         // fetch("https://api.igdb.com/v4/games",requestHeaderIGDB)
//         // .then(res=>res.json())
//         // // .then(json=>console.log(json))

//         // const otherStore = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=6&upperPrice=15')
//         // .then(res => res.json())

//         // setItems(steamDeals.concat(otherStore))
//         // setItems(steamDeals)

//         // const rawg = await fetch("https://api.rawg.io/api/games/corto-maltese-secrets-of-venice?key=61dfdbccb6ec4b6088ca3f707f739cdb", {method:'GET'})
//         // const games = await rawg.json();
//         // console.log(games)
//     } 
//     async function handleSubmit(e) {
//         e.preventDefault();
//         await fetchItems();
//     }

//     return(
//         <div className="shop">
//             <ItemsList items={items}/>
               
//         </div>
//     )
// }

export default Shop
