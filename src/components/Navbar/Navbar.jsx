import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function BootstrapNavbar({
  handleSearch,
  searchTerm,
  handleClick,
  setSearchTerm,
}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">User Listing</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link>User</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/favorites">
              <Nav.Link>Favorites</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BootstrapNavbar;
