import React from 'react';
import { Link } from 'react-router-dom';

// const Greeting = ({ currentUser, logout }) => {
    class Greeting extends React.Component {
        
    sessionLinks () {
        if (this.props.location.pathname === "/login") {
            return (
                <div className="nav-var-right">
                    <button className="nav-sign-up-button">
                        <Link to="/signup" className="nav-sign-up-link">Sign Up</Link>
                    </button>
                </div>
            )
        } else if (this.props.location.pathname === "/signup") {
            return (
                <div className="nav-var-right">
                    <button className="nav-login-button">
                        <Link to="/login" className="nav-login-link">Login</Link>
                    </button>
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

    userImage() {
        return(
            <div className="personal-image-div">
                <div className="avatar">
                    <img className="avater-image" src={window.images.avatar} alt="" />
                    {/* <h2 className="header-name">Hello, {this.props.currentUser.first_name}!</h2> */}
                    {/* <button className="header-logout-button" onClick={this.props.logout}>Log Out</button> */}
                </div>
            </div>
        );
    }

    logoutButton() {
        if (this.props.currentUser) {
            return (
                <button className="header-logout-button" onClick={this.props.logout}>Log Out</button>
            )
        }
    }
    

    render() {
        // debugger
            // let result = this.props.currentUser ? this.personalGreeting() : this.sessionLinks();
            let result = this.props.currentUser ? this.userImage() : this.sessionLinks();
            let logoutB = this.logoutButton();
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
                        <Link to="/" className="image-"><img src={window.images.logo} alt="" /></Link>
                        {/* <img className="image-" src={window.images.logo} alt="" /> */}
                    </div>
                    <div className="result-div">
                        <div className="inner-result-div">
                            {result}
                            {logoutB}
                        </div>
                    </div>
                </nav>
            )
        }
    }
    
};


export default Greeting;
