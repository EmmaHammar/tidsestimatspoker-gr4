import React,{useContext} from 'react';
import { useLocation} from 'react-router-dom'
import styles from '../styles/Project.module.scss'
import {ProjectContext }from '../context/projectsContext'


import { useState,useEffect } from 'react';
import useFetch from 'use-http';
import EstProject from '../components/calculate/EstProject';
import EstProject2 from '../components/calculate/EstProject2';

export default function Project({projects}) {
    const { get,patch,post} = useFetch("http://localhost:3000");

    //Hämtar de specifika projektet som klickats på från route
    const location = useLocation()
    const {project} = location.state
    const [newmembersDetails,setnewmembersDetails]=useState({name: '', estTime: '', issueId: ''});
    const [estTimeInfo,setTimeIfo]=useState([])
    const [showCalc1, setShowCalc1]=useState(false);
    const [showCalc2, setShowCalc2]=useState(false);

    const [issue1, setIssue1]=useState([]);
    const [issue2, setIssue2]=useState([]);


    // console.log(project)

    const addTime=(event)=>{
        
        // console.log(newmembersDetails);
      
        
        let newEstTime=[...estTimeInfo,{name: newmembersDetails.name, estTime: newmembersDetails.estTime, issueId: newmembersDetails.issueId}]
       setTimeIfo(newEstTime);      
    }
    var projectId = localStorage.getItem('projectId');
    console.log("estTimeInfo", estTimeInfo);


    useEffect(() => {
        // console.log(projects);
       projects.filter(project=>project.id==1).map((project)=>{
      
        //    console.log(project.issueList);
           project.issueList.map((issueList)=>{
            patch('/projects/'+projectId,{issueDetail:estTimeInfo},
            )
                .then(data=>{
                    // console.log(data);
                
                }) 
           })

       })
      
    }, [estTimeInfo])
   const calculate=()=>{
       console.log(estTimeInfo);
    let issue1=estTimeInfo.filter(project=>project.issueId==1)
    let issue2=estTimeInfo.filter(project=>project.issueId==2)
   



    //    console.log('issue1',issue1);
    //    console.log(issue1.length);
       if(issue1.length==(project.participants).length){
           console.log('issue1 ok');
           setShowCalc1(true);
           setIssue1(issue1);   
       }else console.log('issue1 not ok');
       
       if (issue2 != []) {
            console.log("issue2 state sparat för var ej noll");
        } else {
            console.log("issue2 är noll -> ej spara");
        }

       if(issue2.length==(project.participants).length){
        console.log('issue2 ok');
            setIssue2(issue2);
            setShowCalc2(true);


    }else console.log(' issue2not ok');
   
      }
      console.log('issue1',issue1);

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
            {showCalc1 ? <EstProject issue1={issue1}   /> : ""}
            {showCalc2 ? <EstProject2   issue2={issue2}  /> : ""}


        </div>
       
    )
}