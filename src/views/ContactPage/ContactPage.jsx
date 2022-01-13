import React, { useEffect, useState } from 'react'
import { useStyles } from '../../styles/styles'
import { useForm } from '../../hooks/useForm'
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import { contactService } from '../../services/contact.service'

export const ContactPage = () => {
	const classes = useStyles()
	const [info, handleChange, reset] = useForm({ name: '', email: '', companyName: '', message: '' })
	const [status, setStatus] = useState(undefined)

	const onSubmit = async e => {
		e.preventDefault()
		const res = await contactService.contact(info)
		if (res.status === 200) setStatus({ type: 'success' })
		else setStatus({ type: 'error' })
		console.log(res)
		clearForm()
	}

	const clearForm = () => {
		reset({ name: '', email: '', companyName: '', message: '' })
	}

	const { name, email, companyName, message } = info
	return (
		<Box component="div" className={classes.container}>
			<Grid container justifyContent="center">
				<Box component="form" className={classes.form} onSubmit={onSubmit}>
					<Typography varia8nt="h5" className={classes.contactTypography}>
						Contact me
					</Typography>
					<TextField
						required
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
						required
						className={classes.root}
						label="Email"
						name="email"
						value={email}
						onChange={handleChange}
						fullWidth={true}
						variant="outlined"
						margin="dense"
						inputProps={{ style: { color: 'white' } }}
						size="medium"
					/>
					<TextField
						required
						className={classes.root}
						label="Company Name"
						name="companyName"
						value={companyName}
						onChange={handleChange}
						fullWidth={true}
						variant="outlined"
						margin="dense"
						inputProps={{ style: { color: 'white' } }}
						size="medium"
					/>
					<TextField
						required
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
					<Button type="submit" className={classes.styledButton} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
						Contact me
					</Button>
					<Typography varia8nt="h5" className={classes.errorMsg}>
						{status?.type === 'success' && <div>Thanks for contacting.</div>}
						{status?.type === 'error' && <div>Failed to contact.</div>}
					</Typography>
				</Box>
			</Grid>
		</Box>
	)
}
