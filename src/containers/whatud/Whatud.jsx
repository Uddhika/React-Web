import React from 'react';
import { Feature } from '../../components';
import './whatud.css';

const Whatud = () => {
    return (
        <div className="whatud__whatud section-margin" id="whatud">
            <div className="whatud__whatud-feature">
                <Feature title="What is whatud" text="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"/>
            </div>

            <div className="whatud__whatud-heading">
                <h1 className="gradient__text">The possibilties are beyond your imagination</h1>
                <p>Explore the library</p>
            </div>

            <div className="whatud__whatud-container">
                <Feature title="Lorem 1" text="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" />
                <Feature title="Lorem 2" text="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" />
                <Feature title="Lorem 3" text="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" />
            </div>

        </div>
    )
}

export default Whatud
