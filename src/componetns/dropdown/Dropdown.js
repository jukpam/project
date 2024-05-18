import React, { useState } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';

// function Example({ direction, ...args }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggle = () => setDropdownOpen((prevState) => !prevState);

//   return (
//     <div className="d-flex p-5">
//       <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
//         <DropdownToggle caret>Courses</DropdownToggle>
//         <DropdownMenu {...args}>
//           <Link to="/courses/flashcard"><DropdownItem>Flashcard</DropdownItem></Link>
//           <DropdownItem divider />
//           <Link to="/courses/basic"><DropdownItem>Basic</DropdownItem></Link> 
//           <Link to="/courses/intermediate"><DropdownItem>Intermediate</DropdownItem></Link>
//           <Link to="/courses/advanced"><DropdownItem>Advanced</DropdownItem></Link>
//         </DropdownMenu>
//       </Dropdown>
//     </div>
//   );
// }



function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
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
    </div>
  );
}

export default Example;