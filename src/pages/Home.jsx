import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectList from '../components/ProjectList';
import useFetch from 'use-http';
import { useState, useEffect } from 'react';


export default function Home() {

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

    return (
        <>
            <Header />
            <ProjectList projects={projects}/>
            <Footer />
        </>
    )
};