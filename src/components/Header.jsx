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
  
  const handleColor = (data) =>{

  }

  return (
    <div>
      <Navbar expand="sm" className="nav-container">
        <NavbarBrand href="/" className="left-container d-flex">
          <img src={icon} alt="logo" width={'30px'} className="me-1"/>
          <div style={{color:"white"}}>Chat Assistant</div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/" style={{color:"white"}}>Components</NavLink>
            </NavItem>
          </Nav>
          <div className="d-flex justify-content-start align-items-center" style={{color:"white"}}>
            <div><FaCircleUser style={{ width: "40px", height: "30px" }} /></div>
            <DropdownButton initialValue={selectedOption} onOptionSelect={handleOptionSelect} firstOption="available" secondOption="Away at the moment" thirdOption="Busy"setColor={handleColor} />
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
