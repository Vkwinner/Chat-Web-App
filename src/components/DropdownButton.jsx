import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const DropdownButton = ({ initialValue, onOptionSelect }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="d-flex justify-content-start align-items-center">
      <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} dark flip>
        <DropdownToggle caret size='md'>{initialValue}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => onOptionSelect('Ready for calls')}>
            Ready for calls
          </DropdownItem>
          <DropdownItem onClick={() => onOptionSelect('Away at the moment')}>
            Away at the moment
          </DropdownItem>
          <DropdownItem onClick={() => onOptionSelect('Busy')}>
            Busy
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownButton;
