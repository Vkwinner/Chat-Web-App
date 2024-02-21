import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const DropdownButton = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="d-flex justify-content-start align-items-center">
      <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} dark flip >
        <DropdownToggle caret size='md' style={{backgroundColor:"transparent", color:"white" , border:"none", width:"180px"}}>{props.initialValue}</DropdownToggle>
        <DropdownMenu dark >
          <DropdownItem onClick={() => props.onOptionSelect(props.firstValue)}>
            {props.firstValue}
          </DropdownItem>
          <DropdownItem onClick={() => props.onOptionSelect(props.secondValue)}>
            {props.secondValue} 
          </DropdownItem>
          <DropdownItem onClick={() => props.onOptionSelect(props.thirdValue)}>
            {props.thirdValue}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownButton;
