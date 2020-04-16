import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap';
import './Style.css'


class NavBar extends Component {
  render() {
      return (
          <div>
              <Navbar bg="info" expand="lg">
                      <Navbar.Brand href="#home"></Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                        <Link to="/">Home</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/article">Article</Link>
                        <Link to="/hire">Hire Me</Link>
                      </Nav>
                      </Navbar.Collapse>
              </Navbar>
          </div>
      )}
}
export default NavBar;
