import React from 'react';
import './App.css';
import Topbar from './Components/Topbar';
import Vols from './Components/Vols'

function App() {
  return (
    <>
      <Topbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Vols />
    </>
  );
}

export default App;
