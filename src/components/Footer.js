import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {useStyles} from '../../static/styles/styles';
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
    const classes = useStyles(); // To use the CSS Styles in styles.js
    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={
                    <a href="https://github.com/BaselBoulos">
                        <GitHubIcon/>
                    </a>
                }
            />
            <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={
                    <a href="https://www.instagram.com/baselboulos/">
                        <InstagramIcon/>
                    </a>
                }
            />
            <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon={
                    <a href="https://www.linkedin.com/in/baselboulos/">
                        <LinkedInIcon/>
                    </a>
                }
            />
        </BottomNavigation>
    );
}

export default Footer;