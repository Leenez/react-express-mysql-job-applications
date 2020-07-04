import React, { useState, useEffect } from 'react';
import JobsList from './components/JobsList';
import AddJobForm from './components/AddJobForm';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [change, setChange] = useState(0);
  const [jobs, setJobs] = useState('');

  useEffect(() => {
    getFromDatabase();
  }, [change]);

  const jobsChanged = () => {
    if(change === 0) {
      setChange(1);
    } else {
      setChange(0);
    }
  }

  console.log(change);

  const getFromDatabase = () => {
    console.log('run get database');
    fetch('http://localhost:3001/jobslist')
    .then(response => response.json())
    .then(response => setJobs(response))
  }

  return (
    <React.Fragment>
      <Header header_text="Job Application Recorder"/>
      <AddJobForm jobsChanged={jobsChanged}/>
      <JobsList jobs={jobs} jobsChanged={jobsChanged}/>
      <Footer footer_text="test footer"/>
    </React.Fragment>
  );
}

export default App;