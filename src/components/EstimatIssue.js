import React from 'react'

import styles from '../styles/Estimate.module.scss'
import { uuid } from 'uuidv4';
import useFetch from 'use-http';
import { useState} from 'react';
export default function EstimatIssue({projects,setProjects}) {
        const { patch} = useFetch("http://localhost:3000");
       
//FUNCTION THAT ONCHANG INPUT WILL RUN 
        const addEstimateTime=(event)=>{
            {console.log('Input Id:',event.target.id)}
            {console.log('Input value:',event.target.value)}
            projects.filter(projectId=>projectId.id==1).map((goToIssueList)=>
            
            patch('/projects/'+ 1,{estTimeMember:event.target.value})
            .then(goToIssueList=>(
                <div>
                    {console.log("goToIssueList",goToIssueList.issueList)}
                    
                    {(typeof(goToIssueList.issueList=='object'))? 
                        <div>
                           
                            {goToIssueList.issueList.filter(goToIssueId=>goToIssueId.issueId==event.target.id ).map((goToIssueId) =>
                                    <div>
                                        {console.log(goToIssueId)}
                                        { (typeof(goToIssueId.estMembers=='object'))?
                                            <div>
                                            {goToIssueId.estMembers.filter(goToMemberId=>goToMemberId.memberId==2).map(goToMemberId=>
                                            <div key={uuid}>
                                           
                                               
                                                    {/* { setProjects(goToMemberId=>{return[...goToMemberId,{estTimeMember:event.target.id}]})}  */}
                                                    {console.log('EstTimeMember value in Array',goToMemberId.estTimeMember)}
                                                    {console.log('EstTimeMember value from input',event.target.value)}                                          
                                                </div>
                                            
                                                )}
                                            </div>
                                        : null}
                                    </div>
                                )}
                        </div>
                    : null}
                </div>)
                )
                )
        }
       
    return (
        <div className={styles.estimateprojektContainer} >
            {projects.filter(issue=>issue.id==1).map((issue, i) => (
                <div key={uuid}>
                    <h1>{issue.projectName}</h1>
                        {
                            (typeof(issue.issueList)=='object')?
                                 <div className={styles.issuesBoxContainer}>
                                    <div className={styles.issueList}>
                                        
                                        {issue.issueList.map((issueItem,k)=>
                                            <div>
                                                <div  className={styles.issueListNummber}>
                                                    {issueItem.issueId} 
                                                </div>
                                               
                                                <div  className={styles.issueListTitle}>
                                                   
                                                    {issueItem.title} 
                                                </div>
                                                <div key={uuid}>
                                                <input  type="number"  id={issueItem.issueId}  onChange={addEstimateTime} />
                                                </div>
                                                
                                            </div>
                                            
                                        )}
                                    </div> 
                                </div>
                            :
                            null
                        }
                              
                
                </div>

            ))}
            <div>
        
            </div>
         </div>
  
           
        
         
    )  
}
