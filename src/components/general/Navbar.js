import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'



function CollapsibleExample() {
  const categorias = ["hamburguesa", "ensaladas", "HotDog", "combo"]
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>

        <Nav.Link as={Link} to="/" id="logo" >BurgerLand</Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav>
            {
              categorias.map(categoria => {
                return (
                  <Nav.Link as={Link} to={"/" + categoria} >{categoria}  </Nav.Link>
                )} ) }
          </Nav>
        </Navbar.Collapse>
      </Container>
      <a href='carito' className='CartWidget'>
        <CartWidget />

      </a>
    </Navbar>
  );
}

export default CollapsibleExample;