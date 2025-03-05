import React, { Component } from "react";
import UsersService from "../Services/users.service";

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.retrieveTutorials = this.retrieveTutorials.bind(this);
        this.state = {
            users: [],
        }
    }
    componentDidMount() {
        this.retrieveTutorials();
    }

    retriveUsers(){
        UsersService.getAll()
            .then(response => {
                this.setState({
                    tutorials: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    render() {
        return (
            <div></div>
        )
    }
}