import React from 'react';
import Job from './Job';
import './jobslist.css';

function JobsList({ jobs, jobsChanged }) {
  if(jobs){
    console.log(jobs);
    return(
        <div className="job-list">
            <h3>Job List</h3>
            <table className="job-list-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Announced</th>
                  <th>Closes</th>
                  <th>Site</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <Job key={job.id} job={job} jobsChanged={jobsChanged} />
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