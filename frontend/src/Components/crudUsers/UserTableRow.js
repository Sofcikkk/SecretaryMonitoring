import { NavLink } from "react-router-dom";
import {useContext} from 'react';
import {deleteUserById} from "../../Services/users.service";
import {UserContext} from "../../context/UserContext";

export default function UserTableRow ({id, firstName, lastName, password, email, role}) {

    const {removeUserById} = useContext(UserContext);

    async function deleteUser() {
        try {
            await deleteUserById(id);
            removeUserById(id);

        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    return(
        <tr>
            <th scope="row">{id}</th>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{role}</td>
            <td>
                <div className="btn-group">
                    <NavLink className="btn btn-light" to={`/${id}/edit`}>Edit</NavLink>
                    <button onClick={deleteUser} className="btn btn-danger">Delete</button>
                </div>
            </td>
        </tr>
    );
}