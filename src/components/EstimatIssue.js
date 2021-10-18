import React, { useEffect } from 'react'

import styles from '../styles/Estimate.module.scss'
import { uuid } from 'uuidv4';
import useFetch from 'use-http';
import { useState} from 'react';


export default function EstimatIssue({projects,setProjects}) {
   
        const { get,patch} = useFetch("http://localhost:3000");
        const [oneProject,setOneProject]=useState([])
        
        const [members, setMembers] = useState([]);
        const [TempArray,setTempArray]=useState([]);
      // const [newmembersDetails,setnewmembersDetails]=useState({memberId:"",estTimeMember:""});
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
console.log(oneProject);

//FUNCTION THAT ONCHANG INPUT WILL RUN 
      
            const addEstimateTime=(event)=>{
                if(newmembersDetails.estTimeMember && newmembersDetails.memberId ){ 
                event.preventDefault();
                        console.log('id of button',event.target.id);
                        console.log(newmembersDetails);
                        console.log(oneProject);
                        setOneProject(preProject=>{
                                   
                                        if(typeof(preProject.issueList=='object')){
                                            console.log('issue list',preProject.issueList);
                                            preProject.issueList.filter(issueList=>issueList.issueId==event.target.id).map((issueId)=>{
                                                console.log('issue id that is equal to button id',issueId);
                                              issueId.members.push({memberId:newmembersDetails.memberId,estTimeMember:newmembersDetails.estTimeMember})
                                             console.log(issueId.members);
                                            //?????????
                                            
                             
                                            })
                                        }
                                     
                        })
                           patch ('/projects/1',{projects:oneProject})
                            .then((preProject)=>{
                                console.log('old',preProject);
                                console.log('new',oneProject)
                               // preProject.filter(preProject.id==1).map(preProject=>return console.log('pre project id 1:',preProject);})
                            

                            }
                                    
                                           
                                            ) 
                                      
                               
                               
                                     
                 }else
                                     alert('Member is not selected or time is not entered ') ;      
                                    
                                
                      
                }
                
                //??????
        //         useEffect(() => {
        //         patch ('/projects/1',{projects:oneProject})
        //         .then((preProject)=>{
        //             console.log('old',preProject);
        //             console.log('new',oneProject);}
        //    )} ,[] )
//FUNCTION FOR DEVIDIND THE SPECIFIC ISSUE DETAILS       
        // const devideIssue=()=>{
        //     console.log(oneProject);
        //     console.log('array of est members',members);
            
        //      if(typeof(members=='object')){
        //         members.filter(issueId=>issueId.issueId==11).map((issueId)=>
                  
        //         <div>
        //         {setTempArray(prevTemp=>[...prevTemp,{memberId:issueId.memberId,estTimeMember:issueId.estTimeMember}])}</div>)
        //                 console.log('TemArray',TempArray);
                   

        //              setOneProject(oneProject=>{

        //                 if(typeof(oneProject.issueList=='object')){return oneProject.issueList.filter(goToIssueId=>goToIssueId.issueId==11 ). map((goToIssueId,k)=>{
        //                    console.log(goToIssueId)
        //                 goToIssueId.members={TempArray}
        //                 }
                        
        //             )}
        //             })
                     
                 
                  
        //      }

                 
        // }
      
        
    return (
       
        <>
        <div>
      {projects.filter(project=>project.id==1).map((project) => <div><h1>{project.projectName}</h1></div>)}
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
                 
                   {projects.filter(project=>project.id==1).map((project) => <div>
                    {
                (typeof(project.issueList)=='object')?
                                        
                                        
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
         { /* <button onClick={devideIssue}>devide</button>*/}
        </div>
        
         </>
       
    )  
}


