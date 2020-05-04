import React from "react";
import "./App.css";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import PostsPage from "./components/PostsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={PostsPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/posts" component={PostsPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
