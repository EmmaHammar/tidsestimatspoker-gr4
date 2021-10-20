import React,{useContext} from 'react';
import { useLocation} from 'react-router-dom'
import styles from '../styles/Project.module.scss'
import {ProjectContext }from '../context/projectsContext'


import { useState,useEffect } from 'react';
import useFetch from 'use-http';
import Calculate from '../components/calculate/Calculate';
export default function Project({projects}) {
    const { get,patch,post} = useFetch("http://localhost:3000");

    //Hämtar de specifika projektet som klickats på från route
    const location = useLocation()
    const {project} = location.state
    const [newmembersDetails,setnewmembersDetails]=useState({name: '', estTime: '', issueId: ''});
    const [estTimeInfo,setTimeIfo]=useState([])
    const [issue1,setIssue1]=useState([])
    const [issue2,setIssue2]=useState([])
    const [issue3,setIssue3]=useState([])

    console.log(project)

    const addTime=(event)=>{
        
        console.log(newmembersDetails);
      
        
        let newEstTime=[...estTimeInfo,{name: newmembersDetails.name, estTime: newmembersDetails.estTime, issueId: newmembersDetails.issueId}]
       setTimeIfo(newEstTime);
       
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
            patch('/projects/'+projectId,{issueDetail:estTimeInfo},
            )
                .then(data=>{
                    console.log(data);
                
                }) 
           })

       })
      
    }, [estTimeInfo])
   const calculate=()=>{
       console.log(estTimeInfo);
    let issueNo1=estTimeInfo.filter(project=>project.issueId==1)
    let issueNo2=estTimeInfo.filter(project=>project.issueId==2)
    let issueNo3=estTimeInfo.filter(project=>project.issueId==3)
    let issue4=estTimeInfo.filter(project=>project.issueId==3)
    let issue5=estTimeInfo.filter(project=>project.issueId==3)
    let issue6=estTimeInfo.filter(project=>project.issueId==3)
    let issue7=estTimeInfo.filter(project=>project.issueId==3)
    let issue8=estTimeInfo.filter(project=>project.issueId==3)
    let issue9=estTimeInfo.filter(project=>project.issueId==3)
    let issue=estTimeInfo.filter(project=>project.issueId==3)



       console.log('issue1',issue1);
       console.log(issue1.length);
       setIssue1(issueNo1)
       setIssue2(issueNo2)
       setIssue3(issueNo3)
       if(issue1.length==5){
           console.log('issue1 ok');
          
       }else console.log('issue1 not ok');
       console.log('issue2',issue2);   
       if(issue2.length==5){
        console.log('issue2 ok');
    }else console.log(' issue2not ok');
    if(issue3.length==5){
        console.log('issue3 ok');
    }else console.log(' issue3 not ok');
    if(issue4.length==5){
        console.log('issue4 ok');
    }else console.log(' issue2not ok');
    if(issue5.length==5){
        console.log('issue5 ok');
    }else console.log(' issue5not ok');
    if(issue6.length==6){
        console.log('issue6 ok');
    }else console.log(' issue6not ok');
    if(issue7.length==5){
        console.log('issue7 ok');
    }else console.log(' issue7not ok');
    if(issue8.length==5){
        console.log('issue8 ok');
    }else console.log(' issue8not ok');
    if(issue8.length==5){
        console.log('issue8 ok');
    }else console.log(' issue8not ok');

       
        
       
   
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
            <Calculate issue1={issue1,issue2,issue2} />
        </div>
       
    )
}
