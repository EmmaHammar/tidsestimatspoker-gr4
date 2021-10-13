import React from 'react'
import './styles/style.css';
import Home from './pages/Home';
import AddProject from './pages/AddProject';
import Project from './pages/Project'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/AddProject">
          <AddProject />
        </Route>
        <Route exact path="/Project">
          <Project />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

