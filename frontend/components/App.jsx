import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
    <div>
        <header>
            <h1>365px</h1>
            <GreetingContainer />
        </header>
        <switch>
        </switch>
    </div>

);
export default App;