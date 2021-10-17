import React, { useEffect } from 'react'

import styles from '../styles/Estimate.module.scss'
import { uuid } from 'uuidv4';
import useFetch from 'use-http';
import { useState} from 'react';


export default function EstimatIssue({projects,setProjects}) {
   
        const { get,post} = useFetch("http://localhost:3000");
        const [oneProject,setOneProject]=useState([])
        const[estMembers, setEstmembers]=useState([])
        
      // const [newEstMembersDetails,setnewEstMembersDetails]=useState({memberId:"",estTimeMember:""});
       const [newEstMembersDetails,setnewEstMembersDetails]=useState([]);
//FETCH SELECTED PROJECT DATA 
useEffect(() => {
    getProjects();
}, [])

const getProjects = () => {
    get("/projects/1")
        .then(data => { 
            
            setOneProject(data);
           
        })
};
console.log(oneProject);
//FUNCTION THAT ONCHANG INPUT WILL RUN 
        const addEstimateTime=(event)=>{
            event.preventDefault();
                    console.log(event.target.id);
                    console.log(newEstMembersDetails);
                    if(newEstMembersDetails.estTimeMember){
                        setEstmembers(prevStateEstMember=>{return [...prevStateEstMember,{issueId:Number(event.target.id),estMembers:newEstMembersDetails.estTimeMember,memberId:newEstMembersDetails.memberId}]})
                            
                    }
                  
            }
           
       
        const devideIssue=()=>{
            console.log(oneProject);
            console.log(estMembers);
             if(typeof(estMembers=='object')){
                 estMembers.filter(issueId=>issueId.issueId==11).map((issueId,i)=>{
                     let TempArray=[{issueId}];
                     console.log('TemArray',TempArray);
                     console.log(issueId);

                     setOneProject(oneProject=>{

                        if(typeof(oneProject.issueList=='object')){return oneProject.issueList.filter(goToIssueId=>goToIssueId.issueId==11 ). map((goToIssueId,k)=>{
                           console.log(goToIssueId)
                        goToIssueId.estMembers={issueId}
                        }
                        
                    )}
                    })
                     })
                  
             }
                 
        }
      
        
    return (
       
        <>
      {/* THIS PART MUST BE DELETED AFTER #6 ISSUE OF REPO  */}
                <div>
                <button onClick={()=>{setnewEstMembersDetails(previousState=>{return{...previousState,memberId:"Sara"}})}}>Sara</button>
                </div>
                <div>
                <button onClick={()=>{setnewEstMembersDetails(previousState=>{return{...previousState,memberId:"Emma"}})}}>Emma</button>
                </div>
        <div className={styles.container}>      
           <table className='table table-bordered'>
               <thead className='thead-dark'>
                   <tr>
                      <th>Add your Estimated time for each Issue </th>
                      
                   </tr>
               </thead>
               <tbody>
                
                   {projects.filter(project=>project.id==1).map((project) => <div>
                    {
                (typeof(project.issueList)=='object')?
                                        
                                        
                <div key={uuid}>
                     {project.issueList.map((issueItem,k)=>
                      <tr>
                        <td> {issueItem.issueId}</td>
                        <td>{issueItem.title}</td>
                         <td><input  type="number"  id={issueItem.issueId}  onChange={(event)=>{setnewEstMembersDetails(previousState=>{return{...previousState,estTimeMember:event.target.value}})}} /> </td>
                        <td> <button onClick={addEstimateTime} id={issueItem.issueId}>Add estimated time</button></td>
                    </tr> )}
               
                </div> 
                :null }
                   </div>)}
                 
               </tbody>
           </table>
           <button onClick={devideIssue}>devide</button>
        </div>
        
         </>
       
    )  
}


