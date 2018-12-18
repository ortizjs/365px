import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_page';
import PhotoIndexContainer from './photos/photos_index_container';
const App = () => (
    <div className="parent-div">
            <Switch>
            {/* <AuthRoute exact path={"/login" || "/signup"} component={GreetingContainer} /> */}
                {/* <AuthRoute exact path="/signup" component={GreetingContainer} /> */}
                <Route path="/" component={GreetingContainer} />
            </Switch>
            <ProtectedRoute path="/photos" component={PhotoIndexContainer} />
            <AuthRoute exact path="/" component={SplashContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </div>

);
export default App;