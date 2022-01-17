// import logo from './logo.svg';
// import './App.css';

import Hello from './Hello';
// import HelloClass from './HelloClass'

function App() {
  const name = 'name';
  return (
    <div className="hi">
      <Hello name={name} color="red"></Hello>
      {/* <HelloClass color="blue"></HelloClass>  */}
    </div>
  );
}

export default App;