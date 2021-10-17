import React from 'react'
import './styles/style.css';
import Home from './pages/Home';
import AddProject from './pages/AddProject';
import Project from './pages/Project'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Estimate from './pages/Estimate';
import { useState, useEffect } from 'react';
import useFetch from 'use-http';

function App() {
  const { get} = useFetch("http://localhost:3000");
    // const { get, post, del, patch } = useFetch("http://localhost:3000");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects();
    }, [])

    const getProjects = () => {
        get("/projects")
            .then(data => {
                setProjects(data);
            })
    };
console.log("projects from App",projects);
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
          <Project projects={projects} setProjects={setProjects}/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;

