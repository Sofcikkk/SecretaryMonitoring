import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear authentication data
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("user");

        // Redirect to login page
        navigate("/login");
    }, [navigate]); // Runs only once when the component mounts

    return null; // No UI needed since it's a redirect-only component
}
