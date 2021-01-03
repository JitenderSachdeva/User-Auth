import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import About from "./Components/Hooks/About";
import Contact from "./Components/Hooks/Contact";
import Home from "./Components/Hooks/Home";
import Navbar from "./Components/Hooks/Layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./Components/Hooks/Layout/NotFound";
import AddUser from "./Components/Hooks/User/AddUser";
import EditUser from "./Components/Hooks/User/Edituser";
import { Provider } from "react-redux";
import store from "./Components/Store/";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/adduser" component={AddUser} />
          <Route exact path="/edituser/:id" component={EditUser} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
