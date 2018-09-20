import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// import api from "../utils/api";

class DogProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            age: "",
            breed: "",
            getsAlongWith: {
                kids: false,
                dogs: false,
                cats: false
            },
            // character: {
            //     courage: undefined,
            //     agility: undefined,
            //     stubborn: undefined,
            //     water: undefined,
            //     snuggly: undefined,
            //     fightGamer: undefined
            // },
            weight: ""
            // restrictions: {
            //     maleDogs: false,
            //     femaleDogs: false,
            //     traffic: false,
            //     publicTransport: false,
            //     car: false
            // },
            // aboutMe: ""

            // TODO where are pictures handled?
            // dogPictures: dog.dogPictures
        };

        this._inputChangeHandler = this._inputChangeHandler.bind(this);
        this._getsAlongWithChangeHandler = this._getsAlongWithChangeHandler.bind(this);
        this._submitData = this._submitData.bind(this);
    }

    render() {
        if (!this.props.user) return <Redirect to="/auth/sign-in" />; // this is actually the protection

        return (
            <div className="container">
                {/* TODO Render Dog Picture, and Name */}

                {/* <img src={this.props.user.profilePicture} height="200px" />
                <br />
                {this.props.user._id}
                <br />
                {this.props.user.email}
                <br /> */}
                <h1>Edit the Dog Profile Page</h1>
                <input
                    type="text"
                    value={this.state.name}
                    placeholder="name"
                    onChange={evt => this._inputChangeHandler("name", evt.target.value)}
                />
                <input
                    type="number"
                    value={this.state.age}
                    placeholder="age"
                    onChange={evt => this._inputChangeHandler("age", evt.target.value)}
                />
                <br />
                <input
                    type="text"
                    value={this.state.breed}
                    placeholder="breed"
                    onChange={evt => this._inputChangeHandler("breed", evt.target.value)}
                />
                <br />
                <label htmlFor="">
                    <input
                        type="checkbox"
                        value={this.state.getsAlongWith.kids}
                        onChange={evt => this._getsAlongWithChangeHandler(`kids`)}
                    />
                    Kids
                </label>
                <br />
                <label htmlFor="">
                    <input
                        type="checkbox"
                        value={this.state.getsAlongWith.dogs}
                        onChange={evt => this._getsAlongWithChangeHandler(`dogs`)}
                    />
                    Dogs
                </label>
                <br />
                <label htmlFor="">
                    <input
                        type="checkbox"
                        value={this.state.getsAlongWith.cats}
                        onChange={evt => this._getsAlongWithChangeHandler(`cats`)}
                    />
                    Cats
                </label>
                <br />
                {/* <label htmlFor="">
                    <input
                        type="checkbox"
                        value={this.state.getsAlongWith.kids}
                        onChange={evt => this._getsAlongWithChangeHandler(`kids`)}
                    />
                    Kids
                </label>
                <br />
                <label htmlFor="">
                    <input
                        type="checkbox"
                        value={this.state.getsAlongWith.dogs}
                        onChange={evt => this._getsAlongWithChangeHandler(`dogs`)}
                    />
                    Dogs
                </label>
                <br />
                <label htmlFor="">
                    <input
                        type="checkbox"
                        value={this.state.getsAlongWith.cats}
                        onChange={evt => this._getsAlongWithChangeHandler(`cats`)}
                    />
                    Cats
                </label> */}
                <button onClick={this._submitData}>SUBMIT</button>
            </div>
        );
    }

    _submitData() {
        console.log("submitting Data", this.state);
        // api.post('/api/your-endpoint', {
        //     profession: this.state.profession,
        //     age: this.state.age,
        //     favoriteFood: this.state.favoriteFood,
        //     ...
        // })
        // .then(result => {
        //     console.log(result)
        // })
    }

    _inputChangeHandler(key, newValue) {
        this.setState({
            [key]: newValue
        });
    }

    _getsAlongWithChangeHandler(key) {
        const newGetsAlongwith = { ...this.state.getsAlongWith };
        newGetsAlongwith[key] = !newGetsAlongwith[key];
        this.setState({ getsAlongWith: newGetsAlongwith });
    }
}

export default DogProfile;
