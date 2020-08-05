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

import { ParallaxProvider } from 'react-scroll-parallax';
 

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/parallax/firewatch">
            <ParallaxProvider>
              <FireWatch />
            </ParallaxProvider>
          </Route>
          <Route path="/blackgirl">
            <ParallaxProvider>
              <BlackGirl />
            </ParallaxProvider>
          </Route>
          <Route path="/parallax/svg">
            <ParallaxProvider>
              <SvgTest />
            </ParallaxProvider>
          </Route>
          <Route path="/parallax">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
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
