import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_page';
import PhotoIndexContainer from './photos/photos_index_container';
import UserPhotosContainer from './photos/user_photos_container';
import UploadPhotoFormContainer from './photos/upload_photo_form_container';
import PhotoShowContainer from './photos/photo_show_container';


const App = () => (
    <div className="parent-div">
            <Switch>
                <Route path="/" component={GreetingContainer} />
            </Switch>
            <div className="app-photos-div">
                <ProtectedRoute exact path="/users" component={PhotoIndexContainer} />
                <ProtectedRoute exact path="/users/:id" component={UserPhotosContainer} />
                <div className="photo-upload-form-div">
                    <ProtectedRoute exact path="/users/:id" component={UploadPhotoFormContainer} />
                </div>
                <ProtectedRoute path ="/photos/:photoId" component={PhotoShowContainer} />
            </div>
            <AuthRoute exact path="/" component={SplashContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </div>
);
export default App;