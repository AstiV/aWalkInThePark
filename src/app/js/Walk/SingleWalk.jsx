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
            dogs = this.state.walkData.dogs.map((dog, i) => {
                console.log("WALK DATA DOGS", this.state.walkData.dogs);
                return (
                    <div key={i}>
                        <ul>
                            <li>{dog.name}</li>
                            <li>
                                <div className="cardprofilepicture">
                                    <img src={dog.dogPicture} alt="" />
                                </div>
                            </li>
                        </ul>
                    </div>
                );
            });
            participants = this.state.walkData.participants.map((participant, i) => {
                console.log("WALK DATA PARTICIPANTS", this.state.walkData.participants);
                return (
                    <div key={i}>
                        <ul>
                            <li>{participant.email}</li>
                            <li>
                                <div className="cardprofilepicture">
                                    <img src={participant.profilePicture} alt="" />
                                </div>
                            </li>
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
                    <div className="cardprofilepicture">
                        <img src={this.state.user.profilePicture} alt="" />
                    </div>
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
