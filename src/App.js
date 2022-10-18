import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Reserve from './components/Reserve'
import Vols from './components/Vols'
import Topbar from './components/Topbar'


function App() {
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/reserve" element={<Reserve/>} />
        <Route  path="/vols" element={<Vols/>} />
      </Routes>
    </div>
  );
}

export default App;
