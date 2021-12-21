import React from 'react'
import { useStyles } from '../../static/styles/styles'
import Navbar from './Navbar'
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
import project1 from '../.././static/images/project1.jpg'
import project2 from '../.././static/images/project2.jpg'
import project3 from '../.././static/images/project3.jpg'
import project4 from '../.././static/images/project4.jpg'
import project5 from '../.././static/images/project5.png'
import project6 from '../.././static/images/project6.jpg'
import project7 from '../.././static/images/project7.jpg'
import project8 from '../.././static/images/project8.png'
import memegenerator from '../.././static/images/memegenerator.png'
import appsus from '../.././static/images/appsus.png'
import trackero from '../.././static/images/trackero.png'
import minesweeper from '../.././static/images/minesweeper.png'
import GitHubIcon from '@material-ui/icons/GitHub'
import { SiJava, SiMysql, SiPython, SiBootstrap, SiVuedotjs } from 'react-icons/si'
import { DiCss3, DiDjango, DiHtml5, DiJavascript, DiVuejs } from 'react-icons/di'

const Portfolio = () => {
	const classes = useStyles() // To use the CSS Styles in styles.js
	return (
		<>
			<Box component="div" className={classes.portfolioMainContainer}>
				<Navbar />
				<Grid container justify="center" alignItems="center">
					{/* Project trackero */}
					<Grid item xs={12} sm={8} md={6}>
						<Card className={classes.portfolioCardContainer}>
							<CardActionArea href="https://trackero-proj.herokuapp.com/" target="_blank">
								<CardMedia component="img" alt="Appsus" height="150" image={trackero} />
								<CardContent className={classes.portfolioCardContent}>
									<Typography gutterBottom variant="h6">
										Trackero
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										Trackero is an end-to-end fully functioning task management Web App based on Trello. The App supports personal Task
										Boards, allowing simple and organized task tracking that separates overarching goals or topics from specific tasks
									</Typography>
									<Typography>Utilized: Vue.js / Vuex, Node.js, Express.js, MongoDB / SCSS / Socket.io and more.</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<BottomNavigation width="auto" showLabels className={classes.portfolioCardButtons}>
									<BottomNavigationAction
										label="GitHub"
										icon={
											<a href="https://github.com/BaselBoulos/trackero">
												<GitHubIcon />
											</a>
										}
									/>
								</BottomNavigation>
							</CardActions>
						</Card>
					</Grid>
					{/* Project appsus */}
					<Grid item xs={12} sm={8} md={6}>
						<Card className={classes.portfolioCardContainer}>
							<CardActionArea href="https://baselboulos.github.io/proj-appsus/#/" target="_blank">
								<CardMedia component="img" alt="Appsus" height="150" image={appsus} />
								<CardContent className={classes.portfolioCardContent}>
									<Typography gutterBottom variant="h6">
										Appsus
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										Appsus is a dual Frontend email and a note keeping application, Including App integration, Note can be sent as an email
										and email can be saved as a note, Inspire by Google Keep and Gmail.
									</Typography>
									<Typography>Utilized: Vue.js with no external libraries, and CSS3 for styling</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<BottomNavigation width="auto" showLabels className={classes.portfolioCardButtons}>
									<BottomNavigationAction
										label="GitHub"
										icon={
											<a href="https://github.com/BaselBoulos/proj-appsus">
												<GitHubIcon />
											</a>
										}
									/>
								</BottomNavigation>
							</CardActions>
						</Card>
					</Grid>
					{/* Project Memegenerator */}
					<Grid item xs={12} sm={8} md={6}>
						<Card className={classes.portfolioCardContainer}>
							<CardActionArea href="https://baselboulos.github.io/baselboulos-memegenerator/index.html#" target="_blank">
								<CardMedia component="img" alt="Memegenerator" height="150" image={memegenerator} />
								<CardContent className={classes.portfolioCardContent}>
									<Typography gutterBottom variant="h6">
										Meme Generator
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										MemeGenerator is an application that allows the user to edit chosen image from the gallery and share/download the final
										results to their device,
									</Typography>
									<Typography>Utilized: Vanilla JavaScript, HTML5, and CSS for styling.</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<BottomNavigation width="auto" showLabels className={classes.portfolioCardButtons}>
									<BottomNavigationAction
										label="GitHub"
										icon={
											<a href="https://github.com/BaselBoulos/baselboulos-memegenerator">
												<GitHubIcon />
											</a>
										}
									/>
								</BottomNavigation>
							</CardActions>
						</Card>
					</Grid>
					{/* Project Minesweeper */}
					<Grid item xs={12} sm={8} md={6}>
						<Card className={classes.portfolioCardContainer}>
							<CardActionArea href="https://baselboulos.github.io/baselboulos-minesweeper/" target="_blank">
								<CardMedia component="img" alt="Memegenerator" height="150" image={minesweeper} />
								<CardContent className={classes.portfolioCardContent}>
									<Typography gutterBottom variant="h6">
										Minesweeper
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										Minesweeper Clone developed as first sprint in coding academy bootcamp.
									</Typography>
									<Typography>Utilized: Vanilla JavaScript, HTML, and CSS for styling.</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<BottomNavigation width="auto" showLabels className={classes.portfolioCardButtons}>
									<BottomNavigationAction
										label="GitHub"
										icon={
											<a href="https://github.com/BaselBoulos/baselboulos-minesweeper">
												<GitHubIcon />
											</a>
										}
									/>
								</BottomNavigation>
							</CardActions>
						</Card>
					</Grid>

					{/* Project 1 Brain Trainer */}
					<Grid item xs={12} sm={8} md={6}>
						<Card className={classes.portfolioCardContainer}>
							<CardActionArea>
								<CardMedia component="img" alt="Brain-Trainer - College Project" height="150" image={project1} />
								<CardContent className={classes.portfolioCardContent}>
									<Typography gutterBottom variant="h6">
										Brain-Trainer - College Project
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										Brain-Trainer, College Final Project developed for kids to learn and practice thinking abilities and mathematics skills,
										through puzzle and math games with different levels.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<BottomNavigation width="auto" showLabels className={classes.portfolioCardButtons}>
									<BottomNavigationAction
										label="GitHub"
										icon={
											<a href="https://github.com/BaselBoulos/Brain-Trainer">
												<GitHubIcon />
											</a>
										}
									/>
								</BottomNavigation>
								<SiJava />
								<SiMysql />
							</CardActions>
						</Card>
					</Grid>
					{/* Project 7 - Profiles */}
					<Grid item xs={12} sm={8} md={6}>
						<Card className={classes.portfolioCardContainer}>
							<CardActionArea>
								<CardMedia component="img" alt="ProfilesCalculator" height="150" image={project7} />
								<CardContent className={classes.portfolioCardContent}>
									<Typography gutterBottom variant="h6">
										ProfilesCalculator
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										A tool to prevent over-ordered material purchases and waste by returning the most optimal way to use it in production,
										and the quantity to order I use this tool in my job as a production planning and control.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<BottomNavigation width="auto" showLabels className={classes.portfolioCardButtons}>
									<BottomNavigationAction
										label="GitHub"
										icon={
											<a href="#">
												<GitHubIcon />
											</a>
										}
									/>
								</BottomNavigation>
								<SiPython />
							</CardActions>
						</Card>
					</Grid>
					{/* Project 8 - QAReports */}
					<Grid item xs={12} sm={8} md={6}>
						<Card className={classes.portfolioCardContainer}>
							<CardActionArea>
								<CardMedia component="img" alt="QAReports" height="150" image={project8} />
								<CardContent className={classes.portfolioCardContent}>
									<Typography gutterBottom variant="h6">
										QAReports
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										A tool developed to help with my job as a production planner generating a quality assurance report with the needed
										symbols and dimensions with the inputs given, ready to be copied to the original form, reducing the time needed to
										generate reports by 50%+.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<BottomNavigation width="auto" showLabels className={classes.portfolioCardButtons}>
									<BottomNavigationAction
										label="GitHub"
										icon={
											<a href="#">
												<GitHubIcon />
											</a>
										}
									/>
								</BottomNavigation>
								<SiPython />
							</CardActions>
						</Card>
					</Grid>
					{/* Project 6 - Twitter */}
					{/* <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.portfolioCardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="social network"
                                    height="150"
                                    image={project6}/>
                                <CardContent className={classes.portfolioCardContent}>
                                    <Typography gutterBottom variant="h6">
                                        Social network
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Full-Stack Twitter-like social network website for making posts and following
                                        users, a single page application, with the use of APIs and used pagination in
                                        the backend.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <BottomNavigation
                                    width="auto"
                                    showLabels
                                    className={classes.portfolioCardButtons}>
                                    <BottomNavigationAction
                                        label="GitHub"
                                        icon={
                                            <a href="https://github.com/BaselBoulos/Network-CS50-Project-4">
                                                <GitHubIcon/>
                                            </a>
                                        }
                                    />
                                </BottomNavigation>
                                <SiPython/>
                                <DiDjango/>
                                <DiJavascript/>
                                <DiCss3/>
                                <DiHtml5/>
                            </CardActions>
                        </Card>
                    </Grid> */}
					{/* Project 5  - Mail*/}
					{/* <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.portfolioCardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Mail API"
                                    height="150"
                                    image={project5}/>
                                <CardContent className={classes.portfolioCardContent}>
                                    <Typography gutterBottom variant="h6">
                                        Mail-Client
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        In This Project I Was Asked To Design a front-end for an email client
                                        that makes API calls to send and receive emails, Done as a Single page
                                        application.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <BottomNavigation
                                    width="auto"
                                    showLabels
                                    className={classes.portfolioCardButtons}>
                                    <BottomNavigationAction
                                        label="GitHub"
                                        icon={
                                            <a href="https://github.com/BaselBoulos/Mail-CS50-Project-3">
                                                <GitHubIcon/>
                                            </a>
                                        }
                                    />
                                </BottomNavigation>
                                <SiPython/>
                                <DiDjango/>
                                <DiJavascript/>
                                <DiCss3/>
                                <DiHtml5/>
                            </CardActions>
                        </Card>
                    </Grid> */}
					{/* Project 4 - Commerce */}
					{/* <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.portfolioCardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Commerce"
                                    height="150"
                                    image={project4}/>
                                <CardContent className={classes.portfolioCardContent}>
                                    <Typography gutterBottom variant="h6">
                                        Commerce Website
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This website integrates the uses of Django with a database point of view with
                                        the ability to create an account, log in and either bid on active listings like
                                        you
                                        would for eBay but as well as create your own listings of items to sell.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <BottomNavigation
                                    width="auto"
                                    showLabels
                                    className={classes.portfolioCardButtons}>
                                    <BottomNavigationAction
                                        label="GitHub"
                                        icon={
                                            <a href="https://github.com/BaselBoulos/Commerce-CS50-Project-2">
                                                <GitHubIcon/>
                                            </a>
                                        }
                                    />
                                </BottomNavigation>
                                <SiPython/>
                                <DiDjango/>
                                <SiBootstrap/>
                                <DiJavascript/>
                                <DiCss3/>
                                <DiHtml5/>
                            </CardActions>
                        </Card>
                    </Grid> */}
					{/* Project 3 - MIT 2 */}
					{/*<Grid item xs={12} sm={8} md={6}>*/}
					{/*    <Card className={classes.portfolioCardContainer}>*/}
					{/*        <CardActionArea>*/}
					{/*            <CardMedia*/}
					{/*                component="img"*/}
					{/*                alt="MIT6.00.2x"*/}
					{/*                height="150"*/}
					{/*                image={project3}/>*/}
					{/*            <CardContent className={classes.portfolioCardContent}>*/}
					{/*                <Typography gutterBottom variant="h6">*/}
					{/*                    MIT6.00.2x - CS Course*/}
					{/*                </Typography>*/}
					{/*                <Typography variant="body2" color="textSecondary" component="p">*/}
					{/*                    An introduction to using computation to understand real-world phenomena.*/}
					{/*                    I learned in this course Plotting with the pylab package, Stochastic programming*/}
					{/*                    and statistical thinking, Monte Carlo simulations. 150+ Hours Course.*/}
					{/*                </Typography>*/}
					{/*            </CardContent>*/}
					{/*        </CardActionArea>*/}
					{/*        <CardActions>*/}
					{/*            <BottomNavigation*/}
					{/*                width="auto"*/}
					{/*                showLabels*/}
					{/*                className={classes.portfolioCardButtons}>*/}
					{/*                <BottomNavigationAction*/}
					{/*                    label="GitHub"*/}
					{/*                    icon={*/}
					{/*                        <a href="https://github.com/BaselBoulos/MIT6.00.2x-Course">*/}
					{/*                            <GitHubIcon/>*/}
					{/*                        </a>*/}
					{/*                    }*/}
					{/*                />*/}
					{/*            </BottomNavigation>*/}
					{/*            <SiPython/>*/}
					{/*        </CardActions>*/}
					{/*    </Card>*/}
					{/*</Grid>*/}
					{/* Project 2 - MIT 1 */}
					{/*<Grid item xs={12} sm={8} md={6}>*/}
					{/*    <Card className={classes.portfolioCardContainer}>*/}
					{/*        <CardActionArea>*/}
					{/*            <CardMedia*/}
					{/*                component="img"*/}
					{/*                alt="MIT6.00.1x"*/}
					{/*                height="150"*/}
					{/*                image={project2}/>*/}
					{/*            <CardContent className={classes.portfolioCardContent}>*/}
					{/*                <Typography gutterBottom variant="h6">*/}
					{/*                    MIT6.00.1x - CS Course*/}
					{/*                </Typography>*/}
					{/*                <Typography variant="body2" color="textSecondary" component="p">*/}
					{/*                    An introduction to computer science as a tool to solve real-world*/}
					{/*                    analytical problems I learned in this course, A Notion of computation,*/}
					{/*                    The Python programming language, Some simple algorithms, Testing and debugging,*/}
					{/*                    An informal introduction to algorithmic complexity, and Data structures*/}
					{/*                    150+ Hours Course.*/}
					{/*                </Typography>*/}
					{/*            </CardContent>*/}
					{/*        </CardActionArea>*/}
					{/*        <CardActions>*/}
					{/*            <BottomNavigation*/}
					{/*                width="auto"*/}
					{/*                showLabels*/}
					{/*                className={classes.portfolioCardButtons}>*/}
					{/*                <BottomNavigationAction*/}
					{/*                    label="GitHub"*/}
					{/*                    icon={*/}
					{/*                        <a href="https://github.com/BaselBoulos/MIT6.00.1x-Course">*/}
					{/*                            <GitHubIcon/>*/}
					{/*                        </a>*/}
					{/*                    }*/}
					{/*                />*/}
					{/*            </BottomNavigation>*/}
					{/*            <SiPython/>*/}
					{/*        </CardActions>*/}
					{/*    </Card>*/}
					{/*</Grid>*/}
				</Grid>
			</Box>
		</>
	)
}

export default Portfolio
