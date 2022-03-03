// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import Hello from './high/middle1/Hello';
import Wrapper from './high/Wrapper';
import PMButton from './high/PMButton';
import HelloClass from './high/middle1/HelloClass'
import Blank from './high/middle1/Blank'

function App() {
  const name = 'Seungyeon';
  const nick = 'bobo';
  return (
    <div className="hi">
      <PMButton/>
      <Wrapper>
        <Hello name={name} color="red" call={nick} isSpecial={true}></Hello>
        <Hello color='pink'></Hello>
      </Wrapper>
      {/* <Blank></Blank>
      <HelloClass color="blue" age="11"></HelloClass> */}
    </div>
  );
}

export default App;