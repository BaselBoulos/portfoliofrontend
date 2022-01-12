import { useStyles } from '../styles/styles'
import { Box, Button, Grid, Link } from '@material-ui/core'
import baselCV from '../assets/files/Basel Boulos - CV - Full-stack-Frontend.pdf'
import SendIcon from '@material-ui/icons/Send'

export const CV = () => {
	const classes = useStyles()
	return (
		<Box component="div" className={classes.cvContainer}>
			<Grid container justifyContent="center">
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
						Download CV (pdf)
					</Button>
				</Box>
			</Grid>
		</Box>
	)
}
