import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// import childrens (New, Alldogs ...)
// import api

// create the state
// this.state.listOfAllDogsFromUser => api.get(localhost:3000/api/dog/all)

// passing as props to the AllDogs component

class DogProfile extends Component {
    render() {
        if (!this.props.user) return <Redirect to="/auth/sign-in" />; // this is actually the protection
        return <div>Some Div Yo</div>;
    }
}

export default DogProfile;
