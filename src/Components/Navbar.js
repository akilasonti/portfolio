import React from "react";
import {Navbar,NavbarBrand ,Nav} from "reactstrap";
import './Navbar.css';

function MyNavbar(){
    return(
        <Navbar
    className="my-2 custom-nav "
    
 >
    <div >
    <Nav>
    <NavbarBrand href="/" className="abc">
      AKILA'S PORTFOLIO
    </NavbarBrand>

    <NavbarBrand href="/" className="mrg">
    HOME
  </NavbarBrand>

  <NavbarBrand href="/" className="mrg">
    ABOUT
  </NavbarBrand>

  <NavbarBrand href="/" className="mrg">
    RESUME
  </NavbarBrand>

  <NavbarBrand href="/" className="mrg">
    PROJECTS
  </NavbarBrand>

  <NavbarBrand href="/" className="mrg">
    CONTACTS
  </NavbarBrand>
  </Nav>
  </div>
  </Navbar>

  
    );
}

export default MyNavbar;