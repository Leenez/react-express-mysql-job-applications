import React, { useState } from 'react';
import './addjobform.css';

function AddJobForm({ jobsChanged }) {
    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [announced, setAnnounced] = useState('');
    const [closes, setCloses] = useState('');
    const [site, setSite] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      
      saveJob(position, company, announced, closes, site, 0);
      jobsChanged();

      setPosition('');
      setCompany('');
      setAnnounced('');
      setCloses('');
      setSite('');
    }

    const saveJob = (position, company, announced, closes, site, applied) => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            position: position,
            company: company,
            announced: announced,
            closes: closes,
            site: site,
            applied: applied
          })
      };
      fetch('http://localhost:3001/addjob/', requestOptions);
    }
  
    return (
      <div className="form-container">
        <h3>Add Jobb </h3>
        <form className="add-job-form" onSubmit={handleSubmit}>
          <input type="text" className="input" 
          value={position} placeholder="Position"
          onChange={e => setPosition(e.target.value)} />
          <input type="text" className="input" 
          value={company} placeholder="Company"
          onChange={e => setCompany(e.target.value)} />
          <input type="text" className="input"
          value={announced} placeholder="Announced"
          onChange={e => setAnnounced(e.target.value)} />
          <input type="text" className="input"
          value={closes} placeholder="Closes"
          onChange={e => setCloses(e.target.value)} />
          <input type="text" className="input"
          value={site} placeholder="Site Address"
          onChange={e => setSite(e.target.value)} /><br/>
          <button onClick={() => handleSubmit}>Add</button>
        </form>
      </div>
    )
  }

  export default AddJobForm;