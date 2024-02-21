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
import DottedCircleButton from "./ActiveDot";
import ToggleSwitch from "./ToggleSwitch";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Ready for calls");

  const toggle = () => setIsOpen(!isOpen);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Navbar expand="sm" className="d-flex justify-content-between align-items-center" style={{ backgroundColor: "#201D3B" }}>
        <NavbarBrand href="/" className="text-light ms-2">
          <img src={icon} alt="logo" style={{ width: '30px' }} className="me-2" />
          Chatify
        </NavbarBrand>
        <NavbarToggler onClick={toggle} style={{ backgroundColor: "white" }} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/" className="text-light">Components</NavLink>
            </NavItem>
          </Nav>
          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
            <ToggleSwitch />
            <DottedCircleButton firstValue="Available" secondValue="Not Available" />
            <FaCircleUser style={{ width: "40px", height: "30px", color: "white" }} />
            <DropdownButton initialValue={selectedOption} onOptionSelect={handleOptionSelect} firstValue="Ready for calls" secondValue="Away" thirdValue="Busy" />
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
