import React, { useState, useEffect } from 'react';
import JobsList from './components/JobsList';
import AddJobForm from './components/AddJobForm';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [jobs, setJobs] = useState('');

  const getFromDatabase = () => {
    fetch('http://localhost:3001/jobslist')
    .then(response => response.json())
    .then(response => setJobs(response));
  }

  const addJob = job => {
    const newJobs = [...jobs, { position: job.position, announced: job.announced, closes: job.closes, site: job.site, applied: job.applied }];
    setJobs(newJobs);
  }

  const removeJob = index => {
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    setJobs(newJobs);
  }

  return (
    <React.Fragment>
      <Header header_text="Job Application Recorder"/>
      <AddJobForm addJob={addJob} />
      <button onClick={() => getFromDatabase()}>Update</button> 
      <JobsList jobs={jobs} removeJob={removeJob}/>
      <Footer footer_text="test footer"/>
    </React.Fragment>
  );
}

export default App;
