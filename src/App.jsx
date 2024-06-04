import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Home from './Home';
import config from './config';
// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Protected from './Protected';


const oktaAuth = new OktaAuth(config.oidc);

const App = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '', window.location.origin));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>My Okta-React app</p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Security
        oktaAuth={oktaAuth}
        onAuthRequired={customAuthHandler}
        restoreOriginalUri={restoreOriginalUri}
      >
        <Route path="/" exact component={Home} />
        <SecureRoute path="/protected" component={Protected} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/login/callback" component={LoginCallback} />
    </Security>
    </header>
    </div>
  );
};


export default App;