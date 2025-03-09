import { NavLink } from "react-router-dom";

export default function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" aria-current="page">
                    Sekretariat
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