import React from 'react';
import { Feature } from '../../components';
import './whatud.css';

const Whatud = () => {
    return (
        <div className="whatud__whatud section-margin">
            <div className="whatud__whatud-feature">
                <Feature />
            </div>

            <div className="whatud__whatud-heading">
                <h1 className="gradient__text">The possibilties are beyond your imagination</h1>
                <p>Explore the library</p>
            </div>

            <div className="whatud__whatud-container">
                <Feature />
                <Feature />
                <Feature />
            </div>

        </div>
    )
}

export default Whatud
