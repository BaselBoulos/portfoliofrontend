import React, {Component} from 'react';
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import {useStyles} from "../../static/styles/styles";

const Homepage = () => {
    const classes = useStyles(); // To use the CSS Styles in styles.js
    return (
        <div>
            <Navbar/>
            <Header/>
            <Particles canvasClassName={classes.particlesCanvas}
               params={{
                   particles: {
                       number: {
                           value: 45,
                           density: {
                               enable: false,
                               value_area: 900
                           }
                       },
                       shape: {
                           type:"circle",
                           stroke:{
                               width: 1,
                               color: "tomato"
                           }
                       },
                       size:{
                           value: 18,
                           random: true,
                           anim: {
                               enable: true,
                               speed: 6,
                               size_min: 0.1,
                               sync: true,
                           }
                       },
                       opacity:{
                           value: 1,
                           random: true,
                           anim:{
                               enable: true,
                               speed: 1,
                               opacity_min: 0.1,
                               sync: true,
                           }
                       }
                   }
               }}
            />
        </div>
    );
}

export default Homepage;