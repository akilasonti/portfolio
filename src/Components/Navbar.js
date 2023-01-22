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
    <NavbarBrand href="#" className="abc">
      AKILA'S PORTFOLIO
    </NavbarBrand>

    <NavbarBrand href="#homeSection" className="mrg">
    HOME
  </NavbarBrand>

  <NavbarBrand href="#aboutSection" className="mrg">
    ABOUT
  </NavbarBrand>

  <NavbarBrand href="#educationSection" className="mrg">
    EDUCATION
  </NavbarBrand>
  <NavbarBrand href="#skilSection" className="mrg">
    SKILS
  </NavbarBrand>
  <NavbarBrand href="#resumeSection" className="mrg">
    RESUME
  </NavbarBrand>

  <NavbarBrand href="#project" className="mrg">
    PROJECTS
  </NavbarBrand>

  <NavbarBrand href="#contactSection" className="mrg">
    CONTACTS
  </NavbarBrand>
  </Nav>
  </div>
  </Navbar>

  
    );
}

export default MyNavbar;