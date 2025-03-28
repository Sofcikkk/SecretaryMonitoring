import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({});

    const addTask = (newTask) => {
        setTasks(prev => [...prev, newTask]);
    }

    const updateTask = (updatedTask) => {
        setTask(updatedTask);
    }

    const updateTasks = (newTasks) => {
        setTasks(newTasks);
    }

    const removeTaskById = (id) => {
        setTasks(prev => prev.filter(t => t.id !== id));
    }
    return (
        <TaskContext.Provider
            value={{
                tasks,
                task,
                addTask,
                updateTask,
                updateTasks,
                removeTaskById
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}