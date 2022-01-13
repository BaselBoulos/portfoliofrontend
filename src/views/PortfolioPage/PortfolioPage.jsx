import { useStyles } from '../../styles/styles'
import {
	Box,
	Grid,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	BottomNavigationAction,
	BottomNavigation
} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'

export const PortfolioPage = () => {
	const classes = useStyles()
	const projects = [
		{
			title: 'Trackero',
			description: `Trackero is an end-to-end fully functioning task management Web App based on Trello. The App supports personal Task
        Boards, allowing simple and organized task tracking that separates overarching goals or topics from specific tasks`,
			websiteUrl: 'https://trackero-proj.herokuapp.com/',
			gitHub: 'https://github.com/BaselBoulos/trackero',
			img: 'trackero.png',
			techs: ['Vue.js', 'Vuex', 'Node.js', 'Express.js', 'MongoDB', 'SCSS', 'Socket.io']
		},
		{
			title: 'Appsus',
			description: `Appsus is a dual Frontend email and a note keeping application, Including App integration, Note can be sent as an email
            and email can be saved as a note, Inspire by Google Keep and Gmail.`,
			websiteUrl: 'https://baselboulos.github.io/proj-appsus/#/',
			gitHub: 'https://github.com/BaselBoulos/proj-appsus',
			img: 'appsus.png',
			techs: ['Vue.js', 'CSS3']
		},
		{
			title: 'Meme Generator',
			description: `MemeGenerator is an application that allows the user to edit chosen image from the gallery and share/download the final
            results to their device`,
			websiteUrl: 'https://baselboulos.github.io/baselboulos-memegenerator/index.html#',
			gitHub: 'https://github.com/BaselBoulos/baselboulos-memegenerator',
			img: 'memegenerator.png',
			techs: ['Vanilla JavaScript', 'HTML5', 'CSS3']
		},
		{
			title: 'Minesweeper',
			description: `Minesweeper Clone developed as first sprint in coding academy bootcamp.`,
			websiteUrl: 'https://baselboulos.github.io/baselboulos-minesweeper/',
			gitHub: 'https://github.com/BaselBoulos/baselboulos-minesweeper',
			img: 'minesweeper.png',
			techs: ['Vanilla JavaScript', 'HTML5', 'CSS3']
		}
	]
	return (
		<>
			<Box component="div" className={classes.portfolioMainContainer}>
				<Grid container justifyContent="center" alignItems="center">
					{projects.map((project, key) => (
						<Grid key={key} item xs={12} sm={8} md={6}>
							<Card className={classes.portfolioCardContainer}>
								<CardActionArea href={project.websiteUrl} target="_blank">
									<CardMedia component="img" alt={project.title} height="150" image={require(`../../assets/img/${project.img}`)} />
									<CardContent className={classes.portfolioCardContent}>
										<Typography gutterBottom variant="h6">
											{project.title}
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p">
											{project.description}
										</Typography>
										<ul className={classes.portfolioCardList}>
											Utilized:
											{project.techs.map((tech, key) => {
												return <li key={key}>{tech} / </li>
											})}
										</ul>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<BottomNavigation width="auto" showLabels className={classes.portfolioCardButtons}>
										<BottomNavigationAction
											label="GitHub"
											icon={
												<a href={project.gitHub}>
													<GitHubIcon />
												</a>
											}
										/>
									</BottomNavigation>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	)
}
