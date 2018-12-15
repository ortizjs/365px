import React from 'react';
import { Link } from 'react-router-dom';

// const Greeting = ({ currentUser, logout }) => {
    class Greeting extends React.Component {
        

    sessionLinks () {
        return(
            <nav className="greeting-nav">

                <div className="nav-log-in-link">
                    <Link to="/login">Login</Link>
                </div>
                <br />
                <br />
                <br />
                <div className="nav-sign-up-link">
                    <Link to="/signup">Sign up!</Link>
                </div>
                {/* &nbsp;or&nbsp; */}

            </nav>
        )
        
    };

    personalGreeting() {
        return(
            <hgroup className="header-group">
                <h2 className="header-name">Hello, {this.props.currentUser.first_name}!</h2>
                <button className="header-button" onClick={this.props.logout}>Log Out</button>
            </hgroup>
        )
        
    };

    render() {
        debugger
        let result = this.props.currentUser ? this.personalGreeting() : this.sessionLinks();
        let backgroundColor;
        if (this.props.location.pathname === "/" && !this.props.currentUser) {
            backgroundColor = 
        }

        // let headerColor = this.props.location.pathname === "login" ? this.props.location.pathname === "signup" 
        return (
            <nav className="greeting-nav-outer">
                <div className="logo-image">
                    <img className="image-" src={window.images.logo} alt=""/>
                </div>
                <div className="empty-div">

                </div>
                
                {result}
            </nav>

        )
    }
    
};


export default Greeting;
