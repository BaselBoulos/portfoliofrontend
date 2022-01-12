import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import { CV } from './cmps/CV'
import { AboutPage } from './views/AboutPage/AboutPage'
import { ContactPage } from './views/ContactPage/ContactPage'
import { HomePage } from './views/HomePage/HomePage'
import { PortfolioPage } from './views/PortfolioPage/PortfolioPage'

export function App() {
	return (
		<Router>
			<div className="App">
				<AppHeader />
				<Routes>
					<Route element={<PortfolioPage />} path="/portfolio" />
					<Route element={<ContactPage />} path="/contact" />
					<Route element={<AboutPage />} path="/about" />
					<Route element={<CV />} path="/cv" />
					<Route element={<HomePage />} path="/" />
				</Routes>
				,
			</div>
		</Router>
	)
}
