import { Box, Typography } from '@material-ui/core'
import ReactTyped from 'react-typed'
import { useStyles } from '../../styles/styles'

export const AboutPage = () => {
	const classes = useStyles()
	const text = `
	Hi I'm basel, a young multi-talented human.
	<br/>
	You can also call me a Full Stack / Frontend Web Developer,
	<br />
	I enjoy taking complex real world problems, Solving them using my Critical Thinking, 
	<br />
	and then implementing with my Technology Toolbelt,
	<br />
	(Vue.js, React, Node.js, Express.js, MongoDB and more)
	<br />
	<br />
	Fueled by high energy levels and boundless enthusiasm, I'm easily inspired and
	<br />
	more then willing to follow my facinations wherever they take me,
	<br />
	passionate, expressive, multi-talented spirit with natural ability to entertain and inspire,
	<br />
	I'm never satisfied to just come up with ideas, Instead, I have an almost compulsive
	<br/>
	need to act on them.
	<br />
	<br/>
	Currently, I am pursuing my first entry job as a Full Stack / Frontend developer.
	<br/>
	<br />
	Lets meet ;)
	`
	return (
		<Box component="div" className={classes.container}>
			<Typography className={classes.aboutHeaderTitle} variant="h4">
				<ReactTyped strings={[text]} typeSpeed={30} />
			</Typography>
		</Box>
	)
}
