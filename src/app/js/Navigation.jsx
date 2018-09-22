import React from "react";
import { Link } from "react-router-dom";

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
                            <Link className="link nav-link" to="/walk/new">
                                Create new Walk
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
