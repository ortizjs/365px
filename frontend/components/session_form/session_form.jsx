import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
        if (this.props.formType === "login"){
        return (
            <div className="login-form-container">
                <div>
                    {/* <img className="main-logo" src="http://www.lovethispic.com/uploaded_images/spring_green_scenery.jpg" border="0" />    */}
                </div>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="overall-form">

                        <div className="login-welcome">Log In to 365px</div>

                        <div className="login-form">

                            <br />
                            
                            <label> Username
                                <input type="text"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label> Password
                                <input type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </label>

                            <br />
                            
                            <input className="login-button" type="submit" value={this.props.formType} />
                           
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
                            <label>Username:
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="signup-input"
                                />
                            </label>
                            <br />
                            <label>Password:
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
