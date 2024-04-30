import { createContext, useState } from "react";

// Type Definition for the actual Context
interface ThemeContextType {
	isDarkMode: boolean;
	toggleTheme: () => void
}

// Create the actual context (and set the context's initial/default value)
export const ThemeContext = createContext<ThemeContextType | null>(null);

// Type definition for the Provider's props
interface ThemeContextProviderProps {
	children: React.ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	}

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider;
