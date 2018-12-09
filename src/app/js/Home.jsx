import React from "react";
import { Link } from "react-router-dom";

import Walklist from "./Walk/WalkList";

const Home = props => {
    return (
        <div className="container">
            <div className="greeting-wrapper">
                <h1>Hello, {props.user ? props.user.email : "Stranger"}!</h1>
                {props.user && (
                    <div className="button-wrapper">
                        <Link className="link-button button" to="/filter">
                            Look for Walk Mates
                        </Link>
                    </div>
                )}
            </div>
            {!props.user && (
                <p>
                    New to Berlin?!
                    <br />
                    A walk in the Park is the solution for dog people looking for like-minded others to
                    go on joint walks and explore the area together. <br />
                    <br />
                    <div className="separator" />
                    <Link className="link" to="/auth/sign-up">
                        Sign up &nbsp;
                    </Link>
                    or
                    <Link className="link" to="/auth/sign-in">
                        &nbsp; Sign in &nbsp;
                    </Link>
                    to look for walk mates!
                </p>
            )}
            {props.user && (
                <div className="list-wrapper">
                    <Walklist />
                </div>
            )}
        </div>
    );
};

export default Home;
