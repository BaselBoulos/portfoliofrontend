import { useStyles } from '../styles/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

export const SideListFooter = () => {
	const classes = useStyles() // To use the CSS Styles in styles.js
	const footerLinks = [
		{
			icon: <GitHubIcon />,
			path: 'https://github.com/BaselBoulos'
		},
		{
			icon: <InstagramIcon />,
			path: 'https://www.instagram.com/baselboulos/'
		},
		{
			icon: <LinkedInIcon />,
			path: 'https://www.linkedin.com/in/baselboulos/'
		}
	]
	return (
		<BottomNavigation width="auto" style={{ background: '#222' }}>
			{footerLinks.map((footerItem, key) => (
				<BottomNavigationAction
					key={key}
					className={classes.root}
					icon={<a href={footerItem.path}>{footerItem.icon}</a>}
				></BottomNavigationAction>
			))}
		</BottomNavigation>
	)
}
