import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import HomeContainer from './containers/HomeContainer'
import Home from './containers/HomeContainer';

function App() {
  const[count,setCount]=useState(0)
  return (
    <div className="App">
      
        <HomeContainer />
     
    </div>
  );
}

export default App;
