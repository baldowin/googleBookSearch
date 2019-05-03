import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import Title from "./components/Title";
import Saved from "./components/pages/Saved";
import Search from "./components/pages/Search";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
     
        <div>
          <Nav />
          <Title />
          <Switch>
            <Route exact path="/saved" component={Saved} />
            <Route path="/*" component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
