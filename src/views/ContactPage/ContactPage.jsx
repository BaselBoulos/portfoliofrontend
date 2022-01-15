import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import { contactService } from '../../services/contact.service'
import { useStyles } from '../../styles/styles'

export const ContactPage = () => {
	const classes = useStyles()
	const [info, handleChange, reset] = useForm({ name: '', email: '', companyName: '', message: '' })
	const [status, setStatus] = useState(null)

	const onSubmit = async event => {
		event.preventDefault()
		const res = await contactService.contact(info)
		if (res.status === 200) {
			setStatus({ type: 'success' })
			clearForm()
		} else {
			setStatus({ type: 'error' })
		}
	}

	const clearForm = () => {
		reset({ name: '', email: '', companyName: '', message: '' })
	}
	const inputs = [
		{
			label: 'Name',
			name: 'name'
		},
		{
			label: 'Email',
			name: 'email'
		},
		{
			label: 'Company Name',
			name: 'companyName'
		},
		{
			label: 'Message',
			name: 'message'
		}
	]
	return (
		<Box component="div" className={classes.container}>
			<Grid container justifyContent="center">
				<Box component="form" className={classes.form} onSubmit={onSubmit}>
					<Typography varia8nt="h5" className={classes.contactTypography}>
						Contact me
					</Typography>
					{inputs.map((input, key) => (
						<TextField
							key={input.label + key}
							required
							className={classes.root}
							label={input.label}
							name={input.name}
							value={info[input.name]}
							onChange={handleChange}
							fullWidth={true}
							variant="outlined"
							inputProps={{ style: { color: 'white' } }}
							margin="dense"
							size="medium"
						/>
					))}
					<Button type="submit" className={classes.styledButton} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
						Contact me
					</Button>
					<div className={classes.errorMsg}>
						{status?.type === 'success' && <span>Thanks for contacting.</span>}
						{status?.type === 'error' && <span>Failed to contact.</span>}
					</div>
				</Box>
			</Grid>
		</Box>
	)
}
