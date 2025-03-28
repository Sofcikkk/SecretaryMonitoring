import { useState, useEffect } from "react";
import { getUsers } from "../Services/users.service";
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css';

export default function WorkSchedule() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [scheduleMatrix, setScheduleMatrix] = useState([]);

    const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];
    const dayKeys = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    const timeSlots = [
        "7:10-7:55", "8:00-8:45", "8:55-9:40", "9:50-10:35", "10:45-11:30",
        "11:40-12:25", "12:40-13:25", "13:35-14:20", "14:30-15:15", "15:25-16:10",
        "16:20-17:05", "17:15-18:00"
    ];

    const parseTime = (str) => {
        const [h, m] = str.split(":").map(Number);
        return h * 60 + m;
    };

    const processSchedule = (schedules) => {
        const matrix = Array.from({ length: timeSlots.length }, () =>
            Array(dayKeys.length).fill(false)
        );

        schedules.forEach((item) => {
            const start = parseTime(item.startTime);
            const end = parseTime(item.endTime);
            const dayIndex = dayKeys.indexOf(item.day.toLowerCase());
            if (dayIndex === -1) return;

            timeSlots.forEach((slot, slotIndex) => {
                const [slotStartStr, slotEndStr] = slot.split("-");
                const slotStart = parseTime(slotStartStr);
                const slotEnd = parseTime(slotEndStr);
                const overlaps = start < slotEnd && end > slotStart;
                if (overlaps) {
                    matrix[slotIndex][dayIndex] = true;
                }
            });
        });

        return matrix;
    };

    useEffect(() => {
        const loggedUserId = Number(localStorage.getItem("userId")); // konwersja!
        getUsers().then((data) => {
            if (data.length === 0) return;

            setUsers(data);
            const matchingUser = data.find((u) => u.id === loggedUserId);
            const defaultUser = matchingUser || data[0];
            setSelectedUser(defaultUser.id);
            setScheduleMatrix(processSchedule(defaultUser.schedules || []));
        });
    }, []);

    useEffect(() => {
        const user = users.find((u) => u.id === selectedUser);
        if (user) {
            setScheduleMatrix(processSchedule(user.schedules || []));
        }
    }, [selectedUser, users]);

    return (
        <div className="container mt-4">
            <h2 className="fw-bold mb-4">Work Schedule</h2>

            {users.length > 0 && (
                <select
                    className="form-select w-50 mb-3"
                    value={selectedUser ?? ""}
                    onChange={(e) => setSelectedUser(Number(e.target.value))}
                >
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.firstName} {user.lastName}
                        </option>
                    ))}
                </select>
            )}

            <div className="table-responsive border rounded p-3 shadow-sm schedule-table-wrapper">
                <table className="schedule-table text-center">
                    <thead className="table-light">
                    <tr>
                        <th>Czas</th>
                        {days.map((day) => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {timeSlots.map((slot, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>{slot}</td>
                            {dayKeys.map((_, colIndex) => {
                                const isCurrent = scheduleMatrix?.[rowIndex]?.[colIndex];
                                const aboveIsSame = rowIndex > 0 && scheduleMatrix?.[rowIndex - 1]?.[colIndex];
                                const belowIsSame = rowIndex < timeSlots.length - 1 && scheduleMatrix?.[rowIndex + 1]?.[colIndex];

                                return (
                                    <td
                                        key={colIndex}
                                        className={
                                            isCurrent
                                                ? [
                                                    aboveIsSame ? "no-border-top" : "",
                                                    belowIsSame ? "no-border-bottom" : "",
                                                ].join(" ")
                                                : ""
                                        }
                                    >
                                        {isCurrent && (
                                            <div
                                                className={[
                                                    "slot",
                                                    !aboveIsSame && "slot-top",
                                                    !belowIsSame && "slot-bottom",
                                                ]
                                                    .filter(Boolean)
                                                    .join(" ")}
                                            >
                                                &nbsp;
                                            </div>
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
