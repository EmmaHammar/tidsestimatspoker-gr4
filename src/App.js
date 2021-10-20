import React, { useState, useEffect } from 'react';
import './styles/style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddProject from './pages/AddProject';
import Project from './pages/Project'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {ProjectProvider }from './context/projectsContext'
import useFetch from 'use-http';

function App() {
  const { get} = useFetch("http://localhost:3000");
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
  return (

    <Router>
    <Header/>
      <ProjectProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/AddProject">
            <AddProject />
          </Route>
          <Route exact path="/Project">
            <Project projects={projects}/>
          </Route>
        </Switch>
      </ProjectProvider>
    <Footer/>
  </Router>
     
  );
}

export default App;

