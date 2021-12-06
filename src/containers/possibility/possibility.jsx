import React from 'react';
import './possibility.css';

import possibilityImage from '../../assets/possibility.png';

const possibility = () => {
    return (
        <div className="whatud__possibility section-padding" id="possibility">
            <div className="whatud__possibility-image">
                <img src={possibilityImage} alt="possibility" />
            </div>
            <div className="whatud__possibility-content">
                <h4>Request Early Access to get started</h4>
                <h1 className="gradient__text">The possibilities are beyond expectation</h1>
                <p>Yet bed any for travelling assistance</p>
                <h4>Request early access to get started</h4>
            
            </div>
        </div>
    )
}

export default possibility
