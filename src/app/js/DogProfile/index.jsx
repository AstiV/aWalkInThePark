import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";

import api from "../utils/api";

import NewDogProfile from "./NewDogProfile";
import AllDogs from "./AllDogs";

// create the state
// this.state.listOfAllDogsFromUser => api.get(localhost:3000/api/dog/all)

// passing as props to the AllDogs component

class DogProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            age: "",
            breed: "",
            // getsAlongWith: {
            //     kids: false,
            //     dogs: false,
            //     cats: false
            // },
            character: {
                courage: 1,
                agility: 1,
                stubborn: 1,
                water: 1,
                snuggly: 1,
                fightGamer: 1
            },
            weight: "",
            restrictions: {
                maleDogs: false,
                femaleDogs: false,
                traffic: false,
                publicTransport: false,
                car: false
            },
            aboutMe: ""

            // TODO where are pictures handled?
            // dogPictures: dog.dogPictures
        };

        // this._allDogsFromUser = this._allDogsFromUser.bind(this);
        // this._inputChangeHandler = this._inputChangeHandler.bind(this);
        // // this._getsAlongWithChangeHandler = this._getsAlongWithChangeHandler.bind(this);
        // this._submitData = this._submitData.bind(this);
    }
    render() {
        if (!this.props.user) return <Redirect to="/auth/sign-in" />; // this is actually the protection
        return (
            <Switch>
                <Route exact path="/dog/profile/all" render={() => <AllDogs user={this.state.user} />} />
                <Route
                    exact
                    path="/dog/profile/new"
                    render={() => <NewDogProfile user={this.state.user} />}
                />
            </Switch>
        );
    }
}

export default withRouter(DogProfile);
