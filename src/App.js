import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavMenu from './components/NavMenu';

import SmoothScrollbar from './components/SmoothScrollbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Project';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollbar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </SmoothScrollbar>
      </Router>
    </>
  );
}
