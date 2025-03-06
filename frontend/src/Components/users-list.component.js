import React, { Component } from "react";
import UsersService from "../Services/users.service";

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.retrieveUsers = this.retrieveUsers.bind(this);
        this.state = {
            users: [],
        }
    }
    componentDidMount() {
        this.retrieveUsers();
    }

    retrieveUsers(){
        UsersService.getAll()
            .then(response => {
                this.setState({
                    users: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });
    }
    render() {
        return (
            <div>
                <h2>Lista użytkowników</h2>
                <ul>
                    {this.state.users.map((user, index) => (
                        <li key={index}>{user.firstName} {user.lastName} {user.password}</li>
                    ))}
                </ul>
            </div>
        )
    }

}