import React, {useState} from 'react';
import Footer from "./Footer";
import {
    AppBar,
    Typography,
    Toolbar,
    Box,
    IconButton,
    Avatar,
    ListItem,
    ListItemIcon,
    List, ListItemText
} from '@material-ui/core';
import {ArrowBack, AssignmentInd, Home, Apps, ContactMail} from '@material-ui/icons';
import InfoIcon from '@material-ui/icons/Info';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import avatar from '../.././static/images/avatar.jpg';
import {useStyles} from '../../static/styles/styles';
import {Link} from "react-router-dom";

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "CV",
        listPath: "/cv"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: "/contact"
    },
    {
        listIcon: <InfoIcon/>,
        listText: "About",
        listPath: "/about"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })
    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open});
    });

    const classes = useStyles(); // To use the CSS Styles in styles.js

    const sideList = slider => (
        <Box
            className={classes.navbarMenu}
            component="div"
            onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.navbarAvatar} src={avatar} alt="Basel Boulos"/>
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{background: "#222"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{color: "tomato"}}/>
                        </IconButton>
                        <Typography variant="h5" style={{color: "tan"}}>
                            Portfolio
                        </Typography>
                        <MobileRightMenuSlider
                            anchor="right"
                            open={state.right}
                            onClose={toggleSlider("right", false)}
                        >
                            {sideList("right")}
                            <Footer/>
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default Navbar;