import React from "react";
import Button from "../button/button";
import classes from "./home.module.css";
import rain from "../../assets/LoneMan.jpg";

const Home = (props) => {
    return (
        <section className={classes.home}>
            <img src={rain} />
            <div className={classes.titleBox}>
                <span style={{fontSize: "25px"}}>WELCOME TO MY PORTFOLIO</span>
                <span style={{fontSize: "35px"}}>I'm Albert Justin</span>
                <span style={{fontSize: "25px"}}>Web Developer</span>
                <Button link="#">CONTACT ME</Button>
            </div>
        </section>
    );
};

export default Home;