import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

const Splash = () => {
    return(
        <div className="splash-page-main-div">
            <div className="header-section-div">
                <nav className="static_nav">
                </nav>

                <div className="main-content">
                    <div className="content">
                        <h1 className="splash-header">
                            Get inspired ad share your best photos
                        </h1>

                        <h2 className="header-sec-desc">
                            Find your home among the world's best photographers.
                        </h2>

                        <button className="splash-join-link">
                            <Link to="/signup" className="splash-signup-link">Join 365px</Link>
                        </button>
                        </div>
                    </div>
                
                
            </div>
        </div>
    )
}
export default Splash;