
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png"
import "./header.css"
import {Button} from 'reactstrap';
import Dropdown from "../dropdown/Dropdown";

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Header(args) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar {...args}>
          <NavbarBrand href="/"><img src={logo} width="150px"/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Courses
              </DropdownToggle>
              <DropdownMenu right>
                <Link to="/courses/flashcard"><DropdownItem>Flashcard</DropdownItem></Link>
                <DropdownItem divider />
                <Link to="/courses/basic"><DropdownItem>Basic</DropdownItem></Link> 
                <Link to="/courses/intermediate"><DropdownItem>Intermediate</DropdownItem></Link>
                <Link to="/courses/advanced"><DropdownItem>Advanced</DropdownItem></Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
            <i class="fa-solid fa-cart-shopping"></i>
            <Button className="btn-n" outline> Log in </Button>
//          <Button className="btn-s">Sign up</Button> 
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Header;

// const Header = () => {
//     return (
//         <div className="header">
//             <div>
//                 <img src={logo} width="150px"/>
//             </div>

//             <div className="hd-main"> 
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/courses"><Dropdown /></Link> 
//             <Link to="/books">Books</Link>
//             <Link to="/test">Test</Link>
//             <Link to="/store">Store</Link>
//             </div>

//             <div className="hd-right">
//             <i class="fa-solid fa-cart-shopping"></i>
//             <Button className="btn-n" outline> Log in </Button>
//             <Button className="btn-s">Sign up</Button> 
//             </div>
//         </div>
//     );
// }

// export default Header;
