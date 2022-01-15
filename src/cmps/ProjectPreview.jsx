import {
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
import { useStyles } from '../styles/styles'

export const ProjectPreview = ({ project }) => {
	const classes = useStyles()
	return (
		<Grid item xs={12} sm={8} md={6}>
			<Card className={classes.portfolioCardContainer}>
				<CardActionArea href={project.websiteUrl} target="_blank">
					<CardMedia component="img" alt={project.title} height="150" image={require(`../assets/img/${project.img}`)} />
					<CardContent className={classes.portfolioCardContent}>
						<Typography gutterBottom variant="h6">
							{project.title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{project.description}
						</Typography>
						<ul className={classes.portfolioCardList}>
							<span>Utilized:</span>
							{project.techs.map((tech, key) => {
								return <li key={tech + key}>{tech} / </li>
							})}
						</ul>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<BottomNavigation width="auto" showLabels className={classes.portfolioCardButtons}>
						<BottomNavigationAction
							label="GitHub"
							icon={
								<a href={project.gitHub} target="_blank" rel="noreferrer">
									<GitHubIcon />
								</a>
							}
						/>
					</BottomNavigation>
				</CardActions>
			</Card>
		</Grid>
	)
}
