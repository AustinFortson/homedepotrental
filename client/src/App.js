import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row } from 'react-bootstrap';
import Home from './components/pages/home/home';
import NoMatch from './components/pages/nomatch/nomatch';
import Navbar1 from './components/navbar/navbar';
import Learn from './components/pages/learn/learn';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar1/>
      <Row id="banner"></Row>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path ='/learn' component={Learn} />
        <Route component={NoMatch} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
