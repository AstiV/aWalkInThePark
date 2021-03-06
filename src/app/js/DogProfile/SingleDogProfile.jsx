import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import api from "../utils/api";

class SingleDogProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dogData: "",
            agility: "",
            courage: "",
            fightGamer: "",
            snuggly: "",
            stubborn: "",
            water: "",
            maleDogs: "",
            femaleDogs: "",
            traffic: "",
            publicTransport: "",
            car: "",
            user: ""
        };
    }

    componentDidMount() {
        api.get(`/api/dog/profile/${this.props.match.params.id}`)
            .then(data => {
                console.log("DATA: ", data);
                this.setState({
                    // id: this.props.match.params.id,
                    dogData: data,
                    agility: data.character.agility,
                    courage: data.character.courage,
                    fightGamer: data.character.fightGamer,
                    snuggly: data.character.snuggly,
                    stubborn: data.character.stubborn,
                    water: data.character.water,
                    maleDogs: data.restrictions.maleDogs,
                    femaleDogs: data.restrictions.femaleDogs,
                    traffic: data.restrictions.traffic,
                    publicTransport: data.restrictions.publicTransport,
                    car: data.restrictions.car,
                    dogPicture: data.dogPicture,
                    user: data.user,
                    id: data._id
                });
                console.log("DOG DATA IN STATE: ", this.state.dogData);
                console.log("USER IN STATE: ", this.state.user);
                console.log("DOG ID: ", this.state.id);
            })
            .catch(err => {
                console.log(err);
            });
    }

    // restrictions: {maleDogs: false, femaleDogs: false, traffic: true, publicTransport: true, car: false}

    render() {
        return (
            <div className="container">
                <div className="profile-wrapper">
                    <div className="main-wrapper">
                        <div className="profilepicture">
                            <img src={this.state.dogData.dogPicture} alt="" />
                        </div>
                        <h1>{this.state.dogData.name}</h1>
                    </div>
                    <div className="info-wrapper">
                        <h3>General Info</h3>
                        <p>Age: {this.state.dogData.age}</p>
                        <p>Breed: {this.state.dogData.breed}</p>
                        <p>Gender: {this.state.dogData.gender}</p>
                        <p>Weight: {this.state.dogData.weight}</p>
                    </div>
                    <div className="restrictions-wrapper">
                        <h3>Restrictions</h3>
                        {this.state.maleDogs && <p>Male Dogs {this.state.maleDogs}</p>}
                        {this.state.femaleDogs && <p>Female Dogs {this.state.femaleDogs}</p>}
                        {this.state.traffic && <p>Traffic {this.state.traffic}</p>}
                        {this.state.publicTransport && (
                            <p>Public Transport {this.state.publicTransport}</p>
                        )}
                        {this.state.car && <p>Car {this.state.car}</p>}
                    </div>
                    <div className="human-wrapper">
                        <h3>My Human</h3>
                        <div className="human-image-wrapper">
                            <div className="cardprofilepicture">
                                <img src={this.state.user.profilePicture} alt="" />
                            </div>
                            {this.state.user.email}
                        </div>
                    </div>
                </div>
                <div className="character-wrapper">
                    <h3>Character</h3>

                    <span>Agility {this.state.agility}</span>
                    <span>Courage {this.state.courage}</span>
                    <span>Likes fighting Games {this.state.fightGamer}</span>
                    <span>Snuggly {this.state.snuggly}</span>
                    <span>Stubborn {this.state.stubborn}</span>
                    <span>Likes Water {this.state.water}</span>
                </div>

                <br />
                <br />
                <Link className="link-button button" to={{ pathname: `/walk/new/${this.state.id}` }}>
                    Schedule a Walk
                </Link>
            </div>
        );
    }
}

export default withRouter(SingleDogProfile);
