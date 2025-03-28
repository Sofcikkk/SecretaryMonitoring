import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const API_URL = `${baseURL}/api/tasks`;

export async function getTasks() {
    const response = await axios.get(API_URL);
    console.log(response.data)
    return response.data;
}

export async function getTaskById(id) {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}

export async function getTaskByUserId(userId) {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
}

export async function createTask(task) {
    const response = await axios.post(API_URL, task);
    return response.data;
}

export async function updateTaskById(id, updatedTask) {
    const response = await axios.put(`${API_URL}/${id}`, updatedTask);
    return response.data;
}

export async function deleteTaskById(id) {
    await axios.delete(`${API_URL}/${id}`);
}
