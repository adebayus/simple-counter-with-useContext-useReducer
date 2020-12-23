import logo from './logo.svg';
import './App.css';
import {counterCountext, CounterProvider} from './context/Context'
import React, { useContext} from 'react'


const DisplayCount = () => {
  const { state } = useContext(counterCountext)
  
  // console.log(count)
  return(
    <div>
      <h1>Count : { state.count } </h1>
    </div>
  )
}

const DisplayButton =() => {
  const { state, dispatch } = useContext(counterCountext)
  return(
    <div style={{displa:"flex",}}>
      <button onClick={() => dispatch( {type : "increment"})}>
        increment
      </button>
      <button onClick={() => dispatch( {type : "reset"})}>
        reset
      </button>
      <button onClick={() => dispatch( {type : "decrement"})}>
        decrement
      </button>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <CounterProvider>
        <DisplayCount />
        <DisplayButton />
      </CounterProvider>
    </div>
  );
}

export default App;
