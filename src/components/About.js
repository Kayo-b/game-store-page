import React from 'react';

const About = ({test}) => {
    return(
        <div>
            <h3>About</h3>
            <p>This is a page under construction</p>
            <ul>{test.map(item => <li>{item.title}</li>)}</ul>

        </div>
        
    )
}
export default About