import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark  px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand store-logo" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                       my Cart
                   </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}


const NavWrapper = styled.nav `
    background:var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform:capitalize;
    }
    `;
