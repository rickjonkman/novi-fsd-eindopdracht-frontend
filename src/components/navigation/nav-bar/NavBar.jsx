import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import './nav-bar.css';
import Logo from "../../../assets/svg/logo-big-light.svg"
import HamburgerIcon from "../../../assets/icons/hamburger-light.svg";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu.jsx";

const NavBar = () => {

    const navigate = useNavigate();
    const [hamOpen, isHamOpen] = useState(false);

    function goToDashBoard(e) {
        e.preventDefault();
        navigate("/dashboard");
    }

    return (
        <nav>
            <div className={hamOpen ? 'hidden' : 'visible'}>

                <div className="regular-nav-container">
                    <img
                        src={Logo}
                        alt="Ons logo, klik om naar dashboard te gaan"
                        id="logo-nav-bar"
                        onClick={goToDashBoard}
                    />

                    <div className="page-links">
                        <ul>
                            <li><NavLink to="groceries">Boodschappen</NavLink></li>
                            <li><NavLink to="recipes">Recepten</NavLink></li>
                            <li><NavLink to="calendar">Agenda</NavLink></li>
                        </ul>
                    </div>

                    <img
                        src={HamburgerIcon}
                        alt="Hamburger-icon, klik om menu te openen"
                        onClick={() => isHamOpen(!hamOpen)}
                        id="ham-icon"
                    />

                </div>
            </div>

            <HamburgerMenu
                isVisible={hamOpen}
                closeMenu={() => isHamOpen(!hamOpen)}
            />
        </nav>
    );
};

export default NavBar;