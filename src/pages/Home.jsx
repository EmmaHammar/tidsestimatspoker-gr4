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

    const [members, setMembers] = useState([]);
    const [clickedId, setClickedId] = useState(Number);

    useEffect(() => {
        getProjects();

        let members = ["Axel", "Emma", "Sandra", "Sara K", "Sara M"];
        setMembers(members);
    }, [])
    
    const getProjects = () => {
        get("/projects")
            .then(data => {
                setProjects(data);
            })
    };

    const handleClick = (evt) => {
        setClickedId(evt.target.id);
    }

    return (
        <>
            <Header />
            <ProjectList projects={projects}/>

            {members.map( (member, i) => (
                <button onClick={handleClick} id={++i} key={i}>{member}</button>
            )) }
            
            <Footer />
        </>
    )
};


