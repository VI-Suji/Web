import React from 'react'
import Theme from '../../pages/theme'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, NavItem, NavLink, NavMenu, MobileIcon, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">ISTE</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='about'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='discover'>Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='services'>Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='signup'>Sign Up</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                        <Theme />
                    </NavBtn>
                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
