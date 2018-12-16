import React from 'react';
import { Link } from 'react-router-dom';

// const Greeting = ({ currentUser, logout }) => {
    class Greeting extends React.Component {
        
    sessionLinks () {
        if (this.props.location.pathname === "/login") {
            return (
                <div>
                    {/* <div className="logo-image">
                        <img className="image-" src={window.images.logo} alt="" />
                    </div> */}
                    <div className="nav-sign-up-link">
                        <Link to="/signup">Sign up!</Link>
                    </div>
                </div>
            )
        } else if (this.props.location.pathname === "/signup") {
            return (
                <div>
                    {/* <div className="logo-image">
                        <img className="image-" src={window.images.logo} alt="" />
                    </div> */}
                    <div className="nav-log-in-link">
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            )
        } else if (this.props.location.pathname === "/" && !this.props.currentUser) {
            let none;
            // return (
            //     // none
            //     // <div className="tranparent-div">
            //     // </div>
            // );
        } else if (this.props.location.pathname === "/" && this.props.currentUser) {
            return (
                <div className="logo-image">
                    <img className="image-" src={window.images.logo} alt="" />
                </div>
            );
        }
    }

    personalGreeting() {
        return(
            <div className="personal-greeting-div">
                <hgroup className="header-group">
                    <h2 className="header-name">Hello, {this.props.currentUser.first_name}!</h2>
                    <button className="header-button" onClick={this.props.logout}>Log Out</button>
                </hgroup>

            </div>
        )
    };
    

    render() {
        // debugger
            let result = this.props.currentUser ? this.personalGreeting() : this.sessionLinks();
            let currentUserCheck;

        if (this.props.location.pathname === "/" && !this.props.currentUser) {
            return (
                <nav className="invisible">

                </nav>
            )
        } else {
            return (
                <nav className="greeting-nav">
                    <div className="logo-image">
                        <img className="image-" src={window.images.logo} alt="" />
                    </div>
                    <div className="result-div">
                        {result}
                    </div>
                </nav>
            )
        }
    }
    
};


export default Greeting;
