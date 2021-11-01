import React from 'react';
import aboutimage from '../images/about.png';
function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>UPCOMINGN EVENT</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam vel, dolore atque, aliquid repellat
                    eriores delectus modi ullam eius vero molestias nulla placeat unde at suscipit,
                     illo est?</p>
                     <button>READ MORE</button>
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
            
        </div>
    )
}

export default About;
