import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="sm">
            <Container>
                <Navbar.Brand href="#home">Duncan Scott</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> 
                    <Nav className="ms-auto">
                        {/*
                            This is quite confusing. NavLink comes from react-router-dom and handles the linking. However,
                            there's no styling for it. Nav.Link from the React Bootstrap components provides the actual
                            styling
                        */}
                        <Nav.Link>
                            <NavLink to="/">Home</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/about">About</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/contact">Contact</NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};