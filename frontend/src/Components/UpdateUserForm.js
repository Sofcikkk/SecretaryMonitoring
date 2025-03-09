import React, {useContext, useEffect} from "react";
import {getUserById, updateUserById} from "../Services/users.service";
import {useNavigate, useParams} from 'react-router-dom';
import {UserContext} from "../context/UserContext";

export default function UpdateUserForm() {

    const { id } = useParams();
    const navigate = useNavigate();
    const {user, updateUser} = useContext(UserContext);

    async function update(target) {
        target.preventDefault();

        try {
            const response = await updateUserById(id, user);
            navigate(`/UsersList`);
        } catch (error) {
            console.error('Error', error);
        }
    }

    useEffect(() => {

        async function fetchData() {
            try {
                const user = await getUserById(id);
                console.log(user)
                updateUser(user);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchData();
    }, []);

    const handleChange = (event) => {
        const { id, value } = event.target;
        updateUser(prevUser => ({
            ...prevUser,
            [id]: value,
        }));
    };

    return(
        <div>
            <form>
                <div className="mb-3 mt-5">
                    <label htmlFor="firstName" className="form-label">Imie</label>
                    <input onChange={handleChange} value={user?.firstName || ""} type="text" className="form-control" id="firstName" />
                </div>
                <div className="mb-3 mt-5">
                    <label htmlFor="lastName" className="form-label">Nazwisko</label>
                    <input onChange={handleChange} value={user?.lastName || ""} type="text" className="form-control" id="lastName" />
                </div>
                <div className="mb-3 mt-5">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input onChange={handleChange} value={user.email || ""} type="text" className="form-control" id="email" />
                </div>
                <div className="mb-3 mt-5">
                    <label htmlFor="password" className="form-label">Haslo</label>
                    <input onChange={handleChange} value={user.password || ""} type="text" className="form-control" id="password" />
                </div>
                <div className="mb-3 mt-5">
                    <label htmlFor="role" className="form-label">Rola</label>
                    <select
                        onChange={handleChange}
                        value={user.role || ""}
                        className="form-select"
                        id="role"
                    >
                        <option value="">Wybierz rolę</option>
                        <option value="admin">Admin</option>
                        <option value="director">Dyrektor</option>
                        <option value="manager">Menadżer</option>
                        <option value="employee">Pracownik</option>
                    </select>
                </div>
                <button onClick={update} type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );

}