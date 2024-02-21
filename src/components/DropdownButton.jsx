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
    <div className="d-flex justify-content-start align-items-start">
      <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} dark flip>
        <DropdownToggle caret size='sm' className="d-flex align-items-center justify-content-center"style={{minWidth:"200px"}} >{props.initialValue}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => {
            props.onOptionSelect(props.firstOption)
            }}>
            {props.firstOption}
          </DropdownItem>
          <DropdownItem onClick={() => {
            props.onOptionSelect(props.secondOption)
          }}>
          {props.secondOption}
          </DropdownItem>
          <DropdownItem onClick={() => {
            props.onOptionSelect(props.thirdOption)
          }}>
            {props.thirdOption}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownButton;
