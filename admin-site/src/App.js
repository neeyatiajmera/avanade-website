
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, PPE, Report, Resources, Dashboard } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/ppe" exact component={() => <PPE />} />
          <Route path="/dashboard" exact component={() => <Dashboard />} />
          <Route path="/selfreport" exact component={() => <Report />} />
          <Route path="/resources" exact component={() => <Resources />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;