import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarText,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import hlLogo from '../app/assets/img/logo4.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar id='homenavbar' dark sticky='top' expand='md'>
            {/* <NavbarBrand href='/'>
                <img src={hlLogo} class='navbarlogo' alt='honest lenses logo' />
            </NavbarBrand> */}
            <NavbarText>
                <div class="container-fluid-nav text-center" style={{marginLeft: '50px'}}>
                    <h1>honest lenses</h1>
                </div>
            </NavbarText>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link text-dark' to='/'>
                            <i className='fa text-dark fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link text-dark' to='/directory'>
                            <i className='fa text-dark fa-shopping-cart fa-lg' /> Shop Now
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link text-dark' to='/about'>
                            <i className='fa text-dark fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link text-dark' to='/contact'>
                            <i className='fa text-dark fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;