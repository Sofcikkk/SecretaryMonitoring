import {getUserVacationById, updateAcceptation} from "../Services/users.service";

export default function VacationForm() {
    // getUserVacationById(id urzytkownika) zwraca liste wnioskow
    console.log(getUserVacationById(1))
    console.log(updateAcceptation(1, false))
    console.log(getUserVacationById(1))
    console.log(updateAcceptation(1, true))
    console.log(getUserVacationById(1))
    const userRole = localStorage.getItem("userRole")
    console.log(userRole)
    return(
        <div>
            {(userRole === "director") && (
                <div>widok dyrektora</div>
            )}
            {(userRole !== "director") && (
                <div>wniosek o urlop</div>
            )}

        </div>
    )
}