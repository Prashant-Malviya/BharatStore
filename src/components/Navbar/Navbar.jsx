import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { searchProducts } from '../../redux/slice/productSlice'; 
import storeImg from '../../img/store.png';

function NavbarMenu() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchProducts(e.target.value));
  };

  return (
    <Navbar expand="lg" className="bg-amber-50 fixed-top">
      <Container fluid>
        <Link to={"/"} className="no-underline">
          <Navbar.Brand href="#" className="flex flex-row space-x-1 lg:mr-5 md:mr-0 mr-0">
            <img
              src={storeImg}
              alt="store image"
              className="w-14 h-14 rounded-full"
            />
            <p className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-amber-600 bg-clip-text text-transparent my-auto">
              BharatStore
            </p>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 space-x-5 font-bold"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className="no-underline">
              <Navbar.Text className="lg:ml-0 md:ml-5 ml-5">Home</Navbar.Text>
            </Link>
            <Link to={"/step-form"} className="no-underline">
              <Navbar.Text>Step-Form</Navbar.Text>
            </Link>
            <Link className="no-underline" to={"/ecommerce"}>
              <Navbar.Text>Ecommerce</Navbar.Text>
            </Link>
            <Link className="no-underline" to={"/posts"}>
              <Navbar.Text>Posts</Navbar.Text>
            </Link>
            <Link className="no-underline" to={"/contact-us"}>
              <Navbar.Text>Contact Us</Navbar.Text>
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleSearch}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
