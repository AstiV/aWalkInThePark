import React, { Component } from "react";
import { withRouter } from "react-router";

import api from "../utils/api";

class SingleWalk extends Component {
    constructor(props) {
        super(props);

        this.state = {
            walkData: "",
            title: "",
            startDate: "",
            time: "",
            location: "",
            user: "",
            participants: [],
            dogs: [],
            public: ""
        };
    }

    componentDidMount() {
        api.get(`/api/walk/${this.props.match.params.id}`)
            .then(data => {
                console.log("DATA: ", data);
                this.setState({
                    id: this.props.match.params.id,
                    walkData: data,
                    title: data.title,
                    startDate: data.startDate,
                    time: data.time,
                    location: data.location,
                    user: data.user,
                    public: "",
                    id: data._id
                });
                console.log("WALK DATA IN STATE: ", this.state.walkData);
                console.log("USER IN STATE: ", this.state.user);
                console.log("WALK ID: ", this.state.id);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        let dogs;
        let participants;
        if (this.state.walkData) {
            dogs = this.state.walkData.dogs.map(dog => {
                console.log("WALK DATA DOGS", this.state.walkData.dogs);
                return (
                    <div>
                        <ul>
                            <li>{dog.name}</li>
                        </ul>
                    </div>
                );
            });
            participants = this.state.walkData.participants.map(participant => {
                console.log("WALK DATA PARTICIPANTS", this.state.walkData.participants);
                return (
                    <div>
                        <ul>
                            <li>{participant.email}</li>
                        </ul>
                    </div>
                );
            });
        }
        return (
            <div className="container">
                <h1>{this.state.walkData.title}</h1>
                <div className="info-wrapper">
                    <p>Date: {this.state.walkData.startDate}</p>
                    <p>Time: {this.state.walkData.time}</p>
                    <p>Location: {this.state.walkData.location}</p>
                    <p>Creator: {this.state.user.email}</p>
                    {/* <p>Participants: {this.state.walkData.participants}</p> */}
                    <p>Dogs</p>
                    <div>{dogs}</div>
                    <p>Participants</p>
                    <div>{participants}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(SingleWalk);
