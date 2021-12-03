import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
    return (
        <div className="whatud__header section-padding" id="home">
            <div className="whatud__header-content">
                <h1 className="gradient__text">Let's build something amazing with whatud OpenAI</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Inventore quis doloremque saepe aliquid sit minima? 
                    Repudiandae beatae vero sed adipisci ducimus.
                     Nobis, alias voluptates maxime beatae blanditiis 
                     minima inventore officiis.</p>

                <div className="whatud__header-content__input">
                    <input type="email" placeholder="Your email address" />
                    <button type="button">Get Started</button>

                </div>
            
                <div className="whatud__header-content__people">
                    <img src={people} alt="" />
                    <p>More than 1600 people have accessed in last 24 hours</p>
                </div>

                

            </div>
            
            <div className="whatud__header-image">
                    <img src={ai} alt="" />
            </div>

        </div>
    )
}

export default Header
