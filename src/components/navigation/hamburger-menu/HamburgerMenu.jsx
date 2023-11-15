import React from 'react';
import './hamburger-menu.css';
import ReturnIcon from "../../../assets/icons/close-light.svg";
import {NavLink} from "react-router-dom";

const HamburgerMenu = ({ isVisible, closeMenu }) => {


    return (
        <div className={isVisible ? 'visible' : 'hidden'}>
            <div className="hamburger-menu">
                <div className="return-icon">
                    <img
                        src={ReturnIcon}
                        alt="Klik hier om het menu te sluiten"
                        onClick={closeMenu}
                        id="return-icon"
                    />

                    <div className="hamburger-section hamburger-menu-groceries">
                        <h2><NavLink to="/groceries">Boodschappen</NavLink></h2>
                        <ul>
                            <li><NavLink to="/groceries/grocery-lists">Boodschappenlijsten</NavLink></li>
                            <li><NavLink to="/groceries/shopping-mode">Boodschappenlijsten</NavLink></li>
                        </ul>
                    </div>

                    <div className="hamburger-section hamburger-menu-recipes">
                        <h2><NavLink to="/recipes">Recepten</NavLink></h2>
                        <ul>
                            <li><NavLink to="/recipes/all">Alle recepten</NavLink></li>
                            <li><NavLink to="/recipes/favorites">Favoriete recepten</NavLink></li>
                            <li><NavLink to="/recipes/new">Voeg nieuw recept toe</NavLink></li>
                        </ul>
                    </div>

                    <div className="hamburger-section hamburger-menu-calendar">
                        <h2><NavLink to="/calendar">Agenda</NavLink></h2>
                        <ul>
                            <li><NavLink to="/calendar/weekly">Wekelijks</NavLink></li>
                            <li><NavLink to="/calendar/monthly">Maandelijks</NavLink></li>
                        </ul>
                    </div>

                    <div className="hamburger-section hamburger-menu-other">
                        <h2><NavLink to="/dashboard">Anders</NavLink></h2>
                        <ul>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                            <li><NavLink to="/about">Over ons</NavLink></li>
                            <li><NavLink to="/profile">Profiel</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;