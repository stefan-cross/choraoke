import React from 'react';
import logo from './logo.svg';
import Recorder from './component/Recorder';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Recorder />
    </div>
  );
}

export default App;
