import React, {useContext, useEffect} from 'react';
import ProjectList from '../components/projectList/ProjectList';
import { ProjectContext} from '../context/projectsContext'
import useFetch from 'use-http';

export default function Home() {

    let { projects, setProjects} = useContext(ProjectContext);

    //Gets data form Db
    const { get} = useFetch("http://localhost:3000");

    useEffect(() => {
        getProjects();
    }, [])

    const getProjects = () => {
        get("/projects")
            .then(data => {
                setProjects(data)
            })
    };

    return (
        <>
            {projects ? <ProjectList/> : ""}
        </> 
    )
};


