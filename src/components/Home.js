import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Project from './Project';
import AddProject from './AddProject';
import useFetch from 'use-http';
import { useState, useEffect } from 'react';

export default function Home() {

    const { get, post, del, patch } = useFetch("http://localhost:3000");
    const [projects, setProjects] = useState([]);

    const [selected, setSelected] = useState(null);

    useEffect(() => {
        getProjects();
    }, [])

    const getProjects = () => {
        get("/projects")
            .then(data => {
                setProjects(data);
            })
    };

    const toggle = (i) => {
        if (selected == i) {
            setSelected(null)
        } else {
            setSelected(i)
        }
    }

    return (
        <>
            <Header />

            <div className="listContainer">

                <div className="listHeader">
                    <h2>Projects</h2>
                    <AddProject />
                </div>

                {projects.map((item, i) => (

                    <div className="listItem" key={item.projectId}>
                        <div className="title">
                            <h3>{item.projectName}
                                <span onClick={() => toggle(i)}>
                                    {selected === i ? "-" : "+"}</span>
                            </h3>
                        </div>
                        {selected == i ? <div className="content">
                            {item.projectDesc}
                        <div className="listItemFooter">
                            {item.estComplete ? <i className="fas fa-check-circle"/> : <i className="fas fa-exclamation-circle"/>}
                            <button onClick={() => <Project />}> Visit Project </button>
                        </div>
                        </div> : ""
                        }
                    </div>
                ))}

            </div>

            <Footer />
        </>
    )
};