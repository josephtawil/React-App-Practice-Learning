import React from 'react';
import logo from './logo.svg';
import {AnotherTest} from './components/AnotherTest';
import {Test} from './components/Test';

import './App.css';

function App() {
  return (
    <div className="App">
      <Test></Test>
      <AnotherTest></AnotherTest>
       <Test></Test>
       <AnotherTest></AnotherTest>
       <Test></Test>
    </div>
  );
}

export default App;
