import { Box, Button, Grid, Link } from '@material-ui/core'
import baselCV from '../assets/files/Basel Boulos - CV - Full-stack-Frontend.pdf'
import SendIcon from '@material-ui/icons/Send'
import { useStyles } from '../styles/styles'

export const CV = () => {
	const classes = useStyles()
	return (
		<Grid container justifyContent="center" className={classes.container}>
			<Box component="form" className={classes.form}>
				<Button
					component={Link}
					href={baselCV}
					target="_blank"
					className={classes.styledButton}
					variant="outlined"
					fullWidth={true}
					endIcon={<SendIcon />}
				>
					<span>Download CV (pdf)</span>
				</Button>
			</Box>
		</Grid>
	)
}
