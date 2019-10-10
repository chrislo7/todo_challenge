import React, { Component } from 'react';
import {
    Navbar, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink,
} from 'reactstrap';

class AppNavbar extends Component {

    render() {
        return ( 
            <div>
                <Navbar color="dark" dark className="fixed-top mb-5">
                    <NavbarBrand href="/" className="mr-auto">NorthOne Todo</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://www.github.com/chrislo7/">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }

}

export default AppNavbar;