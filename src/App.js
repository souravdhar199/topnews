import './App.css';
import React, { useState } from 'react';
import FetchDataSports from './FetchDataSports';

function App() {
  const [lookup, Setlookup] = useState('');
  const [lookup2, Setlookup2] = useState('');

  function handelSubmit(e) {
    e.preventDefault();
    console.log(e.target.name.value)
    Setlookup2(lookup);

  }

  return (
    <div className="App">
      <form onSubmit={handelSubmit}>
        <h1>Welcome... Type anything to find out whats going on </h1>
        <label>
          <input className="input1" onChange={(e) => Setlookup(e.target.value)} type="text" name='name' value={lookup} />
        </label>
        <input className="input2" type="submit" value="Search" />
      </form>

      {/* This component will show all the news.  */}
      <FetchDataSports value={lookup2} />
    </div>
  );
}

export default App;
