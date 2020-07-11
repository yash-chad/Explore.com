import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import store from "../redux/store";

import React, { Component } from "react";

export default class NavbarComp extends Component {
  handleLogout() {
    localStorage.setItem(("loggedIn", false));
    const { history } = this.props;
    history.push("/login");
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Explore.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/unsplash">Unsplash</Nav.Link>
              <Nav.Link href="/posts">Posts</Nav.Link>
              <Nav.Link href="/albums">Albums</Nav.Link>
            </Nav>
            {localStorage.getItem("loggedIn") === "false" ? (
              <Nav>
                <Nav.Link eventKey={2} href="#">
                  Login
                </Nav.Link>
              </Nav>
            ) : (
              <Nav.Link
                eventKey={2}
                onClick={() => {
                  this.handleLogout();
                }}
                href="/login"
              >
                Logout
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
