import React from "react";
import classes from "./about.module.css";

const About = (props) => {
    const skills = ["Html", "CSS", "Javascript", "React.js", "C#", "SQL Server"];
    return (
        <div className={classes.container}>
            <section className={classes.box1}>
                <h2 style={{color: "#0c14f5"}}>Albert Justin Raj</h2>
                <h4 style={{color: "#0c14f5"}}>FRONT END DEVELOPER</h4>
                <p>
                    I am a Front End Developer working for the last three years.
                    i have good experience in developing user friendly applications.
                    i have strong knowledge in html, css, javascript, React.js (javascript framework).
                    Checkout my skills and works...
                </p>
                <h3 style={{color: "#0c14f5"}}>My Skills</h3>
                <ul>
                    {skills.map((x, i) => <li key={i} className={classes.skillBtn}>{x}</li>)}
                </ul>
            </section>
        </div>
    );
};

export default About;