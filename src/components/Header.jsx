import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import clock from '../assets/icons8-clock.gif'

function Header() {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand href="/" className='d-flex align-items-center '><h2>Automatic Counter</h2> &nbsp; &nbsp;
        <img src={clock} alt="" style={{width:"50px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
      </Container>
    </Navbar>
  )
}

export default Header