import React from 'react';
import { useLocation } from 'react-router-dom'
import styles from '../styles/Project.module.scss'
import { useState } from 'react';
import useFetch from 'use-http';
export default function Project({projects}) {
    const { get,patch,post} = useFetch("http://localhost:3000");

    const location = useLocation()
    const {project} = location.state
    const [newmembersDetails,setnewmembersDetails]=useState({name: '', estTime: '', issueId: ''});
    const [estTimeInfo,setTimeIfo]=useState([{name: '', estTime: '', issueId: ''}])
    console.log(project)

    const addTime=(event)=>{
        
        console.log(newmembersDetails);
      
        
        let newEstTime=[...estTimeInfo]
       
        newEstTime.push(newmembersDetails)
        console.log(newEstTime);
        setTimeIfo(newEstTime)

    console.log(estTimeInfo);
        console.log(event.target.id);
        console.log(newmembersDetails);
        console.log(projects);
        let ProjectId=1
        patch('/projects'+ProjectId,{issueDetaile:estTimeInfo})
        .then(data=>{
            console.log(data);
        
          })  

          
       
      

        
    }


    return (

        <div className={styles.container}>
        
            <h2 className={styles.header}> {project.projectName}</h2>
            
            <div className={styles.participants}>
                {project.participants.map((item, i) => (
                    <button 
                     className={styles.button} 
                     key={i}
                     onClick={()=>{setnewmembersDetails(previousState=>{return{...previousState,name:item.name}})}}
                    >
                        {item.name}
                    </button>
                ))}
            </div>

            <div className={styles.addIssue}>
                <input placeholder="Lägg till ny"></input> 
                <button> Add Issue</button>
            </div>

            <div className={styles.issueList}>
                <div>
                    <p>#</p>
                    <p>Issue</p>
                    <p>Your est</p>
                </div>
                {project.issueList.map((issue, i) => (
                    
                    <div key={i}>
                        <p> {i}</p>
                        <p> {issue.issueTitle}</p>
                        <input  type="number"  id={issue.issueId}  onChange={(event)=>setnewmembersDetails(previousState=>{return{...previousState,estTime:event.target.value,issueId:issue.id}})} />
                        <button onClick={addTime} id={issue.id}>Add your time </button>
                    </div>
                ))}
            </div>

        </div>
        
    )
};