import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <main className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </main>
      </Router>
    </Fragment>
  );
};

export default App;
