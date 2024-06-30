import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

const NavBar = () => {
  const [currentRoute, setCurrentRoute] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    setCurrentRoute(path === "/" ? "home" : path.slice(1, path.length));
  }, [location]);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav.Link  as={Link}
        to="/" className='font-weight-bold fs-4'>Restoran Blog</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar'>
          <Nav className="mr-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => setCurrentRoute("/")}
              className={currentRoute === "/" ? "btn btn-info ms-1" : "btn btn-outline-info ms-1"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/add"
              onClick={() => setCurrentRoute("add")}
              className={currentRoute === "add" ? "btn btn-info ms-1" : "btn btn-outline-info ms-1"}
            >
              Add Article
            </Nav.Link>
           
            <Nav.Link
              as={Link}
              to="/aboutUs"
              onClick={() => setCurrentRoute("aboutus")}
              className={currentRoute === "aboutus" ? "btn btn-info ms-1" : "btn btn-outline-info ms-1"}
            >
              About Us
            </Nav.Link>
          </Nav>
          {currentRoute === "home" && (
            <Form className='d-flex gap-1'>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
