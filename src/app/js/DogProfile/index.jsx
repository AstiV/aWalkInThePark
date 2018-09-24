import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";

import NewDogProfile from "./NewDogProfile";
import AllDogs from "./AllDogs";
import SingleDogProfile from "./SingleDogProfile";

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
            aboutMe: "",
            dogPicture: ""
        };
    }
    render() {
        if (!this.props.user) return <Redirect to="/auth/sign-in" />; // this is actually the protection
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/dog/profile/all"
                        render={() => <AllDogs user={this.state.user} />}
                    />
                    <Route
                        exact
                        path="/dog/profile/new"
                        render={() => <NewDogProfile user={this.state.user} />}
                    />
                    <Route
                        exact
                        path="/dog/profile/:id"
                        render={() => <SingleDogProfile user={this.state.user} />}
                    />
                </Switch>
            </div>
        );
    }
}

export default withRouter(DogProfile);
