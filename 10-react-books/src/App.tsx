import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import { useTheme } from './hooks/useTheme'
import BooksPage from './pages/BooksPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'

const App = () => {
	const { isDarkMode } = useTheme();

	return (
		<div id="App" className={ isDarkMode ? "bg-dark text-white" : "" }>
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />

					<Route path="/books">
						{/* /todos */}
						<Route path="" element={<BooksPage />} />
					</Route>

					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>

			<ReactQueryDevtools />
		</div>
	)
}

export default App
