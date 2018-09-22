import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Profile extends Component {
    render() {
        if (!this.props.user) return <Redirect to="/auth/sign-in" />; // this is actually the protection

        return (
            <div className="container">
                <h1>{this.props.user.email}</h1>
                <div className="profilepicture">
                    <img src={this.props.user.profilePicture} alt="" />
                </div>
                <br />
                {this.props.user._id}
                <br />
            </div>
        );
    }
}

export default Profile;
