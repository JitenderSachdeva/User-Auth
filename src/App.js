import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import {PrivateRoute} from './Private-Route/PrivateRoute';

import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';

if(localStorage) {
  setAuthToken(localStorage);
  const decoded = (localStorage);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}


class App extends Component {
  constructor(props){
    super(props);
    }

  render() {
    return(
      <Provider store = { store }>
        <Router>
            <div>
              <Navbar />
                {/* <Route exact path="/" component={ Home } /> */}
                <div className="container">
                  <Route exact path="/login" component={ Login } />
                </div>
                <Switch>
                <PrivateRoute exact path="/home" component={Home} />
                </Switch>
            </div>
          </Router>
        </Provider>
    )
  }
}

export default App;
