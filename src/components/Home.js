import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Project from './Project';
import AddProject from './AddProject';
import useFetch from 'use-http';
import { useState, useEffect } from 'react';

export default function Home() {

    const {get, post, del, patch} = useFetch ("http://localhost:3000");
    const [projects, setProjects] = useState([]);

    // console.log("projects", projects);
    useEffect(() => {
        getProjects();
    }, [])

    const getProjects = () => {
        get("/projects")
        .then(data => {
            console.log("data", data);
            setProjects(data);
        })
    };

    return (
        <div>
            <Header />
            <Project />
            <AddProject />
            <Footer />
        </div>
    )
};