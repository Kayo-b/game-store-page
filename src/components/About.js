import React from 'react';
import cheapshark from '../svg/cheapshark_logo_text.webp'
import steam from '../svg/steam.png'

const About = ({test}) => {
    return(
        <div className="about">
            <h3>About</h3>
            <p>This page was created for learning porpuses.</p>
            
            <h4>Credits:</h4>
            <div className="about-credits">
            {/* <div className="cheapshark-img"></div> */}
            <div className="cheapshark-about-container">
                <img alt="cheapshark" src={cheapshark} style={{marginBottom:"-15px", paddingBottom:"0px"}}></img>
                <p>Sheapshark API, for finding the best deals online.</p>
            </div>

            <div className="steam-about-container">
                <img alt="steam" src={steam} style={{width:"350px" , filter:"invert(100%)", margin:"10px", marginBottom:"-11px"}}></img>
                <p>Steam API, for providing resources on game titles.</p>
            </div>
            </div>
            
            
            <ul>{test.map(item => <li>{item.title}</li>)}</ul>

        </div>
        
    )
}
export default About