import React from "react";
import "./App.css";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
      </div>
    </Router>
  );
}

export default App;
