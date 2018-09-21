import React, { Component } from "react";
import { withRouter } from "react-router";

import api from "../utils/api";

class SingleDogProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            dogData: ""
        };
    }

    componentDidMount() {
        api.get("/api/dog/profile/:id")
            .then(data => {
                console.log("ID: ", this.props.match.params.id);
                console.log("PARAMS: ", this.props.match.params);
                console.log("DATA: ", data);
                this.setState({
                    id: this.props.match.params.id
                });
                console.log("ID in state: ", this.state.id);
                console.log("DOG DATA IN STATE: ", this.state.dogData);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <h1>{this.state.dogData.name}</h1>
            </div>
        );
    }
}

export default withRouter(SingleDogProfile);
