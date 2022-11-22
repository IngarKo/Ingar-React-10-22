import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Veebileht</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ostukorv">Ostukorv</Nav.Link>
            <Nav.Link as={Link} to="/lisa-toode">Lisa toode</Nav.Link>
            <Nav.Link as={Link} to="/seaded">Seaded</Nav.Link>
            <Nav.Link as={Link} to="/meist">Meist</Nav.Link>
            <Nav.Link as={Link} to="/poed">Poed</Nav.Link>
            <Nav.Link as={Link} to="/tooted">Tooted</Nav.Link>
            <Nav.Link as={Link} to="/halda">Halda tooteid</Nav.Link>
          </Nav>
        </Container>
      </Navbar>






    
      {/*<Link to="/">
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
      </Link>*/}
      <img className="main-pilt"  src="https://apod.nasa.gov/apod/image/2202/AuroraPillars_Correia_4898.jpg" alt=""  />
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
