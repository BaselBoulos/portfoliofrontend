import React from 'react';
import {useStyles} from '../../static/styles/styles';
import {Box, Button, Grid} from "@material-ui/core";
import Navbar from "./Navbar"
import CV from '../.././static/CV/Basel Boulos - CV - Israel.pdf';
import SendIcon from "@material-ui/icons/Send";


const Cv = () => {
    const classes = useStyles(); // To use the CSS Styles in styles.js
    return (
        <>
        <Box component="div" className={classes.cvContainer}>
            <Navbar/>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <a href={CV} target="_blank">
                        <Button
                            style={{
                                backgroundColor: '#ff6347',
                                textDecoration:"inherit"
                            }}
                            variant="outlined"
                            fullWidth={true}
                            endIcon={<SendIcon/>}
                        >
                            Download CV
                        </Button>
                    </a>
                </Box>
            </Grid>
        </Box>
        </>
    );
}

export default Cv;