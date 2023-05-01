import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../AuthProvider/AuthProviders';

const Header = () => {
  const {user,LogoutUser} = useContext(AuthContex)
  // console.log(user.displayName);
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className='text-dark'> <Link className='text-decoration-none' to='/'>Traval Guru</Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <input type="text" placeholder='Search Your Destination' />
            </Nav>
            <Nav>
            <Link to='/login' className='fs-4 text-decoration-none p-2'>News</Link>
            <Link to='/login' className='fs-4 text-decoration-none p-2'>Destination</Link>
            <Link to='/login' className='fs-4 text-decoration-none p-2'>Blog</Link>
            <Link to='/login' className='fs-4 text-decoration-none p-2'>Contact</Link>
            {user &&
            <><Button onClick={LogoutUser} className='btn-danger'>Logout</Button></>}
            {!user &&
            <> <Link to='/login'><Button className='btn-danger'>Login</Button></Link> </>}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;