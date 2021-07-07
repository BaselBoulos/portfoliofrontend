import React, {Component} from 'react';
import {Avatar, Box, Button, Grid, Typography} from "@material-ui/core";
import avatar from '../.././static/images/avatar.jpg';
import Typed from "react-typed";
import {useStyles} from '../../static/styles/styles';
import { Link } from 'react-router-dom';

const Header = () => {
    const classes = useStyles(); // To use the CSS Styles in styles.js
    return (
        <Box className={classes.boxContainer}>
            <Grid container justify="center">
                <Avatar className={classes.headerAvatar} src={avatar} alt="Basel Boulos"/>
            </Grid>
            <Typography className={classes.headerTitle} variant="h4">
                <Typed strings={["Basel Boulos"]}
                       typeSpeed={50}
                />
            </Typography>
            <br/>
            <Typography className={classes.headerSubtitle} variant="h5">
                <Typed strings={["Software Developer", "Production Planning and Control"]}
                       typeSpeed={40}
                       backSpeed={50}
                       loop/>
            </Typography>
            <br/>
            <Link to="/about">
            <Button
                style={{
                    backgroundColor: '#ff6347',
                    textDecoration: "inherit"
                }}
                variant="outlined"
                fullWidth={false}>
                About Me
            </Button>
            </Link>
        </Box>
    );
}

export default Header;