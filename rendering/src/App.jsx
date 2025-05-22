import React, { useState } from 'react';
import students from "./Student.json"
import './App.css';

const App = () => {
  const [list, setList] = useState(students);
  const [value, setValue] = useState('');

  const handleHigh = () => {
    const sorted = [...list].sort((a, b) => b.maths - a.maths);
    setList(sorted);
  };

  const handleLow = () => {
    const sorted = [...list].sort((a, b) => a.maths - b.maths);
    setList(sorted);
  };

  const totalHigh = () => {
    const sorted = [...list].sort(
      (a, b) =>
        b.maths + b.physics + b.chemistry - (a.maths + a.physics + a.chemistry)
    );
    setList(sorted);
  };

  const totalLow = () => {
    const sorted = [...list].sort(
      (a, b) =>
        a.maths + a.physics + a.chemistry - (b.maths + b.physics + b.chemistry)
    );
    setList(sorted);
  };

  return (
    
    <div className="container">
        <h1 >Re-Rendering...</h1>
      <button className="button" onClick={handleHigh}>
        High Maths
      </button>
      <button className="button" onClick={handleLow}>
        Low Maths
      </button>
      <button className="button" onClick={totalHigh}>
        Total High
      </button>
      <button className="button" onClick={totalLow}>
        Total Low
      </button>
      <input
        className="search-input"
        placeholder="Search any name"
        onChange={(e) => setValue(e.target.value.toLowerCase())}
      />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Maths</th>
            <th>Physics</th>
            <th>Chemistry</th>
          </tr>
        </thead>
        <tbody>
          {list
            .filter((e) => e.name.toLowerCase().includes(value))
            .map((e, index) => (
              <tr key={index}>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.maths}</td>
                <td>{e.physics}</td>
                <td>{e.chemistry}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
