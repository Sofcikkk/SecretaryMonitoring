import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const apiUrl = `${baseURL}/api/users`;

export const getUsers = async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const createUser = async (user) => {
    try {
        const response = await axios.post(apiUrl, user);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getUserById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateUserById = async (id, user) => {
    try {
        const response = await axios.put(`${apiUrl}/${id}`, user);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteUserById = async (id) => {
    try {
        const response = await axios.delete(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const getUserScheduleById = async (id) => {
    try{
        const response = await  axios.get(`${apiUrl}/${id}/schedules`)
        return response.data
    }catch (error){
        throw error;
    }
}
export const getUserVacationById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/${id}/vacation`)
        return response.data
    } catch (error) {
        throw error;
    }
}
export const updateAcceptation = async (id, accept) => {
    try {
        const response = await axios.put(
            `${apiUrl}/${id}/vacation`,
            accept,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Błąd przy updateAcceptation:", error.response?.data || error.message);
        throw error;
    }
}
export const submitVacationRequest = async (request) => {
    try {
        const response = await axios.post(`${apiUrl}/vacation`, request);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const getAllVacations = async () => {
    const response = await axios.get(`${apiUrl}/vacation/all`);
    return response.data;
};