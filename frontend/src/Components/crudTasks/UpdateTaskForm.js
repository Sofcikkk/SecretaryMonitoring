import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import { getTaskById, updateTaskById } from "../../Services/tasks.service";

export default function UpdateTaskForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { task, updateTask } = useContext(TaskContext);

    useEffect(() => {
        getTaskById(id).then(updateTask);
    }, [id]);

    function handleChange(e) {
        const { id, value } = e.target;
        updateTask(prev => ({ ...prev, [id]: value }));
    }

    async function handleUpdate(e) {
        e.preventDefault();
        await updateTaskById(id, task);
        navigate("/TasksList");
    }

    return (
        <form>
            <input id="title" value={task.title || ""} onChange={handleChange} placeholder="Tytuł" />
            <input id="description" value={task.description || ""} onChange={handleChange} placeholder="Opis" />
            <input id="assignedTo" value={task.assignedTo || ""} onChange={handleChange} placeholder="Przydzielone do (ID)" />
            <input id="dueDate" type="date" value={task.dueDate || ""} onChange={handleChange} placeholder="Termin" />
            <button onClick={handleUpdate}>Zapisz</button>
        </form>
    );
}