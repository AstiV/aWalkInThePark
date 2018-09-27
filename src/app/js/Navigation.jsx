import React from "react";
import { Link } from "react-router-dom";

// import Logo from "../assets/noun_Dog_1609873_cropped.png";

const Navigation = props => {
    return (
        <div className="navigation">
            <div className="container nav-content">
                <div>
                    <Link className="link nav-link" to="/">
                        Home
                    </Link>
                    {props.user && (
                        <span>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/profile">
                                Profile
                            </Link>
                        </span>
                    )}
                    {props.user && (
                        <span>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/dog/profile/all">
                                All My Dogs
                            </Link>
                        </span>
                    )}
                    {props.user && (
                        <span>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/dog/profile/new">
                                Create New Dog Profile
                            </Link>
                        </span>
                    )}
                    {props.user && (
                        <span>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/walk/all">
                                All my Walks
                            </Link>
                        </span>
                    )}
                </div>
                <div>
                    {props.user ? (
                        <Link className="link nav-link" to="/auth/logout">
                            Logout
                        </Link>
                    ) : (
                        <span>
                            <Link className="link nav-link" to="/auth/sign-in">
                                Sign in
                            </Link>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/auth/sign-up">
                                Sign up
                            </Link>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navigation;
