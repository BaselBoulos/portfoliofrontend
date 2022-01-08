import { Avatar, Box, Button, Grid, Typography } from '@material-ui/core'
import avatar from '../../assets/img/avatar.jpg'
import Typed from 'react-typed'
import { useStyles } from '../../styles/styles'
import { Link } from 'react-router-dom'

export const HomePage = () => {
	const classes = useStyles()
	return (
		<Box className={classes.boxContainer}>
			<Grid container justifyContent="center">
				<Avatar className={classes.headerAvatar} src={avatar} alt="Basel Boulos" />
			</Grid>
			<Typography className={classes.headerTitle} variant="h4">
				<Typed strings={['Basel Boulos']} typeSpeed={50} />
			</Typography>
			<br />
			<Typography className={classes.headerSubtitle} variant="h5">
				<Typed strings={['Full-Stack/Frontend Web Developer']} typeSpeed={40} backSpeed={50} loop />
			</Typography>
			<Link to="/about">
				<Button className={classes.aboutButton} variant="outlined" fullWidth={false}>
					About Me
				</Button>
			</Link>
		</Box>
	)
}
