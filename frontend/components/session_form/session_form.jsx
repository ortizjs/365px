import React from 'react';
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
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label className="login-password-label"> Password
                                <input type="password"
                                    placeholder="Password"
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
                <div>
                        {/* <img className="main-logo" src="http://www.aljanh.net/data/archive/img/4064674657.jpeg" border="0" />    */}
                </div>
                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        Welcome to 365px!
          <br />
                        Please {this.props.formType} or {this.props.navLink}
                        {this.renderErrors()}
                        <div className="signup-form">
                            <br />
                            <label>  Username:
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="signup-input"
                                />
                            </label>
                            <br />
                            <label>  Password:
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="signup-input"
                                />
                            </label>
                            <br />
                            <label>Email:
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="signup-input"
                                />
                            </label>
                            <br />
                            <label>First Name:
                                <input type="text"
                                    value={this.state.first_name}
                                    onChange={this.update('first_name')}
                                    className="signup-input"
                                />
                            </label>
                            <br />
                            <label>Last Name:
                                <input type="text"
                                    value={this.state.last_name}
                                    onChange={this.update('last_name')}
                                    className="signup-input"
                                />
                            </label>
                            <br />
                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                    </form>
                </div>
            )

        }
    }
}

export default SessionForm;
