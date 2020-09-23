import React from 'react';
import NavItem from '../../components/nav-item/NavItem';
import { IoMdHome, IoIosAirplane, IoIosCar, IoMdMap } from 'react-icons/io' 


export default function(props) {
  return (
    <nav className="navigation">
      <NavItem name={"hotel"} icon={<IoMdHome/>}/>
      <NavItem name={"flight"} icon={<IoIosAirplane/>}/>
      <NavItem name={"rental"} icon={<IoIosCar/>}/>
      <NavItem name={"tours"} icon={<IoMdMap/>}/>
    </nav>
  )
}