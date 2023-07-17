import React, { useState } from "react";
import './header.css';
import headerlogo from './Images/Logos/logo.png';

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const toggleDropdownclose = (event) => {
        if (!event.target.matches('.dropbtn')) {
            setDropdownOpen(false);
        }
    }

    return (
        <>
            <div className="home">
                <div className="section-0">
                    <div className="navbar">
                        <div className="logo-container">
                            <a href="https://sac.klh.edu.in/" className="logo-container">
                                <img src={headerlogo} alt="Student Activity Center" />
                            </a>
                        </div>
                        <div className="nav-menu-container">
                            <div className="club-dropdown">
                                <button onClick={toggleDropdown} className={`dropbtn ${dropdownOpen ? 'show' : ''}`}>Club's</button>
                                <div id="myDropdown" className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                                    <div className="close-btn">
                                        <button onClick={toggleDropdownclose} className="closebtn">x</button>
                                    </div>
                                    <div className="dropdown-wings">
                                        <div className="wing-1">
                                        </div>
                                        <div className="wings">
                                            <span>Technical Wing</span>
                                            <a href="./Clubs/Automation&Robotics.php">Automation & Robotics Club</a>
                                            <a href="./Clubs/Agriculture.php">Agriculture Club</a>
                                            <a href="./Clubs/CyberSecurity.php">Cyber Security Club</a>
                                            <a href="./Clubs/CodingClub.php">Coding Club</a>
                                            <a href="/Clubs/WebApps">Web Apps Club</a>
                                        </div>
                                        <div className="wings">
                                            <span>Liberal Art's Wing</span>
                                            <a href="./Clubs/Photography&Editing.php">Photography & Editing Club</a>
                                            <a href="./Clubs/FilmMaking.php">Film Making Club</a>
                                            <a href="./Clubs/Dance.php">Dance Club</a>
                                            <a href="./Clubs/Music.php">Music Club</a>
                                            <a href="./Clubs/Literature.php">Literature Club</a>
                                            <a href="./Clubs/MuseArts.php">Muse Arts Club</a>
                                            <a href="./Clubs/Events.php">Events Club</a>
                                            <a href="./Clubs/Sports.php">Sports Club</a>
                                        </div>
                                        <div className="wings">
                                            <span>Social Activity Wing</span>
                                            <a href="./Clubs/SVR.php">Smart Village Revolution - SVR</a>
                                            <a href="./Clubs/SocialEquity.php">Social Equity Club</a>
                                            <a href="./Clubs/SafeLife.php">Safe Life Club</a>
                                            <br /><br />
                                            <span>Management Wing</span>
                                            <a href="./Clubs/Management.php">Management Club</a>
                                            <a href="./Clubs/DigitalMarketing.php">Digital Marketing Club</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="">SVR</a>
                            <a href="">Project's</a>
                            <a href="/Our-Crew">Our-Crew</a>
                            <a href="">Organogram</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
