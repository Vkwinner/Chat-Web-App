import React from 'react'
import TopNavbar from './TopNavbar'
import ToggleSwitch from './ToggleSwitch'
import BackgroundPage from './Background'

const Header = () => {
  return (
    <div>
      <TopNavbar/>
      <BackgroundPage />
      <div style={{height:"20px"}}><ToggleSwitch /></div>
    </div>
  )
}

export default Header
