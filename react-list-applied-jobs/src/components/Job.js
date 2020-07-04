import React from 'react';

function Job({ job, jobsChanged }) {

  const removeJob = (id) => {
    fetch('http://localhost:3001/deletejob/' + id);  
    jobsChanged();
  }

  return(
    <tr>
      <td>{ job.position }</td>
      <td>{ job.company }</td> 
      <td>{ job.announced }</td>
      <td>{ job.closes }</td>
      <td>{ job.site }</td>
      <td><button onClick={() => removeJob(job.id)}>Delete</button></td>
    </tr>)
}

export default Job;