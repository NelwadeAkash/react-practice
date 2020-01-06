import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dragdrop from './Components/Dragdrop';
import Persons1 from './Components/State/Persons1';
import Person from './Components/State/Person';

function App() {
  return (
    <div className="App">
      <p>hello</p>
     {/* <Dragdrop></Dragdrop> */}
     <Persons1></Persons1>
     {/* <Person></Person> */}
    </div>
  );
}

export default App;
