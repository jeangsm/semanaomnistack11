import React, {useState} from 'react';
import Header from './Header'
import Routes from './routes'
import './global.css'


function App() {
  let [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }

  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
