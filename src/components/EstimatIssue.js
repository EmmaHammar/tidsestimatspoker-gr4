import React, { useEffect } from 'react'

import styles from '../styles/Estimate.module.scss'
import { uuid } from 'uuidv4';
import useFetch from 'use-http';
import { useState} from 'react';
import update from 'react-addons-update'

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
console.log(projects);
//FUNCTION THAT ONCHANG INPUT WILL RUN 

            const addEstimateTime=(event)=>{
                if(newmembersDetails.estTimeMember && newmembersDetails.memberId ){ 
              
                        console.log('id of button',event.target.id);
                        console.log(newmembersDetails);
                                        if(typeof(oneProject.issueList=='object')){
                                            console.log('issue list',oneProject.issueList);
                                            oneProject.issueList.filter(issueList=>issueList.issueId==event.target.id).map(issue=>{
                                            let newProject=[...issue.members]
                                            issue.members.push({memberId:newmembersDetails.memberId,estTimeMember:newmembersDetails.estTimeMember})
                                           setOneProject(newProject)
                                            //?????????
                                           
                                           
                                         })
                                        }
                   
                      console.log(oneProject);
                      patch('/projects',{projects:oneProject})
                      .then((data)=>{
                          
                          data=oneProject;
                      })
                    //   setProjects(update(projects, {
                    //     projects: {
                    //         [0]: {oneProject}
                           
                    //     }
                    // }));
                        //    patch ('/projects/1',{projects:oneProject})
                        //     .then((preProject)=>{
                        //         console.log('old',preProject);
                        //         console.log('new',oneProject)
                               // preProject.filter(preProject.id==1).map(preProject=>return console.log('pre project id 1:',preProject);})
                         //}
                       // ) 
              }else
                                     alert('Member is not selected or time is not entered ') ;      
            }
         useEffect(()=>{
            fetch('http://localhost:3000/projects',{
                method: 'PUT',
                headers:{
                'Content-Type':'application/json'
                },
                body: JSON.stringify(oneProject)
            })
            .then(res=>res.json())
              .then(data=>{
                  console.log('from patch',data);
                    let TempArray= projects.filter(projects=>projects.id!=1)
                     TempArray.push(oneProject)
                   setProjects(TempArray)

                     console.log('TempArray',TempArray);
                     
                 })
         },[setProjects]) 
            
                
            
                
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
         { /* <button onClick={devideIssue}>devide</button>*/}
        </div>
        
         </>
       
    )  
}


