import React from 'react'
import { Navbar, NavbarBrand, NavItem, NavLink, Nav} from 'reactstrap';

const NavBar = () => {
  return (
    <div>
        <Navbar
            color="light"
            expand="md"
            light
        >
            <NavbarBrand href="/" className='logo'>
                <img title='Title company' src={process.env.PUBLIC_URL + 'logo.png'} alt='Logo Company' />
            </NavbarBrand>
            <Nav
                className="ml-auto"
                navbar
            >
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
                    <NavLink href="/">
                        Login
                    </NavLink>
                </NavItem>
            </Nav>   
        </Navbar>
    </div>
  )
}

export default NavBar