import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserListProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});

    const updateUsers = (users) => {
        setUsers(users)
    }

    const addUser = (product) => {
        setUsers([... users, user]);
    }

    const updateUser = (user) => {
        setUser(user);
    }

    const removeUserById = (id) => {
        const newUser = users.filter((user) => user.id !== id);
        setUsers(newUser);
    }

    return (
        <UserContext.Provider value={{ users, user, updateUsers, updateUser, removeUserById, addUser }}>
            {children}
        </UserContext.Provider>
    );
}