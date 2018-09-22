import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";

import AllWalks from "./AllWalks";
import NewWalk from "./NewWalk";
import SingleWalk from "./SingleWalk";

class Walk extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            date: "",
            location: "",
            user: "",
            participants: [],
            dogs: [],
            public: false

            // TODO where are pictures handled?
            // dogPictures: dog.dogPictures
        };
    }
    render() {
        if (!this.props.user) return <Redirect to="/auth/sign-in" />; // this is actually the protection
        return (
            <div>
                <Switch>
                    <Route exact path="/walk/all" render={() => <AllWalks user={this.state.user} />} />
                    <Route exact path="/walk/new" render={() => <NewWalk user={this.state.user} />} />
                    <Route exact path="/walk/:id" render={() => <SingleWalk user={this.state.user} />} />
                </Switch>
            </div>
        );
    }
}

export default Walk;
