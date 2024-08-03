import Alert from "react-bootstrap/Alert";

interface SuccessProps {
	children: React.ReactNode
	heading?: string;
}

const Success: React.FC<SuccessProps> = ({ children, heading }) => {
	return (
		<Alert variant="success">
			{heading && <Alert.Heading>{heading}</Alert.Heading>}
			{children}
		</Alert>
	)
}

export default Success
