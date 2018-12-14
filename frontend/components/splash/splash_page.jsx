import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

const Splash = () => {
    return(
        <div className="splash-page-main-div">
            <div className="header-section-dv">
                <h3 className="splash-header">
                    Get inspired ad share your best photos
                </h3>
                    <br />
                    <br />
                    <br />
                    <br />
                <h3 className="splash-middle">
                    Find your home among the world's best photographers.
                </h3>
                <br />
                <nav className="splash-join-link">
                    <Link to="/signup" className="splash-signup-link">Join 365px</Link>
                </nav>
            </div>
        </div>
    )
}
export default Splash;