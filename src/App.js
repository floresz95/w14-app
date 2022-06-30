import logo from './logo.svg';
import './App.css';
import Pizza from './components/pizza';
import Timer from './components/Timer';
import { useState } from 'react';
import Timer2 from './components/Timer2';

function App() {
  
  const [showTimer, setShowTimer] = useState(true)

  /* const state = useSate(true)
  console.log(state);
  const showTimer = state[0]
  const setShowTimer = state[1] */
  if (3 < 5 && 10 < 20){

  } 


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Pizza name="Kolbasz" price= "1500"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    
        <Timer2/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* {showTimer ? <Timer/> : <div>no timer</div>} */}
        <button onClick = {() => {setShowTimer(false)}}>Hide </button>
      </header>
    </div>
  );
}

export default App;
