import React from "react";
import NavLink from "./navigation/navLink";
import classes from "./navLinks.module.css";

const NavLinks = (props) => {
    return (
        <ul className={classes.navlinks}>
            <NavLink link="#" linkTxt="HOME" />
            <NavLink link="#" linkTxt="ABOUT ME" />
            <NavLink link="#" linkTxt="MY WORKS" />
            <NavLink link="#" linkTxt="CONTACT" />
        </ul>
    );
};

export default NavLinks;