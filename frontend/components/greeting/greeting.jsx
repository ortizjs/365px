import React from 'react';
import { Link } from 'react-router-dom';
import UploadPhotoFormContainer from '../photos/upload_photo_form_container';


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
        } else if (this.props.location.pathname === "/" && this.props.currentUser) {
            return (
                <div className="logo-image-div">
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
        let jimAvatar = window.images.avatar 
        let otherAvatar = window.images.avatar2
        let userAvatar = this.props.currentUser.first_name === "Jim" ? jimAvatar : otherAvatar
        let userId = this.props.user_id
        return(
            <div className="personal-image-div">
                <div className="avatar">
                    <Link to={`/users/${userId}`}>
                        <img className="avatar-image" src={userAvatar} alt="" />
                    </Link>
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
    
    
    upload(e) {
        e.preventDefault();
        document.getElementById("upload-modal").style.display = 'block';
    }
    
    closeModal(e) {
        e.preventDefault();
        document.getElementById("upload-modal").style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    
    // outsideCloseModal(e) {
    // window.onclick = function outsideCloseModal(e) {
    //     e.preventDefault();
    //     // if (e.target == modal) {
    //     if (e.target !== document.getElementById("upload-modal")) {
    //         // modal.style.display = "none";
    //         document.getElementById("upload-modal").style.display = 'none';
    //     }
    // }

    // outsideCloseModal(e) {
    //     window.onclick = function (event) {
    //         if (event.target == modal) {
    //             modal.style.display = "none";
    //         }
    //     }
    // }
    
    
    uploadButton(){
        if (this.props.currentUser) {
            return (
                <button className="header-upload-button" onClick={this.upload}>
                    <i className="fas fa-cloud-upload-alt"></i>
                </button>
            )
        }
    }

    render() {
        let none;
        let result = this.props.currentUser ? this.userImage() : this.sessionLinks();
        let logoutB = this.logoutButton();
        let userFirsName = this.props.currentUser ? this.props.currentUser.first_name : none;
        let linkTo = this.props.currentUser ? "/users" : "/"
        let planeIcon = this.props.currentUser ? <i className="far fa-paper-plane"></i> : none;
        let bellIcon = this.props.currentUser ? <i className="far fa-bell"></i> : none;
        let dotsIcon = this.props.currentUser ? <i className="fas fa-ellipsis-h"></i> : none;
        let uploadB = this.uploadButton();
        let spanClose = document.getElementsByClassName("close-button-wrp")[0];
        let modal = document.getElementById('upload-modal');


        if (this.props.location.pathname === "/" && !this.props.currentUser) {
            return (
                <nav className="invisible">

                </nav>
            )
        } else {
            return (
                <nav className="greeting-nav" >
                    
                        <div className="logo-image-div">
                            <Link to={linkTo} className="image-logo-link">
                                <img src={window.images.logo} alt="" />
                            </Link>
                        </div>
                    <div className="header-nav">
                        <div className="discover-tag">
                            <a className="githubtaglink" href="https://github.com/ortizjs/365px">
                                <h2 className="discover-h2">Discover</h2>
                            </a>
                        </div>
                        <div className="dot-icon-display">
                            <a href="https://www.linkedin.com/in/jonnatan-ortiz/" value="LinkedIn">
                                {dotsIcon}
                            </a>
                        </div>
                    </div>
                    <div className="result-div">
                        <div className="inner-result-div">
                            {result}
                            <div className="first-name-display">
                                {userFirsName}
                            </div>
                            <div className="plane-icon-display">
                                {planeIcon}
                            </div>
                            <div className="bell-icon-display">
                                {bellIcon}
                            </div>
                            <div className="cloud-upload-icon-display">
                                {uploadB}
                            </div>
                            {logoutB}
                        </div>
                    </div>
                    
                    <div id='upload-modal' className="upload-modal">
                        <div className="upload-modal-content">
                            <div className='close-button-wrp'>
                                <button className='close-button' onClick={this.closeModal}>×</button>
                            </div>
                            <div className='form-container'>
                                <UploadPhotoFormContainer />
                            </div>
                        </div>
                    </div>
                    
                </nav>
            )
        }
    }
    
};

let modal = document.getElementById("upload-modal");

window.onclick = function (event) {
    // debugger
    if (event.target == document.getElementById("upload-modal")) {
        document.getElementById("upload-modal").style.display = "none";
    }
}


export default Greeting;
