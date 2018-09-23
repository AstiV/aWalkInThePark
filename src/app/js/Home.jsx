import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
    return (
        <div className="container">
            <h1>Hello, {props.user ? props.user.email : "Stranger"}!</h1>
            <Link className="link-button" to="/filter">
                Look for Mates for a Walk
            </Link>
        </div>
    );
};

export default Home;
