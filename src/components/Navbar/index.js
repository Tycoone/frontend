import React from 'react';
import './index.scss';

const Navbar = () => {

    return (
        <div className="navbar-container">
            <div className="logo-container">
                <a href="/">
                    <span>Tycoones</span>
                </a>
            </div>
            <div className="page-links-container">
                <a href="/home">Home</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div className="cta-links-container">
                <a href="/signin">Sign In</a>
                <a className="button button-primary" href="/register">Get Started</a>
            </div>
        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;
