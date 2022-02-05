// import logo from './logo.svg';
// import './App.css';

import Hello from './Hello';
import React from 'react';
import HelloClass from './HelloClass'
import Blank from './Blank'

function App() {
  const name = 'name';
  return (
    <div className="hi">
      <Hello name={name} color="red"></Hello>
      <Blank></Blank>
      <HelloClass color="blue" age="11"></HelloClass>
    </div>
  );
}

export default App;