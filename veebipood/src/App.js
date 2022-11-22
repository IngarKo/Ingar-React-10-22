import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Seaded from "./pages/Seaded";
import Meist from './pages/Meist';
import Poed from "./pages/Poed";
import Tooted from './pages/Tooted';
import HaldaTooteid from './pages/HaldaTooteid';
import MuudaToode from './pages/MuudaToode';
import YksikToode from './pages/YksikToode';

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
        <button className="nupp">seaded</button>
      </Link>
      <Link to="/meist">
        <button className="nupp">meist</button>
      </Link>
      <Link to="/poed">
        <button className="nupp">Poed</button>
      </Link>
      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>
      <Link to="/halda">
        <button className="nupp">Halda tooteid</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="poed" element={ <Poed /> } />
        <Route path="tooted" element={ <Tooted /> } />
        <Route path="halda" element={ <HaldaTooteid /> } />
        <Route path="muuda/:index" element={ <MuudaToode /> } />
        <Route path="toode/:j2rjekorraNumber" element={ <YksikToode /> } />
      </Routes>


    </div>
  );
}

export default App;
