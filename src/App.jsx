import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import SJF from "./components/SJF";
import FIFOPageReplacement from "./components/FIFO";
import CLookDiskScheduling from './components/CLook';
import DP from './components/DP';
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  return (
    <Router>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Roadmap/>
        {/* Wrap Routes inside Switch */}
        <Switch>
          <Route exact path="/" component={Roadmap} />
          <Route path="/SJF" component={SJF} />
          <Route path="/DP" component={DP} />
          <Route path="/CLook" component={CLookDiskScheduling} />
          <Route path="/FIFO" component={FIFOPageReplacement} />
        </Switch> 
      </div>
      <ButtonGradient /> 
    </Router>
  );
};

export default App;
