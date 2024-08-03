import Alert from "react-bootstrap/Alert";

interface WarningProps {
	children: React.ReactNode
	heading?: string;
}

const Warning: React.FC<WarningProps> = ({ children, heading }) => {
	return (
		<Alert variant="danger">
			{heading && <Alert.Heading>{heading}</Alert.Heading>}
			{children}
		</Alert>
	)
}

export default Warning
