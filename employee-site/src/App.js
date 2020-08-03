
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, CheckIn, SelfReport, Resources } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/checkin" exact component={() => <CheckIn />} />
          <Route path="/selfreport" exact component={() => <SelfReport />} />
          <Route path="/resources" exact component={() => <Resources />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;