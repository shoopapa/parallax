import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css'
import logo from './logo.svg'
import FireWatch from './Pages/FireWatch.js'
import SvgTest from './Pages/SvgTest.js'
import BlackGirl from './Pages/Art/BlackGirl/BlackGirl.js'
import Anomaly from './Pages/Art/Anomaly/Anomaly.js'

import { ParallaxProvider } from 'react-scroll-parallax';

document.body.addEventListener('touchstart', function( event ){
  if( this.scrollTop === 0 ) {
      this.scrollTop += 1;
  } else if( this.scrollTop + this.offsetHeight >= this.scrollHeight ) {
      this.scrollTop -= 1;
  }
})

export default function App() {
  return (
    <Router>
        <ParallaxProvider>
          <Switch>
            <Route path="/firewatch">
              <FireWatch />
            </Route>
            <Route path="/blackgirl">
              <BlackGirl />
            </Route>
            <Route path="/anomaly">
              <Anomaly />
            </Route>
            <Route path="/parallax/svg">
              <SvgTest />
            </Route>
            <Route path="/parallax">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ParallaxProvider>
    </Router>
  );
}

function Home() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='/blackgirl'> /firewatch
        </Link>
        <Link to='/parallax/firewatch'> /parallax/firewatch
        </Link>
      </header>
    </div>
  );
}
