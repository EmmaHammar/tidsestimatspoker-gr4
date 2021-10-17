import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EstimatIssue from '../components/EstimatIssue'

export default function Project({projects,setProjects}) {


    console.log("prjects", projects)

    return (

        <>
        <Header/>
            <div>
                
                {/* <Calculate /> */}
                <EstimatIssue projects={projects} setProjects={setProjects}/>  
            </div>
        <Footer/>
        </>
    )
};