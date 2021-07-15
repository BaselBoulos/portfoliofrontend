import React from 'react';
import {Box, Button, Grid, Typography} from "@material-ui/core";
import Typed from "react-typed";
import {useStyles} from "../../static/styles/styles";
// import CV from "../../static/CV/Basel Boulos - CV - Israel.pdf";
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
                        About me things
                    </Typography>
                    <br/>
                    <a target="_blank">
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