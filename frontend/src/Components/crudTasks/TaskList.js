import React, { useEffect, useContext } from "react";
import { getTasks } from "../../Services/tasks.service";
import { TaskContext } from "../../context/TaskContext";
import TaskTableRow from "./TaskTableRow";
import { NavLink } from "react-router-dom";

export default function TaskList() {
    const { tasks, updateTasks } = useContext(TaskContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const tasksData = await getTasks();
                updateTasks(tasksData);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Tasks List</h2>
                <NavLink to="/newTask" className="btn btn-primary">
                    Add New Task
                </NavLink>
            </div>
            <table className="table table-bordered table-hover">
                <thead className="thead-light">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>User ID</th>
                    <th>Completed</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {tasks && tasks.length > 0 ? (
                    tasks.map(task => (
                        <TaskTableRow
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            user_id={task.user_id}
                            completed={task.completed ? "Yes" : "No"}
                        />
                    ))
                ) : (
                    <tr>
                        <td colSpan="6" className="text-center">
                            No tasks available
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}
