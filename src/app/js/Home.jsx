import React from "react";
import { Link } from "react-router-dom";

import Walklist from "./Walk/WalkList";

const Home = props => {
    return (
        <div className="container">
            <div className="greeting-wrapper">
                <h1>Hello, {props.user ? props.user.email : "Stranger"}!</h1>
                <Link className="link-button button" to="/filter">
                    Look for Walk Mates
                </Link>
            </div>

            <Walklist />
        </div>
    );
};

export default Home;
