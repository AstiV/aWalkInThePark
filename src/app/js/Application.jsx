import React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";

import Auth from "./Auth";
import Home from "./Home";
import DogProfile from "./DogProfile";
import Walk from "./Walk";
import Profile from "./Profile";
import Filter from "./Filter";

import Navigation from "./Navigation";
import NotFound from "./NotFound";
import api from "./utils/api";

class Application extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this._setUser(true)
        };

        this._setUser = this._setUser.bind(this);
        this._resetUser = this._resetUser.bind(this);
    }

    componentDidMount() {
        this._setUser();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation user={this.state.user} />
                    <Switch>
                        // first level navigation : only path / NOT exact path!!
                        <Route exact path="/" render={() => <Home user={this.state.user} />} />
                        <Route path="/profile" render={() => <Profile user={this.state.user} />} />
                        <Route path="/dog" render={() => <DogProfile user={this.state.user} />} />
                        <Route path="/walk" render={() => <Walk user={this.state.user} />} />
                        <Route path="/filter" render={() => <Filter user={this.state.user} />} />
                        <Route
                            path="/auth"
                            render={() => <Auth setUser={this._setUser} resetUser={this._resetUser} />}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

    _resetUser() {
        this.setState({
            user: null
        });
    }

    _setUser(init) {
        const token = localStorage.getItem("identity");
        if (token) {
            const decoded = jwtDecode(token);
            delete decoded.iat;
            if (init) return decoded;
            this.setState({ user: decoded });
        } else {
            return null;
        }
    }
}

export default Application;
