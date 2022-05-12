import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavItem, NavLink, Nav, NavbarToggler, Collapse, Tooltip} from 'reactstrap';
import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    
  return (
    <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/" className="mr-auto logo">
            <img title='Title company' src={'logo.png'} alt='Logo Company' />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar className=''>
          <Nav navbar className='ms-auto mb-2 mb-lg-0'>
          <NavItem>
                    <NavLink href="/">
                        About Us
                    </NavLink>
                    
                </NavItem>
                <NavItem>
                    <NavLink href="/">
                        Prices
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">
                        Services
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">
                        Contact
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/'>
                        <CartWidget />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">
                       <BsFillPersonFill title='Login'/>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">
                        <BsSearch title='Search'/>
                    </NavLink>
                </NavItem>
          </Nav>
        </Collapse>        
      </Navbar>
    </div>
  )
}

export default NavBar