import React from 'react';
import LogoNav from '../../../assets/svg/logo-big-dark.svg';
import {NavLink} from "react-router-dom";


const LandingPageNavBar = () => {

    return (

        <nav className="landing-page-nav-bar">

            <div className="landing-page-nav-container">
                <img src={LogoNav} alt="Logo van Mandjes en Puutjes"/>

                <div className="landing-page-nav-menu-buttons">
                    <ul>
                        <li><NavLink to="/login">Inloggen</NavLink></li>
                        <li><NavLink to="/register">Registreren</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default LandingPageNavBar;