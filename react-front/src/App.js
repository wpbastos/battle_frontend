import React from 'react';
import './App.css';

import Home from './view/home/Home'
import Home2 from './view/home/Home2'

function App() {
  return (
    <div className="App">
      <Home msg="Home #1"></Home>
      <Home2 msg="Home #2"></Home2>
    </div>
  );
}

export default App;
