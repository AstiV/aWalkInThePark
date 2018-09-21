// Renders all dogs of the logged-in User

import React, { Component } from "react";
import { Link } from "react-router-dom";
import SingleDogProfile from "./SingleDogProfile";

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
                    <div className="container" key={i}>
                        <h2>Name: {d.name}</h2>
                        <p>Breed: {d.breed}</p>
                        <p>Age: {d.age}</p>
                        <p>Id: {this.state.list[i]._id}</p>
                        <Link className="link" to={`/dog/profile/${this.state.list[i]._id}`}>
                            Show Profile
                        </Link>
                    </div>
                );
            });
            console.log("Dogs", dogs);
        } else {
            dogs = <img src="https://loading.io/spinners/spin/lg.ajax-spinner-gif.gif" />;
        }
        return <div>{dogs}</div>;
    }
}

export default AllDogs;
