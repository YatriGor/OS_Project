// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Collaboration from "./components/Collaboration";
// import Roadmap from "./components/Roadmap";
// import SJF from "./components/SJF";
// import FIFOPageReplacement from "./components/FIFO";
// import CLookDiskScheduling from './components/CLook';
// import DP from './components/DP';
// import ButtonGradient from "./assets/svg/ButtonGradient";

// const App = () => {
//   return (
//     <Router>
//       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
//         <Header />
//         <Hero />
//         <Collaboration />
//         <Switch>
//           <Route exact path="/" component={Roadmap} />
//           <Route exact path="/SJF" component={SJF} />
//           <Route exact path="/DP" component={DP} />
//           <Route exact path="/CLook" component={CLookDiskScheduling} />
//           <Route exact path="/FIFO" component={FIFOPageReplacement} />
//         </Switch>
//       </div>
//       <ButtonGradient /> 
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collaboration from "./components/Collaboration";
import Roadmap from "./components/Roadmap";
import SJF from "./components/SJF";
import FIFOPageReplacement from "./components/FIFO";
import CLookDiskScheduling from './components/CLook';
import ButtonGradient from "./assets/svg/ButtonGradient";
import DP from './components/DP'
import ReactDOM from 'react-dom';

const App = () => {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Collaboration />
        <Roadmap />
        <CLookDiskScheduling/>
        <SJF/>
        <FIFOPageReplacement/> 
        <DP/>
        
      </div>
      <ButtonGradient /> 
    </>
  );
};

export default App;