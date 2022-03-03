// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper'
import HelloClass from './HelloClass'
import Blank from './Blank'

function App() {
  const name = 'Seungyeon';
  return (
    <div className="hi">
      <Wrapper>
        <Hello name={name} color="red"></Hello>
        <Hello color='pink'></Hello>
      </Wrapper>
      {/* <Blank></Blank>
      <HelloClass color="blue" age="11"></HelloClass> */}
    </div>
  );
}

export default App;