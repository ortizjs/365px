import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_page';
const App = () => (
    <div className="parent-div">
        {/* <header> */}
        {/* </header> */}
        {/* <body> */}
            <switch>
            {/* <AuthRoute exact path={"/login" || "/signup"} component={GreetingContainer} /> */}
                {/* <AuthRoute exact path="/signup" component={GreetingContainer} /> */}
                <Route path="/" component={GreetingContainer} />
            </switch>
            {/* <GreetingContainer /> */}
            <AuthRoute exact path="/" component={SplashContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        {/* </body> */}
    </div>

);
export default App;