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
            car: ""
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
                    dogPicture: data.dogPicture
                });
                console.log("DOG DATA IN STATE: ", this.state.dogData);
            })
            .catch(err => {
                console.log(err);
            });
    }

    // restrictions: {maleDogs: false, femaleDogs: false, traffic: true, publicTransport: true, car: false}

    render() {
        return (
            <div className="container">
                <div className="profilepicture">
                    <img src={this.state.dogData.dogPicture} alt="" />
                </div>
                <Link className="link-button" to={`/walk/new`}>
                    Schedule a Walk
                </Link>
                <h1>{this.state.dogData.name}</h1>
                <div className="info-wrapper">
                    <p>Age: {this.state.dogData.age}</p>
                    <p>Breed: {this.state.dogData.breed}</p>
                    <p>Gender: {this.state.dogData.gender}</p>
                    <p>Weight: {this.state.dogData.weight}</p>
                </div>
                <h3>Character</h3>
                <p>Agility {this.state.agility}</p>
                <p>Courage {this.state.courage}</p>
                <p>Likes fighting Games {this.state.fightGamer}</p>
                <p>Snuggly {this.state.snuggly}</p>
                <p>Stubborn {this.state.stubborn}</p>
                <p>Likes Water {this.state.water}</p>

                <h3>Restrictions</h3>
                {this.state.maleDogs && <p>Male Dogs {this.state.maleDogs}</p>}
                {this.state.femaleDogs && <p>Female Dogs {this.state.femaleDogs}</p>}
                {this.state.traffic && <p>Traffic {this.state.traffic}</p>}
                {this.state.publicTransport && <p>Public Transport {this.state.publicTransport}</p>}
                {this.state.car && <p>Car {this.state.car}</p>}
            </div>
        );
    }
}

export default withRouter(SingleDogProfile);
