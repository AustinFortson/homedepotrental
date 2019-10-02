import React from 'react';
import { Navbar, Nav, Form, NavDropdown, Button, FormControl, InputGroup} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './navbar.scss';



export default function Navbar1() {

    return (

        <Navbar sticky="top" bg="light" expand="lg">
            <Navbar.Brand><Link to = "/"><img src="https://www.homedepot.com/l/images/rentals/tool-rental-largelogo.png" className="logo" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to = "/">Rent Tools</Link></Nav.Link>
                    <Nav.Link><Link to = "/learn">Learn To Use Tools</Link></Nav.Link>
                    <NavDropdown title="More About Tool Rental" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Repairs</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">FAQ</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}