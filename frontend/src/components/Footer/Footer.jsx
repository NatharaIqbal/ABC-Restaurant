import React, { useState, useEffect } from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const isBottom = scrollTop + clientHeight >= scrollHeight - 10;
            setShowContent(isBottom);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='footer' id='footer'>
            <div className={`footer-content ${showContent ? 'show' : 'hide'}`}>
                <div className="footer-content-left">
                    <h3>ABC - Restaurant 🍴</h3>
                    <p1>Welcome to ABC Restaurant, where culinary excellence meets exceptional dining, offering a delectable array of dishes crafted to delight every palate.</p1>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com/login.php/" target="_blank" rel="noopener noreferrer">
                            <img src={assets.facebook_icon} alt="Facebook" aria-label="Facebook" />
                        </a>
                        <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D" target="_blank" rel="noopener noreferrer">
                            <img src={assets.twitter_icon} alt="Twitter" aria-label="Twitter" />
                        </a>
                        <a href="https://www.linkedin.com/in/nathara-nasreen-iqbal-b5514230b/" target="_blank" rel="noopener noreferrer">
                            <img src={assets.linkedin_icon} alt="LinkedIn" aria-label="LinkedIn" />
                        </a>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+94 11 234 5678</li>
                        <li>hello@abc-restaurant.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 ©️ ABC.com - All Rights Reserved by Nathara Nasreen Iqbal - ST/BSCSD/08/05
            </p>
        </div>
    );
};

export default Footer;