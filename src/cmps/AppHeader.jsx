import React, { useState, Suspense } from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import { useStyles } from '../styles/styles'
import { ArrowBack } from '@material-ui/icons'
import { SideList } from './SideList'
import { SideListFooter } from './SideListFooter'

export const AppHeader = () => {
	const classes = useStyles()
	const [state, setState] = useState({
		right: false
	})

	const toggleSlider = (slider, open) => () => {
		setState({ ...state, [slider]: open })
	}

	return (
		<Box component="nav">
			<AppBar position="static" className={classes.appHeader}>
				<Toolbar>
					<IconButton onClick={toggleSlider('right', true)}>
						<ArrowBack className={classes.headerTitle} />
					</IconButton>
					<Typography variant="h5" className={classes.listItem}>
						Portfolio
					</Typography>
					<MobileRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider('right', false)}>
						<SideList toggleSlider={toggleSlider} />
						<Suspense fallback={<div>Loading...</div>}>
							<SideListFooter />
						</Suspense>
					</MobileRightMenuSlider>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
