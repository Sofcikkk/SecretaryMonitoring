import { NavLink } from "react-router-dom";
import img from "../imgs/logo_teb_header.642e49.png"
export default function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand d-flex align-items-center">
                    <img src={img} alt="Teb Technikum" height="40" className="me-2" />
                </NavLink>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/UsersList"
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                aria-current="page"
                            >
                                Show Users List
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/newUser"
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            >
                                Add User
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/login"
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            >
                                logowanie
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}