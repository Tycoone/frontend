import React from 'react';
import Navbar from '../../../components/Navbar';
import './index.scss';
import headerArt from '../../../assets/images/header_art.svg';
import ImageArt from '../../../assets/images/header_art-2.svg';

const Landing = () => {

    return (
        <div>
            <Navbar />
            <div className="main-content">
                <div className="header-container">
                    <div className="header">
                        <div className="header-image">
                            <img src={headerArt} alt={headerArt} />
                        </div>
                        <div className="header-content">
                            <h1>Moments For Startups</h1>
                            <p>A startup is a young company founded by one or more entrepreneurs to develop a unique product or service and bring it to market.</p>
                            <div className="cta-buttons">
                                <a className="button button-primary" href="/register">Get Started</a>
                                <a className="button button-outlined-primary text-secondary" href="/register">Book a Demo</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col l6">
                            <div className="padding-tb-64 shc">
                                <h2>Connect, Scale and Grow We’re here for you</h2>
                                <p> A startup is a young company founded by one or more entrepreneurs to develop a unique product or service and bring it to market. A startup is a young company founded by one or more entrepreneurs to develop a unique product or ser market.</p>
                            </div>
                        </div>
                        <div className="col l6">
                            <div className="shc-img">
                                <img src={ImageArt} alt={ImageArt} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Landing.propTypes = {

};

export default Landing;
