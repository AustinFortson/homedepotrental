import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row } from 'react-bootstrap';
import Home from './components/pages/home/home';
import NoMatch from './components/pages/nomatch/nomatch';
import Repairs from './components/pages/repairs/repairs';
import RentTools from './components/pages/renttools/renttools';
import FAQ from './components/pages/faq/faq';
import ViewTool from './components/pages/viewtool/viewtool'
import Cart from './components/pages/cart/cart';
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
        <Route path ='/repairs' component={Repairs} />
        <Route path ='/faq' component={FAQ} />
        <Route path ='/renttools' component={RentTools}/>
        <Route path ='/cart' component={Cart}/>
        <Route path ='/viewtool' component={ViewTool}/>
        <Route component={NoMatch} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
