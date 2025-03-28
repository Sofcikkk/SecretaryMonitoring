import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Zakładam że masz funkcje API: getUsers() i getUserScheduleById(userId)
import { getUsers, getUserScheduleById } from "../Services/users.service";

export default function WorkTime() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedRole = localStorage.getItem("userRole");
        if (storedRole !== "director") {
            navigate("/");
        } else {
            loadWorkTimeData();
        }
    }, []);

    const loadWorkTimeData = async () => {
        const users = await getUsers();
        const results = [];

        for (const user of users) {
            const schedule = await getUserScheduleById(user.id);
            const totalHours = calculateWeeklyHours(schedule);
            const overtime = Math.max(0, totalHours - 40);

            results.push({
                fullName: `${user.firstName} ${user.lastName}`,
                totalHours,
                overtime
            });
        }

        setData(results);
    };

    const calculateWeeklyHours = (schedule) => {
        let total = 0;

        for (const entry of schedule) {
            const [startHours, startMinutes] = entry.startTime.split(":").map(Number);
            const [endHours, endMinutes] = entry.endTime.split(":").map(Number);

            const startInMinutes = startHours * 60 + startMinutes;
            const endInMinutes = endHours * 60 + endMinutes;

            const durationInHours = (endInMinutes - startInMinutes) / 60;
            total += durationInHours;
        }

        return Math.round(total * 100) / 100; // zaokrąglenie do dwóch miejsc
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Godziny pracy pracowników</h2>
            <table className="w-full border">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">Imię i nazwisko</th>
                    <th className="border p-2">Przepracowane godziny</th>
                    <th className="border p-2">Nadgodziny</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index} className="text-center">
                        <td className="border p-2">{item.fullName}</td>
                        <td className="border p-2">{item.totalHours} h</td>
                        <td className="border p-2">{item.overtime} h</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
