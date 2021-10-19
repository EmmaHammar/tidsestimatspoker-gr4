import React, { useEffect } from 'react'

import styles from '../styles/Estimate.module.scss'
import { uuid } from 'uuidv4';
import useFetch from 'use-http';
import { useState} from 'react';


export default function EstimatIssue({projects,setProjects}) {
   
        const { get,patch,post} = useFetch("http://localhost:3000");
        // Selected project
        const [oneProject,setOneProject]=useState([])
        //Members name 
        const [members, setMembers] = useState([]);
        //Temp Array 
        const [TempArray,setTempArray]=useState([]);
        const[memberInfo,setMemberinfo]=useState([])
        //object with memeberId and estimateTime
       const [newmembersDetails,setnewmembersDetails]=useState([]);
//FETCH SELECTED PROJECT DATA 
useEffect(() => {
    getProjects();
    let members = ["Axel", "Emma", "Sandra", "Sara K", "Sara M"];
    setMembers(members);
}, [newmembersDetails])

const getProjects = () => {
    get("/projects/1")
        .then(data => { 
            
            setOneProject(data);
           
        })
        
};


//FUNCTION THAT ONCHANG INPUT WILL RUN 
const addEstimateTime=(event)=>{
    if(newmembersDetails.estTimeMember && newmembersDetails.memberId ){ 
  
            console.log('id of button',event.target.id);
            console.log(newmembersDetails);
            if(typeof(oneProject.issueList=='object')){
                 oneProject.issueList.filter(issueList=>issueList.issueId==event.target.id).map(issue=>{
                     const newMembers=[...issue.members] 
                     newMembers.push(newmembersDetails)
                     setOneProject({...oneProject.issueList.issue,members:newMembers})  
                 })
                         
                }
       
          
  }else
                         alert('Member is not selected or time is not entered ') ;      
}

console.log('oneProject',oneProject);
console.log('project',projects);
            // const addEstimateTime=(event)=>{
            //     if(newmembersDetails.estTimeMember && newmembersDetails.memberId ){ 
              
            //             console.log('id of button',event.target.id);
            //             console.log(newmembersDetails);
            //                             if(typeof(oneProject.issueList=='object')){
            //                                 console.log('issue list',oneProject.issueList);
            //                                 oneProject.issueList.filter(issueList=>issueList.issueId==event.target.id).map(issue=>{
            //                                 let newProject=[...issue.members]
            //                                 issue.members.push({memberId:newmembersDetails.memberId,estTimeMember:newmembersDetails.estTimeMember})
            //                                setOneProject(newProject)
                                            
                                           
                                           
            //                              })
            //                             }
                   
            //           console.log(oneProject);
            //           patch('/projects/1',{members:newmembersDetails})
            //           .then((data)=>{
            //               if(typeof(data.issueList=='object')){
            //                   data.issueList.filter(issueList=>issueList.issueId==event.target.id).map(issue=>{
            //                     {setTempArray(prevTemp=>[...prevTemp,{memberId:newmembersDetails.memberId,estTimeMember:newmembersDetails.estTimeMember}])}
                               
            //                     let newMember=[...issue.members] 
            //                     issue.members.push(newmembersDetails)
                              
            //                   })
            //               }
                          
            //           })
                   
                      
            //   }else
            //                          alert('Member is not selected or time is not entered ') ;      
            // }
            // console.log(TempArray);
        
    return (
       
        <>
        <div>
      {projects.filter(project=>project.id===1).map((project) => <div><h1>{project.projectName}</h1></div>)}
      </div>
       
      
        <div className={styles.container}>  
        {members.map( (member, i) => (
                <button onClick={()=>{setnewmembersDetails(previousState=>{return{...previousState,memberId:member}})}}  key={i}>{member}</button>
            )) }    
           <table className='table table-bordered'>
               <thead className='thead-dark'>
                   <tr>
                      <th>Add your Estimated time for each Issue </th>
                      
                   </tr>
               </thead>
               <tbody>
                 
                   {projects.filter(project=>project.id===1).map((project) => <div>
                    {
                (typeof(project.issueList)==='object')?
                                        
                                        
                <div key={uuid}>
                     {project.issueList.map((issueItem,k)=>
                      <tr>
                        <td> {issueItem.issueId}</td>
                        <td>{issueItem.title}</td>
                         <td><input  type="number"  id={issueItem.issueId}  onChange={(event)=>{setnewmembersDetails(previousState=>{return{...previousState,estTimeMember:event.target.value}})}} /> </td>
                        <td> <button onClick={addEstimateTime} id={issueItem.issueId}>Add estimated time</button></td>
                    </tr> )}
               
                </div> 
                :null }
                   </div>)}
                 
               </tbody>
           </table>
        
        </div>
        
         </>
       
    )  
}


