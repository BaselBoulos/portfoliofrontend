import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
	appHeader: {
		background: '#222'
	},
	navbarMenu: {
		width: 250,
		background: '#511',
		height: '100%'
	},
	listItem: {
		color: 'tan'
	},
	headerTitle: {
		color: 'tomato'
	},
	headerSubtitle: {
		color: 'tan',
		marginBottom: '1rem'
	},
	boxContainer: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		textAlign: 'center',
		width: '100%'
	},
	portfolioMainContainer: {
		background: '#233',
		height: '100%'
	},
	portfolioCardContainer: {
		maxWidth: 350,
		margin: '5rem auto'
	},
	portfolioCardContent: {
		textAlign: 'center'
	},
	portfolioCardButtons: {
		padding: 0,
		alignItems: 'center'
	},
	portfolioCardList: {
		display: 'flex',
		'flex-wrap': 'wrap',
		'list-style': 'none',
		padding: '5px',
		gap: '5px',
		margin: 0,
		'justify-content': 'center'
		// 'font-family': 'Roboto'
	},
	form: {
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		position: 'absolute',
		'max-width': '250px'
	},
	root: {
		'&.MuiAvatar-root': {
			width: theme.spacing(13),
			height: theme.spacing(13),
			margin: '0.5rem auto'
		},
		'& .MuiBottomNavigationAction-root': {
			minWidth: 0,
			maxWidth: 250,
			padding: 0
		},
		'& .MuiSvgIcon-root': {
			fill: 'tan',
			'&:hover': {
				fill: 'tomato'
			}
		},
		'& label.Mui-focused': {
			color: 'tomato'
		},
		'& label': {
			color: 'tan'
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'tan'
			},
			'&:hover fieldset': {
				borderColor: 'tan'
			},
			'&.Mui-focused fieldset': {
				borderColor: 'tan'
			}
		}
	},
	aboutHeaderTitle: {
		color: 'tomato',
		padding: '25px'
	},
	aboutHeaderSubtitle: {
		color: 'tan',
		textAlign: 'center'
	},
	contactTypography: {
		color: 'tomato',
		textAlign: 'center',
		textTransform: 'uppercase'
	},
	errorMsg: {
		color: 'tomato',
		textAlign: 'center'
	},
	styledButton: {
		backgroundColor: '#ff6347',
		textDecoration: 'inherit',
		'margin-right': '5px'
	},
	container: {
		background: '#233',
		height: '100vh'
	}
}))
