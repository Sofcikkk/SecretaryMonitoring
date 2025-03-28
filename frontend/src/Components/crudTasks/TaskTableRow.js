import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { deleteTaskById } from "../../Services/tasks.service";
import { TaskContext } from "../../context/TaskContext";

export default function TaskTableRow({ id, title, description, user_id,completed }) {
    const { removeTaskById } = useContext(TaskContext);

    async function handleDelete() {
        await deleteTaskById(id);
        removeTaskById(id);
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{user_id}</td>
            <td>{completed}</td>
            <td>
                <NavLink to={`/${id}/editTask`} className="btn btn-light">Edit</NavLink>
                <button onClick={handleDelete} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
}
