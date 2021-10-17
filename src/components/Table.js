import React from 'react'
import { uuid } from 'uuidv4';

export default function Table(projects,devideIssue,addEstimateTime) {
    return (
        <>
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
          { console.log(projects)}
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
