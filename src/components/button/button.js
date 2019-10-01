import React from "react";
import classes from "./button.module.css";

const Button = (props) => (
    <a className={classes.btnlink} href={props.link}>{props.children}</a>
);

export default Button;