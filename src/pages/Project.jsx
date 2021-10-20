import React from 'react';
import { useLocation } from 'react-router-dom'
import styles from '../styles/Project.module.scss'
import { useState,useEffect } from 'react';
import useFetch from 'use-http';
export default function Project({projects}) {
    const { get,patch,post} = useFetch("http://localhost:3000");

    const location = useLocation()
    const {project} = location.state
    const [newmembersDetails,setnewmembersDetails]=useState({name: '', estTime: '', issueId: ''});
    const [estTimeInfo,setTimeIfo]=useState([])
    console.log(project)

    const addTime=(event)=>{
        
        console.log(newmembersDetails);
      
        
        let newEstTime=[...estTimeInfo,{name: newmembersDetails.name, estTime: newmembersDetails.estTime, issueId: newmembersDetails.issueId}]
       setTimeIfo(newEstTime)
        
        // console.log(newEstTime);

        // console.log(estTimeInfo);
        // console.log(event.target.id);
        // console.log(newmembersDetails);
        // console.log(projects);
        // let ProjectId=1
        // patch('/projects/1',{issueDetail:estTimeInfo})
        // .then(data=>{
        //     console.log(data);
        
        //   })  

          
       
      

        
    }
    var projectId = localStorage.getItem('projectId');
    console.log(estTimeInfo);
    useEffect(() => {
        console.log(projects);
       projects.filter(project=>project.id==1).map((project)=>{
      
           console.log(project.issueList);
           project.issueList.map((issueList)=>{
            patch('/projects/'+projectId,{issueDetail:estTimeInfo})
                .then(data=>{
                    console.log(data);
                
                }) 
           })

       })
      
    }, [estTimeInfo])
   const calculate=()=>{
       console.log(estTimeInfo);
    let issue1=estTimeInfo.filter(project=>project.issueId==1)
    let issue2=estTimeInfo.filter(project=>project.issueId==2)
    let issue3=estTimeInfo.filter(project=>project.issueId==3)


       console.log('issue1',issue1);
       
        
     
      
       
          let estTimeIssue1=0
        
          console.log(estTimeIssue1);
       
       
   
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
                        <input  type="number"  id={i+1}  onChange={(event)=>setnewmembersDetails(previousState=>{return{...previousState,estTime:event.target.value,issueId:event.target.id}})} />
                        <button onClick={addTime} id={issue.id}>Add your time </button>
                    </div>
                ))}
            </div>
            <div><button onClick={calculate}>calculate</button></div>
        </div>
       
    )
};