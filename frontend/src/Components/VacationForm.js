import React, { useEffect, useState } from "react";
import {
    getUserVacationById,
    updateAcceptation,
    submitVacationRequest,
    getAllVacations
} from "../Services/users.service";
import {DatePicker } from "../DatePicker"

export default function VacationForm() {
    const [vacations, setVacations] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const userRole = localStorage.getItem("userRole");
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        if (userRole === "director") {
            getAllVacations().then(data => setVacations(data));
        } else {
            getUserVacationById(userId).then(data => setVacations(data));
        }
    }, [userRole, userId]);

    const handleDecision = (id, isAccepted) => {
        updateAcceptation(id, isAccepted).then(() => {
            getAllVacations().then(data => setVacations(data));
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (startDate && endDate) {
            const request = {
                startDate,
                endDate,
                accepted: null,
                user: { id: userId }
            };

            submitVacationRequest(request)
                .then(() => {
                    getUserVacationById(userId).then(data => setVacations(data));
                    setStartDate("");
                    setEndDate("");
                })
                .catch(err => {
                    console.error("Vacation request submission failed:", err);
                });
        }
    };

    return (
        <div className="container my-4">
            {userRole === "director" && (
                <div>
                    <h2 className="mb-4">Wnioski urlopowe</h2>
                    <table className="table table-bordered table-hover">
                        <thead className="table-light">
                        <tr>
                            <th>Imię i nazwisko</th>
                            <th>Data rozpoczęcia</th>
                            <th>Data zakończenia</th>
                            <th>Status</th>
                            <th>Akcje</th>
                        </tr>
                        </thead>
                        <tbody>
                        {vacations
                            .filter(vacation => vacation.accepted === null)
                            .map(vacation => (
                                <tr key={vacation.id}>
                                    <td>{vacation.userFullName}</td>
                                    <td>{vacation.startDate}</td>
                                    <td>{vacation.endDate}</td>
                                    <td>
                                        {vacation.accepted === null ? "Oczekuje" : vacation.accepted ? "Zaakceptowany" : "Odrzucony"}
                                    </td>
                                    <td>
                                        <button className="btn btn-success btn-sm me-2" onClick={() => handleDecision(vacation.id, true)}>Akceptuj</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDecision(vacation.id, false)}>Odrzuć</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {userRole !== "director" && (
                <div>
                    <h2 className="mb-4">Złóż wniosek urlopowy</h2>
                    <form onSubmit={handleSubmit} className="mb-5">
                        <DatePicker
                            label="Data rozpoczęcia:"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />

                        <DatePicker
                            label="Data zakończenia:"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary">Złóż wniosek</button>
                    </form>

                    <h3>Twoje wnioski</h3>
                    <table className="table table-bordered table-striped">
                        <thead className="table-light">
                        <tr>
                            <th>Data rozpoczęcia</th>

                            <th>Data zakończenia</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {vacations.map(vacation => (
                            <tr key={vacation.id}>
                                <td>{vacation.startDate}</td>
                                <td>{vacation.endDate}</td>
                                <td>{vacation.accepted === null ? "Oczekuje" : vacation.accepted ? "Zaakceptowany" : "Odrzucony"}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
