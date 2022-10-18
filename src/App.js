import React from 'react';
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Vols from './Components/Vols/Vols'

function App() {
  return (
    <>
      <Topbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Vols />
    </>
  );
}

export default App;
