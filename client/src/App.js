import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import Saved from "./pages/saved";
import Nav from "./components/navbar";
import './app.css'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/saved" component={Saved} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
