import React, {useState} from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Navbar = () => {

    const Menu = () => (
        <>
        <p><a href="#home">Home</a></p>
        <p><a href="#whatud">What is Ud</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
        </>
    )

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="whatud__navbar">
            <div className="whatud__navbar-links">
                <div className="whatud__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="whatud__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="whatud__navbar-sign">
                <a href="#"><p>Sign in</p></a>
                <p><a href="#">Signup</a></p>
            </div>
            <div className="whatud__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false) }/>
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true) }/>
                }

                {toggleMenu && (
                    <div className="whatud__navbar-menu_container scale-up-center">
                        <div className="whatud__navbar-menu-container-links">
                            <Menu />
                            <div className="whatud__navbar-menu_container-links-sign">
                                <a href="#"><p>Sign in</p></a>
                                <p><a href="">Signup</a></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
