import React, {Component} from 'react';
import Navbar from "./Navbar";
import {useStyles} from '../../static/styles/styles';
import {TextField, Typography, Button, Grid, Box, withStyles} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import {useState} from 'react';

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan",
            },
            "&:hover fieldset": {
                borderColor: "tan"
            },
            "&.Mui-focused fieldset": {
                borderColor: "tan",
            }
        }
    },
})(TextField);

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company_name, setCompany_name] = useState('')
    const [message, setMessage] = useState('')

    const clearState = () => {
        setName('')
        setEmail('')
        setCompany_name('')
        setMessage('')
    }

    function contactMeButtonPressed() {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
                email: email,
                company_name: company_name,
                message: message,
            }),
        };
        fetch("https://baselportfoliobackend.herokuapp.com/backend/contact-me/", requestOptions)
            .then((response) => {
                if (response.ok) {
                    console.log("Email sent successfully")
                    clearState();
                } else {
                    setEmail('')
                    console.log(response.statusText);
                }
            })
    }

    const classes = useStyles(); // To use the CSS Styles in styles.js
    return (
        <>
            <Box component="div" className={classes.contactContainer}>
                <Navbar/>
                <Grid container justify="center">
                    <Box component="form" className={classes.form}>
                        <Typography variant="h5" className={classes.contactTypography}>
                            Contact me
                        </Typography>
                        <InputField
                            value={name}
                            onChange={e => setName(e.target.value)}
                            fullWidth={true}
                            label="Name"
                            variant="outlined"
                            inputProps={{style: {color: "white"}}}
                            margin="dense"
                            size="medium"
                        />
                        <br/>
                        <InputField
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            fullWidth={true}
                            label="Email"
                            variant="outlined"
                            inputProps={{style: {color: "white"}}}
                            margin="dense"
                            size="medium"
                        />
                        <br/>
                        <InputField
                            value={company_name}
                            onChange={e => setCompany_name(e.target.value)}
                            fullWidth={true}
                            label="Company Name"
                            variant="outlined"
                            inputProps={{style: {color: "white"}}}
                            margin="dense"
                            size="medium"
                        />
                        <br/>
                        <InputField
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            fullWidth={true}
                            label="Message"
                            multiline rows={4}
                            variant="outlined"
                            inputProps={{style: {color: "white"}}}
                            margin="normal"
                            size="medium"
                        />
                        <br/>
                        <Button
                            style={{backgroundColor: '#ff6347'}}
                            variant="outlined"
                            fullWidth={true}
                            endIcon={<SendIcon/>}
                            onClick={contactMeButtonPressed}
                        >
                            Contact me
                        </Button>
                    </Box>
                </Grid>
            </Box>
        </>
    );
};

export default Contact;