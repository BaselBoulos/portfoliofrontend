import React, {Component} from 'react';
import Navbar from "./Navbar";
import {Avatar, Box, Button, Grid, Typography} from "@material-ui/core";
import Typed from "react-typed";
import {useStyles} from "../../static/styles/styles";
import CV from "../../static/CV/Basel Boulos - CV - Israel.pdf";
import SendIcon from "@material-ui/icons/Send";

const About = () => {
    const classes = useStyles(); // To use the CSS Styles in styles.js
    return (
        <>
        <Navbar/>
        <Box className={classes.boxContainer}>
            <Typography className={classes.headerTitle} variant="h4">
                <Typed strings={["About Me"]}
                    typeSpeed={50}
                />
            </Typography>
            <br/>
            <Typography className={classes.headerSubtitle} variant="h5">
                Hello! My name is Basel a recent practical software engineer graduate, Who has never stopped
                <br/>
                learning new technologies and spending time trying out new stuff, is looking
                for his first job as a
                <br/>
                Full-Stack/Back-End/Frontend developer.
                <br/>
                <br/>
                I also have 7 years of experience working in production planning and
                control management office,
                <br/>
                with 2 years of being a digital nomad ( Remote working while living abroad ).
                <br/>
                <br/>
                My time outside of Developing/Working and learning is spent
                exploring our beautiful world,
                <br/>
                hiking or reading a book in the nature, gaining new experiences, I am also a
                <br/>
                 Traveler who has explored more than 15 different countries Alone.
            </Typography>
            <br/>
            <a href={CV} target="_blank">
                <Button
                    style={{
                        backgroundColor: '#ff6347',
                        textDecoration:"inherit"
                    }}
                    variant="outlined"
                    fullWidth={false}
                    endIcon={<SendIcon/>}
                >
                    Download CV
                </Button>
            </a>
        </Box>
        </>
    );
}

export default About;