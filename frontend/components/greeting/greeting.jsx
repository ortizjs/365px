import React from 'react';
import { Link } from 'react-router-dom';

// const Greeting = ({ currentUser, logout }) => {
    class Greeting extends React.Component {
        

    // sessionLinks () {
    //     return(
    //         <nav className="greeting-nav">

    //             <div className="nav-log-in-link">
    //                 <Link to="/login">Login</Link>
    //             </div>
    //             <br />
    //             <br />
    //             <br />
    //             <div className="nav-sign-up-link">
    //                 <Link to="/signup">Sign up!</Link>
    //             </div>
    //             {/* &nbsp;or&nbsp; */}

    //         </nav>
    //     )
        
    // };

    sessionLinks () {
        if (this.props.location.pathname === "/login") {
            return (
                <div>
                    <div className="logo-image">
                        <img className="image-" src={window.images.logo} alt="" />
                    </div>
                    <div className="nav-sign-up-link">
                        <Link to="/signup">Sign up!</Link>
                    </div>
                </div>
            )
        } else if (this.props.location.pathname === "/signup") {
            return (
                <div>
                    <div className="logo-image">
                        <img className="image-" src={window.images.logo} alt="" />
                    </div>
                    <div className="nav-log-in-link">
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            )
        } else if (this.props.location.pathname === "/" && !this.props.currentUser) {
            return (
                <div></div>
            );
        } else if (this.props.location.pathname === "/" && this.props.currentUser) {
            return (
                <div className="logo-image">
                    <img className="image-" src={window.images.logo} alt="" />
                </div>
            );
        }
    }
    //     } else if (this.props.location.pathname === "/") {
    //         return (
    //             <div>
    //                 < div className = "nav-log-in-link" >
    //                     <Link to="/login">Login</Link>
    //                 </div >
    //                 <br />
    //                 <br />
    //                 <div className="nav-sign-up-link">
    //                     <Link to="/signup">Sign up!</Link>
    //                 </div>
    //             </div>
    //         );
    //     }
    // };

    personalGreeting() {
        return(
            <div>
                <div className="logo-image">
                    <img className="image-" src={window.images.logo} alt="" />
                </div>
                <hgroup className="header-group">
                    <h2 className="header-name">Hello, {this.props.currentUser.first_name}!</h2>
                    <button className="header-button" onClick={this.props.logout}>Log Out</button>
                </hgroup>

            </div>
        )
    };

    render() {
        // debugger
        // let backgroundColor;
        // if (this.props.location.pathname === "/" && !this.props.currentUser) {
            //     backgroundColor = document.querySelector(".parent-div").style.background = ""
            // }
            
            // let headerColor = this.props.location.pathname === "login" ? this.props.location.pathname === "signup" 
            let result = this.props.currentUser ? this.personalGreeting() : this.sessionLinks();
            let currentUserCheck;
            // if 
        return (
            <nav className="greeting-nav-outer">
                {/* <div className="logo-image"> */}
                    {/* <img className="image-" src={window.images.logo} alt=""/> */}
                {/* </div> */}
                <div className="empty-div">

                </div>
                
                {result}
            </nav>

        )
    }
    
};


export default Greeting;
