import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget'


function CollapsibleExample() {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">BurgerLand</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav  >

            <Nav.Link href="#features">TAKE AWAY</Nav.Link>
            <Nav.Link href="#pricing">FRANQUICIAS</Nav.Link>
            <Nav.Link href="#pricing">TRABAJÁ CON NOSOTROS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <a href='carito' className='CartWidget'>
        <CartWidget  />

      </a>
    </Navbar>
  );
}

export default CollapsibleExample;