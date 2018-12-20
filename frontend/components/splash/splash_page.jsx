import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

const Splash = () => {
    return(
        <div className="splash-page-main-div">
            <div className="header-section-div">
                <nav className="static-nav">
                    <button className="splash-page-link-button">
                        <Link to="/" className="splash-page-link"><img src={window.images.logo2} alt="" /></Link>
                    </button>
                    <br />
                    <div className="splash-nav-log-sign-buttons">
                        <button className="splash-page-login-button">
                            <Link to="/login" className="splash-page-login-link">Sign In</Link>
                        </button>
                        <br />
                        <button className="splash-page-signup-button">
                            <Link to="/signup" className="splash-page-signup-link">Sign Up</Link>
                        </button>
                    </div>
                </nav>

                <div className="main-content">
                    <div className="content">
                        <div className="splash-header">
                            Get inspired and share your best photos
                        </div>

                        <h2 className="header-sec-desc">
                            Find your home among the world's best photographers.
                        </h2>
                        <div className="signup-button-div">
                            <button className="splash-join-button">
                                <Link to="/signup" className="splash-signup-link">Join 365px</Link>
                            </button>

                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}
export default Splash;