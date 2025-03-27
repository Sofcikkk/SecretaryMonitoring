import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL; // Adjust based on your backend URL
const apiUrl = `${baseURL}/api/auth`;
export const loginAPICall = async (email, password) => {
    try {
        const response = await axios.post(`${apiUrl}/login`, { email, password });
        console.log(response.data)
        return response;
    } catch (error) {
        throw error;
    }
};


