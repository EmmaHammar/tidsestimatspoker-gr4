import React, {useState, useContext} from 'react'
import styles from './Form.module.scss'
import { InputContext} from '../../context/formContext'
import { ProjectContext} from '../../context/projectsContext'
import useFetch from 'use-http';
import { Link } from 'react-router-dom';

import { 
    Dropdown, 
    Sockerbit, 
    Confirmation, 
    IssueEdit, 
    InputIssue, 
    InputParticipants 
} from '../../components/form'


export default function Form() {

let { projects, setProjects} = useContext(ProjectContext);

let { emptyParticipants, emptyIssues, toggle, setToggle} = useContext(InputContext);

    const {post} = useFetch("http://localhost:3000");

    const initialValues = {
        id: '',
        projectName: '',
        projectDesc: '',
        estComplete:'false',
        participants:[],
        issueList: []
        };

    const [project, setProject] = useState(initialValues);
    
    //Add issue to object
    const addIssue = (input, color, id) => {

        if (input.issueTitle.trim()) {

            input.id = id;
            input.color = color;
            input.participants = project.participants

            const newIssue = [...project.issueList]
            newIssue.push(input);
            
            setProject({...project, issueList: newIssue})

            emptyIssues()   
        }
    }

    //Add Participans to object
    const addParticipants = (input, color, id) => {

        if (input.name.trim()) {

            input.id = id;
            input.color = color;
            const newParticipant = [...project.participants]
            newParticipant.push(input);
            
            setProject({...project, participants: newParticipant})
           
            emptyParticipants()
         
        }
    }

    //Update Issue in object
    const updateInput = (editIssue) => {

        let update = [...project.issueList]
        //Set search terms
        const findValue = (element) => element.id === editIssue.id;
        //Find index of issue
        let key = update.findIndex(findValue);

        //Update issue
        update[key] = {...update[key] = editIssue}
        
        setProject({...project, issueList: update})
    }
    
    //Add object to State
    const addProjectState =(newProject) => {

        const array = [...projects]

        console.log(array)

        array.push(newProject);
        setProjects(array) 
    }  

    //Add object to DB
    const addProjectDb =(event) => {
        event.preventDefault();
        const newProject = project
        post("/projects/", newProject)
        .then(data => {
            //Logs out saved data
            console.log(data)
            //Update State
            addProjectState(newProject)
            //Empty State
            setProject(initialValues)
            //Toggle EditBox
            setToggle(false)
        })
    }  
  
    return (
        <div className={styles.formWrapper}>
            <form onSubmit={addProjectDb} 
                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            >
            
                <label> Project Name</label>
                <input 
                    type="text"
                    value={project.projectName}
                    onChange={({ target }) => setProject({ ...project, projectName: target.value })} 
                />

                <label> Project Description</label>
                <input 
                    type="text"
                    value={project.projectDesc}
                    onChange={({ target }) => setProject({ ...project, projectDesc: target.value })} 
                />

                <Dropdown title={"Participants"} >
                    <InputParticipants title={"Name"} property={"part"}/>
                    <Confirmation addInput={addParticipants} input={"participants"}/>
                    {project.participants.length ? <Sockerbit list={project.participants}/> : ""}
                </Dropdown>

                <Dropdown title={"Issues"}>
                    <InputIssue title={"Title"} property={"issueTitle"} />
                    <InputIssue title={"Description"} property={"desc"}/>
                    <Confirmation addInput={addIssue} input={"issue"}/>
                    {project.issueList.length ? <Sockerbit list={project.issueList}/> : ""}
                    {toggle ? <IssueEdit updateInput={updateInput} /> : ""}
                </Dropdown>

                <button className={styles.submitButton} type="submit">Add Project</button>
            </form>
            <div className={styles.listHeader}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className={styles.backButton}>Tillbaka</button>  
                </Link>
            </div>
        </div>
    )
}


