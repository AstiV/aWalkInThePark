import React, { Component } from "react";
import { withRouter } from "react-router";
import moment from "moment";

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
                            <div className="picture-name-wrapper">
                                <li>
                                    <div className="cardprofilepicture">
                                        <img src={dog.dogPicture} alt="" />
                                    </div>
                                </li>
                                <li>{dog.name}</li>
                            </div>
                        </ul>
                    </div>
                );
            });
            participants = this.state.walkData.participants.map((participant, i) => {
                console.log("WALK DATA PARTICIPANTS", this.state.walkData.participants);
                return (
                    <div key={i}>
                        <ul>
                            <div className="picture-name-wrapper">
                                <li>
                                    <div className="cardprofilepicture">
                                        <img src={participant.profilePicture} alt="" />
                                    </div>
                                </li>
                                <li>{participant.email}</li>
                            </div>
                        </ul>
                    </div>
                );
            });
        }
        return (
            <div className="container">
                <h1>{this.state.walkData.title}</h1>
                <div className="walk-major-wrapper">
                    <div className="walk-info-wrapper">
                        <div className="creator-info">
                            <h3>Creator</h3>

                            <img
                                className="creator-picture"
                                src={this.state.user.profilePicture}
                                alt=""
                            />

                            <p>{this.state.user.email}</p>
                        </div>
                        <div className="general-info">
                            <h3>General Info</h3>
                            <p>Date: {moment(this.state.walkData.startDate).format("DD.MM.YYYY")}</p>
                            <p>Time: {moment(this.state.walkData.startDate).format("HH:mm")}</p>
                            <p>Location: {this.state.walkData.location}</p>
                        </div>
                    </div>
                    <div className="participants-info-wrapper">
                        <div className="header-wrapper">
                            <h3>Participants</h3>
                        </div>
                        <div className="dog-wrapper">{dogs}</div>
                        <div className="participants-wrapper">{participants}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SingleWalk);
