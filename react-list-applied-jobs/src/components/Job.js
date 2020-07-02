import React from 'react';

function Job({ index, job, removeJob }) {
    return(
        <tr>
          <td>{ job.position }</td> 
          <td>{ job.announced }</td>
          <td>{ job.closes }</td>
          <td>{ job.site }</td>     
          <button onClick={() => removeJob(index)}>x</button>     
        </tr>)
}

export default Job;