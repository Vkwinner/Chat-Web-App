import React, { useState } from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 34px; 
  height: 18px; 
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.checked ? '#2196F3' : '#ccc'};
  transition: 0.4s;
  border-radius: 12px; 

  &:before {
    position: absolute;
    content: "";
    height: 14px; 
    width: 14px;
    left: 3px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #2196F3;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196F3;
  }

  &:checked + ${Slider}:before {
    transform: translateX(14px); 
  }
`;

const ToggleSwitch = (props) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleToggle = () => {
    setIsSwitchOn(prevState => !prevState);
  };

  return (
    <div className='d-flex align-items-center' style={{ width:"140px"}}>
      <SwitchLabel>
        <Input type="checkbox" onChange={handleToggle} checked={isSwitchOn} />
        <Slider checked={isSwitchOn}></Slider>
      </SwitchLabel>
      <div className='text-center' >
      <Button size='sm' className='py-0'  style={{fontSize:'16px',marginLeft: '5px', width:'100px' , color:'white',backgroundColor:'#6AC5AB' }} >
     {isSwitchOn ? 'props.firstOption' : 'props.secondOption'}
      </Button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
