import React from "react";
import Navlinks from "../navigations/navLinks";
import classes from "./header.module.css";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <h1>ALBERT</h1>
                <Navlinks />
            </nav>
        </header>
    );
};

export default Header;