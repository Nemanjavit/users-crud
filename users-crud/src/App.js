import React from "react";
import "./App.css";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
      </div>
    </Router>
  );
}

export default App;
