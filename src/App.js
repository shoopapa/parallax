import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'
import logo from './logo.svg'
import FireWatch from './Pages/FireWatch.js'
import SvgTest from './Pages/SvgTest.js'

import { ParallaxProvider } from 'react-scroll-parallax';
 

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/firewatch">
            <ParallaxProvider>
              <FireWatch />
            </ParallaxProvider>
          </Route>
          <Route path="/svg">
            <ParallaxProvider>
              <SvgTest />
            </ParallaxProvider>
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
