import React from 'react'
import { useStyles } from '../../styles/styles'
import { useForm } from '../../hooks/useForm'
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import { contactService } from '../../services/contact.service'

export const ContactPage = () => {
	const classes = useStyles()
	const [info, handleChange] = useForm({ name: '', email: '', companyName: '', message: '' })

	function onSubmit() {
		contactService.contact(info)
	}

	const { name, email, companyName, message } = info
	return (
		<>
			<Box component="div" className={classes.contactContainer}>
				<Grid container justifyContent="center">
					<Box component="form" className={classes.form}>
						<Typography varia8nt="h5" className={classes.contactTypography}>
							Contact me
						</Typography>
						<TextField
							className={classes.root}
							label="Name"
							name="name"
							value={name}
							onChange={handleChange}
							fullWidth={true}
							variant="outlined"
							inputProps={{ style: { color: 'white' } }}
							margin="dense"
							size="medium"
						/>
						<TextField
							className={classes.root}
							label="Email"
							name="email"
							value={email}
							onChange={handleChange}
							fullWidth={true}
							variant="outlined"
							inputProps={{ style: { color: 'white' } }}
							margin="dense"
							size="medium"
						/>
						<TextField
							className={classes.root}
							label="Company Name"
							name="companyName"
							value={companyName}
							onChange={handleChange}
							fullWidth={true}
							variant="outlined"
							inputProps={{ style: { color: 'white' } }}
							margin="dense"
							size="medium"
						/>
						<TextField
							className={classes.root}
							label="Message"
							name="message"
							value={message}
							onChange={handleChange}
							fullWidth={true}
							variant="outlined"
							inputProps={{ style: { color: 'white' } }}
							margin="dense"
							size="medium"
						/>
						<Button className={classes.styledButton} variant="outlined" fullWidth={true} endIcon={<SendIcon />} onClick={onSubmit}>
							Contact me
						</Button>
					</Box>
				</Grid>
			</Box>
		</>
	)
}
