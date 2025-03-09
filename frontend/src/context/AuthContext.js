import { createContext, useContext, useState, useEffect } from "react";

// Create AuthContext
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Load authentication state from localStorage when the app starts
    useEffect(() => {
        const storedAuth = localStorage.getItem("isAuthenticated");
        if (storedAuth === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true"); // Store auth state
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated"); // Clear auth state
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
