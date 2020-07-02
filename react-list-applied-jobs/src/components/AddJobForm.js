import React, { useState } from 'react';
import './addjobform.css';

function AddJobForm({ addJob }) {
    const [position, setPosition] = useState('');
    const [announced, setAnnounced] = useState('');
    const [closes, setCloses] = useState('');
    const [site, setSite] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      addJob({
        position: position,
        announced: announced,
        closes: closes,
        site: site,
        applied: false
      });
      saveJob(position, announced, closes, site, 0);
      setPosition('');
      setAnnounced('');
      setCloses('');
      setSite('');
    }

    const saveJob = (position, announced, closes, site, applied) => {
      fetch('http://localhost:3001/addjob/'
      + position + '/'
      + announced + '/'
      + closes + '/'
      + site + '/'
      + applied)
    }
  
    return (
      <div className="form-container">
        <h3>Add Jobb </h3>
        <form className="add-job-form" onSubmit={handleSubmit}>
          <input type="text" className="input" 
          value={position} placeholder="Position"
          onChange={e => setPosition(e.target.value)} />
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