// Renders all dogs of the logged-in User

import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../utils/api";

class AllDogs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: ""
        };
    }
    componentDidMount() {
        api.get("/api/dog/all")
            .then(data => {
                this.setState({
                    list: data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        let dogs;
        if (this.state.list) {
            dogs = this.state.list.map((d, i) => {
                console.log("List", this.state.list);
                return (
                    <div className="dog-card" key={i}>
                        <div className="dog-card-picture">
                            <img src={d.dogPicture} alt="" />
                            <Link
                                className="link-button dog-button"
                                to={`/dog/profile/${this.state.list[i]._id}`}
                            >
                                Show Profile
                            </Link>
                        </div>
                        <div className="dog-card-info">
                            <h2>{d.name}</h2>
                            <p>Breed: {d.breed}</p>
                            <p>Age: {d.age}</p>
                        </div>
                    </div>
                );
            });
            console.log("Dogs", dogs);
        } else {
            dogs = <img src="https://loading.io/spinners/spin/lg.ajax-spinner-gif.gif" />;
        }
        // TODO render view if user has no dogs, yet
        return (
            <div className="container">
                <div className="list-wrapper">{dogs}</div>
            </div>
        );
    }
}

export default AllDogs;
