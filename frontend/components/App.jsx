import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
    <div>
        <header>
            <h1>365px</h1>
            <GreetingContainer />
        </header>
        <switch>
            <Route exact path="/login" component={LogInFormContainer} />
            <Route exact path="/signup" component={SignUpFormContainer} />
        </switch>
    </div>

);
export default App;