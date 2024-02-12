import { FaCircleUser } from "react-icons/fa6";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import icon from '../images/navIcon.png';
import DropdownButton from './DropdownButton';
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Busy'); // Default initial value

  const toggle = () => setIsOpen(!isOpen);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Navbar expand="sm" className="nav-container">
        <NavbarBrand href="/" className="left-container">
          <img src={icon} alt="logo" width={'30px'} />
          Chat Assistant
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
          </Nav>
          <div className="d-flex justify-content-start align-items-start">
            <FaCircleUser style={{ width: "40px", height: "30px" }} />
            <DropdownButton initialValue={selectedOption} onOptionSelect={handleOptionSelect} />
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
