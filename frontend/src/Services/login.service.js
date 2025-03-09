import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL; // Adjust based on your backend URL
const apiUrl = `${baseURL}/api/auth`;
export const loginAPICall = async (username, password) => {
    try {
        const response = await axios.post(`${apiUrl}/login`, { username, password });
        return response;
    } catch (error) {
        throw error;
    }
};

export const logoutAPICall = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
};
