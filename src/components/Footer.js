import React from 'react'
import { useStyles } from '../../static/styles/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { InstagramIcon } from '@material-ui/icons'
import { LinkedInIcon } from '@material-ui/icons'
import { GitHubIcon } from '@material-ui/icons'

const Footer = () => {
	const classes = useStyles() // To use the CSS Styles in styles.js
	// const links = [
	// 	{
	// 		link: 'https://github.com/BaselBoulos',
	// 		icon: '<GitHubIcon />'
	// 	}
	// ],
	return (
		<BottomNavigation width="auto" style={{ background: '#222' }}>
			<BottomNavigationAction
				className={classes.root}
				icon={
					<a href="https://github.com/BaselBoulos">
						<GitHubIcon />
					</a>
				}
			/>
			<BottomNavigationAction
				className={classes.root}
				icon={
					<a href="https://www.instagram.com/baselboulos/">
						<InstagramIcon />
					</a>
				}
			/>
			<BottomNavigationAction
				className={classes.root}
				icon={
					<a href="https://www.linkedin.com/in/baselboulos/">
						<LinkedInIcon />
					</a>
				}
			/>
		</BottomNavigation>
	)
}

export default Footer
