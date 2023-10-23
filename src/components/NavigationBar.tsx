import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavigationBar = () => {
    return (
        <Navbar className="navbar-custom" expand="sm">
            {/* fluid stops the navbar components from jerking when breakpoints are crossed */}
            <Container fluid>
                <NavLink className="navbar-brand" to="/">Duncan Scott</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/*
                        ms-auto justifies the contents to the right side of the window when the collapsible control IS NOT shown
                        align-items-end aligns the column of links to the right when the collapsible control IS shown AND IS expanded (so the items are directly below your finger)
                    */}
                    <Nav className="ms-auto align-items-end">
                        {/*
                            This is quite confusing. NavLink comes from react-router-dom and handles the linking. However,
                            there's no styling for it. Nav.Link from the React Bootstrap components provides the actual
                            styling and nav-link is the actual Bootstrap class.
                            Also see https://stackoverflow.com/questions/55625431/warning-validatedomnesting-a-cannot-appear-as-a-descendant-of-a
                        */}
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        <NavLink className="nav-link" to="/tip">Tip 🍺</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};