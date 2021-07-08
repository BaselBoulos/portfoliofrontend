import React from 'react';
import {Box, Button, Grid, Typography} from "@material-ui/core";
import Typed from "react-typed";
import {useStyles} from "../../static/styles/styles";
import CV from "../../static/CV/Basel Boulos - CV - Israel.pdf";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const About = () => {
    const classes = useStyles(); // To use the CSS Styles in styles.js
    return (
        <>
            <Box component="div" className={classes.aboutBoxContainer}>
                <Navbar/>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12} sm={8} md={8}>
                        <Typography className={classes.aboutHeaderTitle} variant="h4">
                            <Typed strings={["About me"]}
                                   typeSpeed={50}
                            />
                        </Typography>
                    <br/>
                    <Typography className={classes.aboutHeaderSubtitle} variant="h5">
                        Hello! My name is basel a recent practical software engineer graduate, Who has never stopped
                        learning new technologies and spending time trying out new stuff, and now looking for my first job
                        as a Full-Stack/Back-End/Front-end developer. I also have 7 years of experience working in production
                        planning and control management office,with 2 years of being a digital nomad
                        ( Remote working while living abroad ) My time outside of Developing/Working and learning is spent
                        exploring and learning from our beautiful world, I'm a traveler who has explored more than 15 different
                        countries alone.
                    </Typography>
                    <br/>
                    <a href={CV} target="_blank">
                        <Button className={classes.aboutButton}
                            variant="outlined"
                            fullWidth={false}
                            endIcon={<SendIcon/>}
                        >
                            Download CV
                        </Button>
                    </a>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default About;