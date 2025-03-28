import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../../Services/tasks.service";
import { TaskContext } from "../../context/TaskContext";

export default function NewTask() {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const assignedToRef = useRef();
    const completedRef = useRef();

    const { addTask } = useContext(TaskContext);
    const navigate = useNavigate();

    async function handleAdd(e) {
        e.preventDefault();
        const newTask = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            user_id: assignedToRef.current.value,
            completed: completedRef.current.checked
        };

        try {
            const response = await createTask(newTask);
            addTask(response);
            navigate("/TasksList");
        } catch (error) {
            console.error('Error creating task:', error);
        }
    }

    return (
        <div className="container mt-4">
            <h2>New Task</h2>
            <form onSubmit={handleAdd}>
                <div className="mb-3">
                    <label className="form-label">Tytuł</label>
                    <input ref={titleRef} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Opis</label>
                    <textarea ref={descriptionRef} className="form-control" required></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Przydzielone do (ID użytkownika)</label>
                    <input type="number" ref={assignedToRef} className="form-control" required />
                </div>
                <div className="form-check mb-3">
                    <input ref={completedRef} className="form-check-input" type="checkbox" id="completedCheckbox" />
                    <label className="form-check-label" htmlFor="completedCheckbox">
                        Completed
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Dodaj zadanie</button>
            </form>
        </div>
    );
}
