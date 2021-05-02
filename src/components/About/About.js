import React from 'react';
import celeb from '../../Images/celeb.jpg';
import './About.css';

const About = () => {
    return (
        <div className="about-section">
            <div className="celeb-card">

                    <div className="image">
                        <img src={celeb} alt="magnus" width="100%" height="100%"/>
                    </div>
                    <div className="celeb-info">
                        <div className="info-wrapper">
                        <h2>Magnus Carlsen</h2>
                        <h5>World Chess Champion  - 2013, 2014, 2016, 2018</h5>
                        <p>Country - Norway</p>
                        <ul>
                            FIDE Rating
                            <li>Standard - 2847</li>
                            <li>Rapid - 2881</li>
                            <li>Blitz - 2886</li>
                        </ul>
                        </div>
                        
                    </div>

                </div>
        </div>
    );
};

export default About;