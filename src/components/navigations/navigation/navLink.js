import React from "react";
import classes from "./navLink.module.css";

const NavLink = (props) => {
    return (
        <li className={classes.navlink}><a href={props.link}>{props.linkTxt}</a></li>
    );
};

export default NavLink;