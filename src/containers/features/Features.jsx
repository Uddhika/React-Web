import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
        title: 'Improving',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias praesentium odit nesciunt, architecto facilis quaerat soluta officia, recusandae amet harum excepturi eaque fuga quia accusamus quasi saepe magnam in? Veritatis!' 
    },

    {
        title: 'become the tended active',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias praesentium odit nesciunt, architecto facilis quaerat soluta officia, recusandae amet harum excepturi eaque fuga quia accusamus quasi saepe magnam in? Veritatis!' 
    },

    {
        title: 'Messenger',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias praesentium odit nesciunt, architecto facilis quaerat soluta officia, recusandae amet harum excepturi eaque fuga quia accusamus quasi saepe magnam in? Veritatis!' 
    },

    {
        title: 'Really boy law',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias praesentium odit nesciunt, architecto facilis quaerat soluta officia, recusandae amet harum excepturi eaque fuga quia accusamus quasi saepe magnam in? Veritatis!' 
    },

]

const Features = () => {
    return (
        <div className="whatud__features section-padding" id="features">
            <div className="whatud__features-heading">
                <h1 className="gradient__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                <p>Request early access to get started</p>
            </div>
            <div className="whatud__features-container">
                {featuresData.map((item,index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index}/>
                ))}
            </div>
        </div>
    )
}

export default Features
