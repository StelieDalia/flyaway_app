import './App.css';
// import { Paiement } from './components/Paiement';
import Paiement from './components/Paiement'
import Ticket from './components/Ticket'
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Paiement/>} />
        <Route path="/Ticket" element={<Ticket />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
