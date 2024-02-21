import React, { useState } from 'react';
import { IoIosRadioButtonOn } from 'react-icons/io';
import { IoRadioButtonOffOutline } from "react-icons/io5";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DottedCircleButton = (props) => {
    const [status, setStatus] = useState(props.secondValue);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    const handleStatusChange = (value) => {
        setStatus(value);
    };

    return (
        <div className='d-flex align-items-center'>
            <div className='align-self-mid'>
            </div>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} style={{ marginLeft: '5px', width:"150px"}}>
                <DropdownToggle caret size='md' className='d-flex align-items-center' style={{ backgroundColor: "transparent", color: "white", border: "none" }}>
                    
                    {status === props.firstValue ? <IoIosRadioButtonOn size={14} color="#6AC5AB" className='me-1'/> : <IoRadioButtonOffOutline size={14} color="#6AC5AB" className='me-1'/>}
                    {status}
                </DropdownToggle>
                <DropdownMenu dark>
                    <DropdownItem onClick={() => handleStatusChange(props.firstValue)}>
                        {props.firstValue}
                    </DropdownItem>
                    <DropdownItem onClick={() => handleStatusChange(props.secondValue)}>
                        {props.secondValue}
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default DottedCircleButton;
