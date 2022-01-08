import React, { useState, Suspense } from 'react'
import { ArrowBack } from '@material-ui/icons'
import { Box, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import { SideList } from './SideList'
import { SideListFooter } from './SideListFooter'

export const AppHeader = () => {
	const [state, setState] = useState({
		right: false
	})

	const toggleSlider = (slider, open) => () => {
		setState({ ...state, [slider]: open })
	}

	return (
		<div className="appHeader">
			<Box component="nav">
				<AppBar position="static" style={{ background: '#222' }}>
					<Toolbar>
						<IconButton onClick={toggleSlider('right', true)}>
							<ArrowBack style={{ color: 'tomato' }} />
						</IconButton>
						<Typography variant="h5" style={{ color: 'tan' }}>
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
		</div>
	)
}
