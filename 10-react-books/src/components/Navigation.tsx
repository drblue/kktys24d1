import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import useBooks from '../hooks/useBooks'

const Navigation = () => {
	const { isDarkMode, toggleTheme } = useTheme();
	const { data: books } = useBooks();

	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">📚 React Books</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/books">
							Books <Badge bg="primary">{books ? books.length : "-"}</Badge>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>

				<Button variant="outline-secondary" onClick={toggleTheme}>
					{isDarkMode ? "☀️": "🌙"}
				</Button>
			</Container>
		</Navbar>
	)
}

export default Navigation
