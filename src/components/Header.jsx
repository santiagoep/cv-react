import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { switchMenu } from '../actions';

import '../assets/styles/components/Header.scss';
import NavbarBrandImage from '../assets/static/brand/brand.jpg';
import MenuIcon from '../assets/static/hamburger-menu.svg';

const Header = ({ menuIsVisble, switchMenu }) => {
    return (
        <div className="header">
            <div className="header__brand">
                <img src={NavbarBrandImage} alt="Santiago EP" className="header__brand--img" />
                <h1 className="header__brand--text">Santiago EP</h1>
            </div>
            <div className={`header__menu ${(menuIsVisble ? "header__menu--displayed" : "")}`} onClick={switchMenu}>
                {menuIsVisble
                    ? <ul className="header__menu--list">
                        {window.innerWidth <= 768 &&
                            <li>
                                Menu
                            </li>
                        }
                        <li>
                            <Link to="/">
                                About me
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/technologies">
                                Technologies
                            </Link>
                        </li>
                        <li>
                            <Link to="/experience">
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link to="/education">
                                Education
                            </Link>
                        </li>
                    </ul>
                    : <img src={MenuIcon} className="header__menu--icon" />
                }

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        menuIsVisble: state.menuIsVisble
    }
}

const mapDispatchToProps = {
    switchMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);