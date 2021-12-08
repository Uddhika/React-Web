import React from 'react';
import './footer.css';
import gpt3logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div className="whatud__footer section-padding">
            <div className="whatud__footer-heading">
                <h1 className="gradient__text">Do you want to step into the future</h1>
            </div>

            <div className="whatud__footer-btn">
                <p>Request early access</p>
            </div>

            <div className="whatud__footer-links">
                <div className="whatud__footer-links-logo">
                    <img src={gpt3logo} alt="" />
                    <p>Crechterwoord k12 182 dk alkd</p>
                </div>
                <div className="whatud__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="whatud__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>

                <div className="whatud__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Crether</p>
                    <p>011-2345667</p>
                    <p>info@whatud.com</p>
                </div>

                <div className="whatud__footer-copyright">
                    <p>2021b whatud. All rights reserved</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
