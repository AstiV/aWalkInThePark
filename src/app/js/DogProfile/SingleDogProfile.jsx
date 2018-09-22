import React, { Component } from "react";
import { withRouter } from "react-router";

import api from "../utils/api";

class SingleDogProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dogData: ""
        };
    }

    componentDidMount() {
        api.get(`/api/dog/profile/${this.props.match.params.id}`)
            .then(data => {
                console.log("DATA: ", data);
                this.setState({
                    // id: this.props.match.params.id,
                    dogData: data
                });
                console.log("DOG DATA IN STATE: ", this.state.dogData);
            })
            .catch(err => {
                console.log(err);
            });
    }

    // aboutMe: "Snuggly whirlwind"
    // age: "7"
    // breed: "Bichon Frisé"
    // character: {courage: 5, agility: 1, stubborn: 5, water: 4, snuggly: 5, …}
    // dogPictures: []
    // name: "Bibi"
    // restrictions: {maleDogs: false, femaleDogs: true, traffic: false, publicTransport: true, car: false}
    // user: "5ba5faeb0cdf27aedb5b7484"
    // weight: "light"
    // __v: 0
    // _id: "5ba5fc0f0cdf27aedb5b7485"
    // __proto__: Object

    render() {
        return (
            <div className="container">
                <h1>{this.state.dogData.name}</h1>
                
            </div>
        );
    }
}

export default withRouter(SingleDogProfile);
