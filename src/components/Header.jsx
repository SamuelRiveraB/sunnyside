import React from "react";
import "./Header.css";
import nav from "../images/icon-hamburger.svg";

function Header() {
    function navBar() {
        const navImg = document.getElementsByClassName("nav-btn")[0];
        const right = document.getElementsByClassName("right-header")[0];
        if (right.style.visibility === "hidden") {
            right.style.visibility = "visible";
        } else {
            right.style.visibility = "hidden";
            navImg.style.visibility = "visible";
        }
    }

    return (
        <>
            <nav className="header">
                <div className="left-header">
                    <h1 className="logo">sunnyside</h1>
                </div>
                <div className="right-header">
                    <div className="triangle"></div>
                    <img src={nav} className="nav-btn" alt="nav" onClick={navBar}/>
                    <ul className="header-menus">
                        <li><a href="/" className="menu">About</a></li>
                        <li><a href="/" className="menu">Services</a></li>
                        <li><a href="/" className="menu">Projects</a></li>
                        <li><button className="contactBtn">CONTACT</button></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;