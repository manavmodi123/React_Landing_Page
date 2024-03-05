import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <h3>CATEGORIES</h3>
                <ul>
                    <li>Web Builder</li>
                    <li>Hosting</li>
                    <li>Data Center</li>
                    <li>Robotic-Automation</li>
                    {/* Add more categories as needed */}
                </ul>
            </div>
            <div className="footer-column">
                <h3>CONTACT</h3>
                <ul>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Categories</li>
                    <li>About</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
