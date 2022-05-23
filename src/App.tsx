import './App.css';
import { Route, Routes, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Duncan Scott</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav className="ms-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
