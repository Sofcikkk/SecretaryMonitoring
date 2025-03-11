import {NavLink, useNavigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import img from "../imgs/logo_teb_header.642e49.png";
export default function NavBar() {
    const { isAuthenticated, logout} = useAuth();
    const userName = localStorage.getItem("userName");
    const userRole = localStorage.getItem("userRole")
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate(`/login`);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand d-flex align-items-center">
                    <img src={img} alt="Teb Technikum" height="40" className="me-2" />
                </NavLink>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {(userRole === "employee") && (
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                            <li className="nav-item ">
                                <NavLink
                                    to="/workSchedule"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                >
                                    Grafik
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink
                                    to="/vacationForm"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                >
                                    Wniosek o Urlop
                                </NavLink>
                            </li>
                        </ul>
                    )}

                    {(userRole === "manager") && (
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                            <li className="nav-item ">
                                <NavLink
                                    to="/workSchedule"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                >
                                    Grafik
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink
                                    to="/vacationForm"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                >
                                    Wniosek o Urlop
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink
                                    to="/tasksList"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                >
                                    Zarzadzanie Zadaniami
                                </NavLink>
                            </li>
                        </ul>
                    )}

                    {(userRole === "admin") && (
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                            <li className="nav-item ">
                                <NavLink
                                    to="/workSchedule"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                >
                                    Grafik
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink
                                    to="/vacationForm"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                >
                                    Wniosek o Urlop
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink
                                    to="/tasksList"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                >
                                    Zarzadzanie Zadaniami
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink
                                    to="/usersList"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                >
                                    Zarzadzanie Kontami
                                </NavLink>
                            </li>
                        </ul>
                    )}

                    {(userRole === "director") && (
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                            <li className="nav-item ">
                                <NavLink
                                    to="/workSchedule"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                >
                                    Grafik
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink
                                    to="/vacationForm"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                >
                                    Wniosek o Urlop
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink
                                    to="/tasksList"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                >
                                    Zarzadzanie Zadaniami
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink
                                    to="/usersList"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                >
                                    Zarzadzanie Kontami
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink
                                    to="/workTime"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                >
                                    Czas Pracy i Raporty
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink
                                    to="/dataAnalysis"
                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                >
                                    Analiza Danych
                                </NavLink>
                            </li>
                        </ul>
                    )}
                    <div className="ms-auto">
                        {isAuthenticated ? (
                            <button onClick={handleLogout} className="btn btn-outline-danger d-flex align-items-center gap-2 px-3 py-2">
                                {userName} Logout
                            </button>

                        ) : (
                            <NavLink
                                to="/login"
                                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            >
                                Logowanie
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
