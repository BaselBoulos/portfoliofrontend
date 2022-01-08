import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import { HomePage } from './views/HomePage/HomePage'
import { PortfolioPage } from './views/PortfolioPage/PortfolioPage'

export function App() {
	return (
		<Router>
			<div className="App">
				<AppHeader />
				<Routes>
					<Route element={<PortfolioPage />} path="/portfolio" />
					<Route element={<HomePage />} path="/" />
				</Routes>
			</div>
		</Router>
	)
}
