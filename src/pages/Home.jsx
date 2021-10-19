import React, { useState, useEffect } from 'react';
import ProjectList from '../components/projectList/ProjectList';

export default function Home({projects}) {

    return (
        <ProjectList projects={projects}/>
    )
};


