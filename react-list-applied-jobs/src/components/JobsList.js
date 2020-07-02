import React from 'react';
import Job from './Job';
import './jobslist.css';

function JobsList({jobs, removeJob}) {
  if(jobs){
    return(
        <div className="job-list">
            <h3>Job List</h3>
            <table className="job-list-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Announced</th>
                  <th>Closes</th>
                  <th>Site</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <Job key={index} index={index} job={job} removeJob={removeJob} />
                ))}
              </tbody>
            </table>
        </div>)
  } else {
    return (
      <div></div>
    )
  }
}

export default JobsList;