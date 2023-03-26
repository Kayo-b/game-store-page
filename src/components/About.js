import React from 'react';
import cheapshark from '../svg/cheapshark_logo_text.webp'
import steam from '../svg/steam.png'
import midjourney from '../svg/midjourney.gif'
import fromsoftware from '../svg/fromsoftware_logo.png'

const About = ({test}) => {
    return(
        <div className="about">
            <div style={{paddingLeft:"40px", display:"flex", justifyContent:"center"}}>
            <p>This website was created as a learning project and is intended for educational purposes only. The content and information presented on this site should not be considered as having any commercial validity.</p>
            
           
            </div>
            <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}><h4>Credits:</h4></div>


            <div className="about-credits-container ">
            <div className="about-credits">
            
            {/* <div className="cheapshark-img"></div> */}
            <div className="cheapshark-about-container">
                <img alt="cheapshark" src={cheapshark} style={{width:"350px" , marginBottom:"0px", paddingBottom:"0px"}}></img>
                <p>Sheapshark API, for finding the best deals online.</p>
            </div>

            <div className="steam-about-container">
                <img alt="steam" src={steam} style={{width:"350px" , filter:"invert(100%)", margin:"10px", marginTop:"-3px"}}></img>
                <p style={{paddingTop:"5px", marginTop:"3px"}}>Steam API, for providing resources on game titles.</p>
            </div>
            
           
            
            
            {/* <div className="cheapshark-img"></div> */}
            <div className="midjourney-container">
                <img alt="cheapshark" src={midjourney} style={{ width:"350px" , marginBottom:"-15px", paddingBottom:"0px"}}></img>
                <p>Midjourney, for knight artwork.</p>
            </div>

            <div className="fromsoftware-container">
                <img alt="steam" src={fromsoftware} style={{width:"350px" , filter:"invert(100%)", margin:"10px", marginBottom:"-11px", marginLeft: "-0.5px"}}></img>
                <p>From Software, for bonfire animation.</p>
            </div>
            
            </div>
            </div>
            
            
            <ul>{test.map(item => <li>{item.title}</li>)}</ul>

        </div>
        
    )
}
export default About