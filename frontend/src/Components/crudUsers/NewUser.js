import React, {useContext, useRef} from "react";
import {createUser} from "../../Services/users.service";
import {useNavigate} from 'react-router-dom';
import {UserContext} from "../../context/UserContext";

export default function NewUser() {

    const navigate = useNavigate();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const passwordRef =useRef();
    const emailRef = useRef();
    const roleRef = useRef();

    const {addUser} = useContext(UserContext);

    async function add(target) {
        target.preventDefault();

        try {
            const newUser ={
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                password: passwordRef.current.value,
                email: emailRef.current.value,
                role: roleRef.current.value
            };
            console.log(newUser)

            const response = await createUser(newUser);
            console.log(response)
            addUser(response)
            navigate(`/UsersList`);
        } catch (error) {
            console.error('Error', error);
        }
    }

    return(
        <div>
            <form>
                <div className="mb-3 mt-5">
                    <label htmlFor="firstName" className="form-label">Imie</label>
                    <input ref={firstNameRef} type="text" className="form-control" id="firstName" />
                </div>
                <div className="mb-3 mt-5">
                    <label htmlFor="lastName" className="form-label">Nazwisko</label>
                    <input ref={lastNameRef} type="text" className="form-control" id="lastName" />
                </div>
                <div className="mb-3 mt-5">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input ref={emailRef} type="text" className="form-control" id="email" />
                </div>
                <div className="mb-3 mt-5">
                    <label htmlFor="password" className="form-label">Haslo</label>
                    <input ref={passwordRef} type="text" className="form-control" id="password" />
                </div>
                <div className="mb-3 mt-5">
                    <label htmlFor="role" className="form-label">Rola</label>
                    <select
                        ref={roleRef}
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
                <button onClick={add} type="submit" className="btn btn-primary">Dodaj</button>
            </form>
        </div>
    );

}