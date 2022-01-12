import { Link } from 'react-router-dom'
import { useStyles } from '../styles/styles'
import { Box, Avatar, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons'
import InfoIcon from '@material-ui/icons/Info'
import avatar from '../assets/img/avatar.jpg'

export const SideList = ({ toggleSlider }) => {
	const classes = useStyles() // To use the CSS Styles in styles.js
	const menuItems = [
		{
			listIcon: <Home />,
			listText: 'Home',
			listPath: '/'
		},
		{
			listIcon: <AssignmentInd />,
			listText: 'CV',
			listPath: '/cv'
		},
		{
			listIcon: <Apps />,
			listText: 'Portfolio',
			listPath: '/portfolio'
		},
		{
			listIcon: <ContactMail />,
			listText: 'Contact',
			listPath: '/contact'
		},
		{
			listIcon: <InfoIcon />,
			listText: 'About',
			listPath: '/about'
		}
	]
	return (
		<>
			<Box className={classes.navbarMenu} component="div" onClick={toggleSlider('right', false)}>
				<Avatar className={classes.root} src={avatar} alt="Basel Boulos" />
				<List>
					{menuItems.map((lsItem, key) => (
						<ListItem button key={key} component={Link} to={lsItem.listPath}>
							<ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
							<ListItemText className={classes.listItem} primary={lsItem.listText} />
						</ListItem>
					))}
				</List>
			</Box>
		</>
	)
}
