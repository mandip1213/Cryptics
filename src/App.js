import React from 'react';
import Cryption from './components/crypt/Cryption';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from './components/hero/Hero';

import Card from './components/card/Card';
import Documentation from './components/documentation/Documentation';


const App = () => {

  return (<>
    <Router>
      <Switch>

        <Route exact path="/">
          <>
            <Hero />
            <Cryption />
            <Card />
          </>
        </Route>

        <Route exact path="/docs"><Documentation /></Route>
      </Switch>
    </Router>




  </>);
}


export default App


