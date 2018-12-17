import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let guest = { username: "jimmbo_123", password: "1234567"}

        if (this.props.formType === "login"){
        return (
            <div className="login-form-container">
                {/* <div className="login-page-top-div"> */}
                    {/* <GreetingContainer /> */}
                    {/* <img src={window.images.logo} alt="" /> */}
                    {/* <img className="main-logo" src="http://www.lovethispic.com/uploaded_images/spring_green_scenery.jpg" border="0" />    */}
                {/* </div> */}
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="overall-form">

                        <h1 className="login-welcome">Log In to 365px</h1>

                        <div className="login-form">

                            <br />
                            
                            <label className="login-username-label"> Username
                                <input type="text"
                                    // placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label className="login-password-label"> Password
                                <input type="password"
                                    // placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </label>

                            <br />
                            
                            <input className="login-button" type="submit" value="Log In" />
                            <br />
                            <br />
                            <input className="guest-login-button" type="submit" value="Log in as guest" onClick={() => this.props.processForm(guest)}/>
                            <div className="no-account-div">
                                <h5 className="no-account-msg">Don't have an account? </h5>
                                <Link to="/signup" className="no-account-signup-link">Sign Up</Link>
                            </div>
                            <div className="error-message">
                                {/* Please {this.props.formType} or {this.props.navLink} */}
                                <br />
                                {this.renderErrors()}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
        }
        else{
            return(
                <div className="signup-form-container">
                    <div className="signup-inner">
                        <form onSubmit={this.handleSubmit} className="signup-form-box">
                            {/* {this.renderErrors()} */}
                            <div className="message-div">
                                <h1 className="join-banner">
                                    Join 365px!
                                </h1>
                                <h2 className="join-message">
                                    Share your photos, get inspired, and grow your skills
                                </h2>
                            </div>
                            <br />
                            {/* Please {this.props.formType} or {this.props.navLink} */}
                            <div className="signup-form">
                                <br />
                                {/* <label className="signup-username-label">  Username: */}
                                <label className="signup-labels">  Username:
                                    <input type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        // className="login-input"
                                        className="signup-input"
                                    />
                                </label >
                                <br />
                                <label className="signup-labels">  Password:
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="signup-input"
                                    />
                                </label>
                                <br />
                                <label className="signup-labels">Email:
                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className="signup-input"
                                    />
                                </label>
                                <br />
                                <label className="signup-labels">First Name:
                                    <input type="text"
                                        value={this.state.first_name}
                                        onChange={this.update('first_name')}
                                        className="signup-input"
                                    />
                                </label>
                                <br />
                                <label className="signup-labels">Last Name:
                                    <input type="text"
                                        value={this.state.last_name}
                                        onChange={this.update('last_name')}
                                        className="signup-input"
                                    />
                                </label>
                                <br />
                                <input className="session-submit-button" type="submit" value={this.props.formType} />
                                {/* {this.renderErrors()} */}
                            </div>
                        </form>
                        <div className="bottom-terms-conatiner">
                            <div className="signup-tos-statement">
                                By Signing up, you agree to our Terms of Service
                            </div>
                            <div className="login-instead">
                                Already have an account? 
                                <Link to="/login" className="bottom-login">Log in</Link>
                                {/* {this.renderErrors()} */}
                            </div>
                        </div>
                    </div>
                </div>
            )

        }
    }
}

export default SessionForm;
