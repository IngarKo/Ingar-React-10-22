import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Seaded from "./pages/Seaded";

function App() {
  return (
    <div className="App">
      <Link to="/">
      <img className="main-pilt"  src="https://apod.nasa.gov/apod/image/2202/AuroraPillars_Correia_4898.jpg" alt=""  />
      </Link>
      <Link to="/ostukorv">
        <button className="nupp">ostukorv</button>
      </Link>
      <Link to="lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>
      <Link to="/seaded">
        <button className="nupp"><Seaded></Seaded></button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="seaded" element={ <Seaded /> } />
      </Routes>


    </div>
  );
}

export default App;
