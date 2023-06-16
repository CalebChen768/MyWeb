import React, { useState } from 'react';
import './RandomNumber.css'
const RandomNumber = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [result, setResult] = useState(null);

  const handleMinChange = (event) => {
    setMin(parseInt(event.target.value));
  };

  const handleMaxChange = (event) => {
    setMax(parseInt(event.target.value));
  };

  const handleGenerateClick = () => {
    setResult(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  return (
    <div className="random-number">
      <div className="random-number-generator">
        <h1>Random Number Generator</h1>
        <div className="input-group">
          <label htmlFor="min-input">Min:</label>
          <input type="number" id="min-input" value={min} onChange={handleMinChange} />
        </div>
        <div className="input-group">
          <label htmlFor="max-input">Max:</label>
          <input type="number" id="max-input" value={max} onChange={handleMaxChange} />
        </div>
        <button onClick={handleGenerateClick}>Generate</button>
        {result !== null && <div className="result">{result}</div>}
      </div>
    </div>
  );
};

export default RandomNumber;