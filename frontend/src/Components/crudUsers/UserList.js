import React, {useContext, useEffect} from 'react';
import UserTableRow from "./UserTableRow";
import {getUsers} from "../../Services/users.service";
import {UserContext} from "../../context/UserContext";
import {employeePlus, menagerPlus, directorAdmin} from "../../roles"
import {useNavigate} from "react-router-dom";

export default function UserList() {

    const { users, updateUsers } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const storedRole = localStorage.getItem("userRole");
        if (!menagerPlus.includes(storedRole)) {
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
        <div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Password</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    user.id ? <UserTableRow key={user.id} {...user} /> : null
                ))}
                </tbody>

            </table>

        </div>

    );

}