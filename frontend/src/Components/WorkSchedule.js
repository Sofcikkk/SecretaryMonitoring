import { useState, useEffect } from "react";
import { getUsers, getUserScheduleById } from "../Services/users.service";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WorkSchedule() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data);
            if (data.length > 0) {
                setSelectedUser(data[0].id);
                setSchedule(data[0].schedules || []);
            }
        });
    }, []);

    useEffect(() => {
        if (selectedUser) {
            const user = users.find(user => user.id === selectedUser);
            setSchedule(user ? user.schedules : []);
        }
    }, [selectedUser, users]);

    const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];
    const timeSlots = [
        "7:10-7:55", "8:00-8:45", "8:55-9:40", "9:50-10:35", "10:45-11:30",
        "11:40-12:25", "12:40-13:25", "13:35-14:20", "14:30-15:15", "15:25-16:10",
        "16:20-17:05", "17:15-18:00"
    ];

    return (
        <div className="container mt-4">
            <h2 className="fw-bold mb-4">Work Schedule</h2>
            {users.length > 0 && (
                <select
                    className="form-select w-50 mb-3"
                    value={selectedUser}
                    onChange={(e) => setSelectedUser(Number(e.target.value))}
                >
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.firstName} {user.lastName}
                        </option>
                    ))}
                </select>
            )}
            <div className="table-responsive border rounded p-3 shadow-sm">
                <table className="table table-bordered text-center">
                    <thead className="table-light">
                    <tr>
                        <th className="text-nowrap">Time</th>
                        {days.map((day) => (
                            <th key={day} className="text-nowrap">{day}</th>
                        ))}
                    </tr>
                    </thead>
                    {console.log(schedule)}
                    <tbody>
                    {timeSlots.map((time, index) => (
                        <tr key={index}>
                            <td>{time}</td>
                            {days.map((_, dayIndex) => (
                                <td key={dayIndex}>{schedule?.[index]?.[dayIndex] || ""}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
