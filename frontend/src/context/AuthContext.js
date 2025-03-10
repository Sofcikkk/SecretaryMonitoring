import { createContext, useContext, useState, useEffect } from "react";
import { loginAPICall } from "../Services/login.service";

const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const storedAuth = localStorage.getItem("isAuthenticated");
        if (storedAuth === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    const login = async (username, password) => {

        if (!username || !password) {
            console.error("❌ Login Error: Missing username or password");
            return; // Prevents second call with undefined values
        }

        try {
            const response = await loginAPICall(username, password);

            if (response.data) {
                const user = response.data;
                setIsAuthenticated(true);
                localStorage.setItem("isAuthenticated", "true");
                localStorage.setItem("userRole", user.role);
                localStorage.setItem("userName", user.firstName);
            }
        } catch (error) {
            console.error("❌ Login failed:", error.response?.data || error);
        }
    };


    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("userRole");
        localStorage.removeItem("userName");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
