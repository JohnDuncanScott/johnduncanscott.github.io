import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { config } from "../config/config";

export const NavigationBar = () => {
    const location = useLocation();

    return (
        /**
         * Setting the key when the location changes forces the navbar to re-render. Without this there is a bug that only happens
         * when using the browser back button. Steps: Click a navbar link, click a different navbar link, press back -> Note that
         * the 2nd navbar link is still highlighted without this. According to the dev tools, the classes are correct, it's just
         * not re-rendering correctly.
         * See https://stackoverflow.com/questions/62721457/react-bootstrap-change-link-of-navbar-to-active (activeKey doesn't exist)
         */
        <Navbar key={location.pathname} className="navbar-custom" expand="sm">
            {/* fluid stops the navbar components from jerking when breakpoints are crossed */}
            <Container fluid>
                <NavLink className="navbar-brand" to="/">{config.displayName}</NavLink>
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
                        <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        <NavLink className="nav-link" to="/tip">Tip 🍺</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};