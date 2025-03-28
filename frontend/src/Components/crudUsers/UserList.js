import React, {useContext, useEffect} from 'react';
import UserTableRow from "./UserTableRow";
import {getUsers} from "../../Services/users.service";
import {UserContext} from "../../context/UserContext";
import {directorAdmin} from "../../roles"
import {NavLink, useNavigate} from "react-router-dom";

export default function UserList() {

    const { users, updateUsers } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const storedRole = localStorage.getItem("userRole");
        if (!directorAdmin.includes(storedRole)) {
            navigate(`/`);
        }
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const users = await getUsers();
                updateUsers(users);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchData();
    },[]);

    return(
        <div className="container mt-4">
            {/* Add User Button */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="text-primary">User Management</h2>
                <NavLink to="/newUser" className="btn btn-primary">
                    <i className="bi bi-person-plus-fill me-2"></i> Add User
                </NavLink>
            </div>

            {/* Table inside a Card */}
            <div className="card shadow-sm">
                <div className="card-body">
                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.length > 0 ? (
                            users.map((user) =>
                                user.id ? <UserTableRow key={user.id} {...user} /> : null
                            )
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center text-muted">
                                    No users found.
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    );

}