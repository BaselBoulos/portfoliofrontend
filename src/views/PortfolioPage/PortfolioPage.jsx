import { useStyles } from '../../styles/styles'
import { ProjectList } from '../../cmps/ProjectList'
import { Box, Grid } from '@material-ui/core'

export const PortfolioPage = () => {
	const classes = useStyles()
	const projects = [
		{
			title: 'Trackero',
			description: `Trackero is an end-to-end fully functioning task management Web App based on Trello. The App supports personal Task
        Boards, allowing simple and organized task tracking that separates overarching goals or topics from specific tasks.`,
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
			title: 'Portfolio',
			description: `Basel’s portfolio, Developed to present my projects and practice my skills with React and Django for the backend.`,
			websiteUrl: 'https://www.baselboulos.com/',
			gitHub: 'https://github.com/BaselBoulos/portfoliofrontend',
			img: 'portfolio.jpg',
			techs: ['React', 'Material-UI', 'Django']
		},
		{
			title: 'Mister-Bitcoin',
			description: `CRUD Bitcoin Digital wallet for holding and sending money to contacts, Includes working with blockchain API and presenting data in Charts.`,
			websiteUrl: 'https://baselboulos.github.io/proj-mister-bitcoin/#/',
			gitHub: 'https://github.com/BaselBoulos/proj-mister-bitcoin',
			img: 'misterbitcoin.jpg',
			techs: ['React', 'Redux', 'SCSS']
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
		},
		{
			title: 'Brain-Trainer',
			description: `Brain-Trainer College Final Project developed for kids from age 8 to age 12, to learn and practice their thinking abilities and math skills through puzzles and math games with different levels`,
			websiteUrl: '',
			gitHub: 'https://github.com/BaselBoulos/Brain-Trainer',
			img: 'braintrainer.jpg',
			techs: ['Java', 'JavaFX', 'MySQL']
		}
	]
	return (
		<>
			<Box component="div" className={classes.container}>
				<Grid container justifyContent="center" alignItems="center">
					<ProjectList projects={projects} />
				</Grid>
			</Box>
		</>
	)
}
