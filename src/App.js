import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Reserve from './components/Reserve'
import Vols from './components/Vols'
import Topbar from './components/Topbar'
import Paiement from './components/Paiement'
import Ticket from './components/Ticket'


function App() {
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/reserve" element={<Reserve/>} />
        <Route  path="/vols" element={<Vols/>} />
        <Route path="/paiement" element={<Paiement/>} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </div>
  );
}

export default App;
