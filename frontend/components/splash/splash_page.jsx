import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

const Splash = () => {
    return(
        <div className="splash-main-div">
            <div>
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
                <nav>
                    <Link to="/signup" className="splash-signup-link">Join 365px</Link>
                </nav>
            </div>
        </div>
    )
}
export default Splash;