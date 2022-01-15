import Typed from 'react-typed'
import { Link } from 'react-router-dom'
import { Avatar, Box, Button, Grid, Typography } from '@material-ui/core'
import avatar from '../../assets/img/avatar.jpg'
import { useStyles } from '../../styles/styles'

export const HomePage = () => {
	const classes = useStyles()
	return (
		<Box className={classes.boxContainer}>
			<Grid container justifyContent="center">
				<Avatar className={classes.root} src={avatar} alt="Basel Boulos" />
			</Grid>
			<Typography className={classes.headerTitle} variant="h4">
				<Typed strings={['Basel Boulos']} typeSpeed={50} />
			</Typography>
			<br />
			<Typography className={classes.headerSubtitle} variant="h5">
				<Typed strings={['Full Stack/Frontend Web Developer']} typeSpeed={40} backSpeed={50} loop />
			</Typography>
			<Box>
				<Button component={Link} to="/about" className={classes.styledButton} variant="outlined" fullWidth={false}>
					About Me
				</Button>
				<Button component={Link} to="/portfolio" className={classes.styledButton} variant="outlined" fullWidth={false}>
					Portfolio
				</Button>
			</Box>
		</Box>
	)
}
