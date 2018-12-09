import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import api from "../utils/api";

class NewDogProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            age: "",
            breed: "",
            street: "",
            zip: "",
            gender: "",
            character: {
                courage: 1,
                agility: 1,
                stubborn: 1,
                water: 1,
                snuggly: 1,
                fightGamer: 1
            },
            weight: "",
            restrictions: {
                maleDogs: false,
                femaleDogs: false,
                traffic: false,
                publicTransport: false,
                car: false
            },
            aboutMe: ""

            // TODO where are pictures handled?
            // dogPictures: dog.dogPictures
        };

        this._inputChangeHandler = this._inputChangeHandler.bind(this);
        this._submitData = this._submitData.bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="form-wrapper">
                    <h1>Create your Dog's Profile Page</h1>
                    <div className="first-row-wrapper">
                        <div className="text-input-wrapper">
                            <input
                                className="input"
                                type="text"
                                value={this.state.name}
                                placeholder="Name"
                                onChange={evt => this._inputChangeHandler("name", evt.target.value)}
                            />
                            <input
                                className="input"
                                type="number"
                                value={this.state.age}
                                placeholder="Age"
                                onChange={evt => this._inputChangeHandler("age", evt.target.value)}
                            />

                            <input
                                className="input"
                                type="text"
                                value={this.state.breed}
                                placeholder="Breed"
                                onChange={evt => this._inputChangeHandler("breed", evt.target.value)}
                            />
                            <br />
                            <h3>Address</h3>
                            <input
                                className="input"
                                type="text"
                                value={this.state.street}
                                placeholder="Street"
                                onChange={evt => this._inputChangeHandler("street", evt.target.value)}
                            />
                            <input
                                className="input"
                                type="text"
                                value={this.state.zip}
                                placeholder="Zip"
                                onChange={evt => this._inputChangeHandler("zip", evt.target.value)}
                            />
                            <br />
                        </div>

                        <div className="gender-wrapper">
                            <h3>Gender</h3>
                            <label>
                                <input
                                    type="radio"
                                    value="male"
                                    checked={this.state.gender === "male"}
                                    onChange={evt =>
                                        this._inputChangeHandler("gender", evt.target.value)
                                    }
                                />
                                Male
                            </label>
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    value="female"
                                    checked={this.state.gender === "female"}
                                    onChange={evt =>
                                        this._inputChangeHandler("gender", evt.target.value)
                                    }
                                />
                                Female
                            </label>
                        </div>

                        <br />
                        <div className="weight-wrapper">
                            <h3>Weight</h3>
                            <label>
                                <input
                                    type="radio"
                                    value="light"
                                    checked={this.state.weight === "light"}
                                    onChange={evt =>
                                        this._inputChangeHandler("weight", evt.target.value)
                                    }
                                />
                                Less than 15kg
                            </label>
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    value="middle"
                                    checked={this.state.weight === "middle"}
                                    onChange={evt =>
                                        this._inputChangeHandler("weight", evt.target.value)
                                    }
                                />
                                15-30kg
                            </label>
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    value="heavy"
                                    checked={this.state.weight === "heavy"}
                                    onChange={evt =>
                                        this._inputChangeHandler("weight", evt.target.value)
                                    }
                                />
                                more than 30kg
                            </label>
                        </div>

                        <br />
                        <div className="restrictions-wrapper">
                            <h3>Any Restrictions?</h3>
                            <label htmlFor="">
                                <input
                                    type="checkbox"
                                    value={this.state.restrictions.maleDogs}
                                    onChange={evt => this._restrictionsChangeHandler(`maleDogs`)}
                                />
                                Male Dogs
                            </label>
                            <br />
                            <label htmlFor="">
                                <input
                                    type="checkbox"
                                    value={this.state.restrictions.femaleDogs}
                                    onChange={evt => this._restrictionsChangeHandler(`femaleDogs`)}
                                />
                                Female Dogs
                            </label>
                            <br />
                            <label htmlFor="">
                                <input
                                    type="checkbox"
                                    value={this.state.restrictions.traffic}
                                    onChange={evt => this._restrictionsChangeHandler(`traffic`)}
                                />
                                Traffic
                            </label>
                            <br />
                            <label htmlFor="">
                                <input
                                    type="checkbox"
                                    value={this.state.restrictions.publicTransport}
                                    onChange={evt => this._restrictionsChangeHandler(`publicTransport`)}
                                />
                                Public Transport
                            </label>
                            <br />
                            <label htmlFor="">
                                <input
                                    type="checkbox"
                                    value={this.state.restrictions.car}
                                    onChange={evt => this._restrictionsChangeHandler(`car`)}
                                />
                                Cars
                            </label>
                        </div>
                    </div>

                    <h3>Your Dog's Character</h3>
                    <div className="form-character-wrapper">
                        <label htmlFor="">
                            Scaredy-Cat
                            <input
                                type="range"
                                value={this.state.character.courage}
                                onChange={evt =>
                                    this._inputChangeHandler("character", {
                                        ...this.state.character,
                                        courage: evt.target.value
                                    })
                                }
                                min="1"
                                max="5"
                                step="1"
                            />
                            Daredevil
                        </label>
                        <br />
                        <label htmlFor="">
                            Energy Saver
                            <input
                                type="range"
                                value={this.state.character.agility}
                                onChange={evt =>
                                    this._inputChangeHandler("character", {
                                        ...this.state.character,
                                        agility: evt.target.value
                                    })
                                }
                                min="1"
                                max="5"
                                step="1"
                            />
                            Marathon Runner
                        </label>
                        <br />
                        <label htmlFor="">
                            Yes-Sayer
                            <input
                                type="range"
                                value={this.state.character.stubborn}
                                onChange={evt =>
                                    this._inputChangeHandler("character", {
                                        ...this.state.character,
                                        stubborn: evt.target.value
                                    })
                                }
                                min="1"
                                max="5"
                                step="1"
                            />
                            Stubborn
                        </label>
                        <br />
                        <label htmlFor="">
                            Non-Swimmer
                            <input
                                type="range"
                                value={this.state.character.water}
                                onChange={evt =>
                                    this._inputChangeHandler("character", {
                                        ...this.state.character,
                                        water: evt.target.value
                                    })
                                }
                                min="1"
                                max="5"
                                step="1"
                            />
                            Water Rat
                        </label>
                        <br />
                        <label htmlFor="">
                            Ice Block
                            <input
                                type="range"
                                defaultValue={this.state.character.snuggly}
                                // onChange={evt => this._inputChangeHandler("snuggly", evt.target.value)}
                                onChange={evt =>
                                    this._inputChangeHandler("character", {
                                        ...this.state.character,
                                        snuggly: evt.target.value
                                    })
                                }
                                min="1"
                                max="5"
                                step="1"
                            />
                            Snuggly
                        </label>
                        <br />
                        <label htmlFor="">
                            Rather no Physical Contact
                            <input
                                type="range"
                                defaultValue={this.state.character.fightGamer}
                                onChange={evt =>
                                    this._inputChangeHandler("character", {
                                        ...this.state.character,
                                        fightGamer: evt.target.value
                                    })
                                }
                                min="1"
                                max="5"
                                step="1"
                            />
                            Fighting Games Player
                        </label>
                    </div>
                    <br />

                    <br />
                    <h3>About Me</h3>
                    <textarea
                        cols="50"
                        rows="5"
                        value={this.state.aboutMe}
                        onChange={evt => this._inputChangeHandler("aboutMe", evt.target.value)}
                    />
                    <br />
                    <br />
                    <button onClick={this._submitData}>SUBMIT</button>
                </div>
            </div>
        );
    }

    _submitData() {
        // console.log("submitting Data", this.state);
        // api.post('/api/dog/new', {
        //     profession: this.state.profession,
        //     age: this.state.age,
        //     favoriteFood: this.state.favoriteFood,
        //     ...
        // })
        api.post("/api/dog/new", {
            name: this.state.name,
            age: this.state.age,
            breed: this.state.breed,
            street: this.state.street,
            zip: this.state.zip,
            gender: this.state.gender,
            // getsAlongWith: this.state.getsAlongWith,
            character: this.state.character,
            weight: this.state.weight,
            restrictions: this.state.restrictions,
            aboutMe: this.state.aboutMe
            // dogPictures: dog.dogPictures ??
        })
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err.description);
            });
    }

    _inputChangeHandler(key, newValue) {
        this.setState({
            [key]: newValue
        });
        console.log("NEW VALUE: ", newValue);
    }

    _restrictionsChangeHandler(key) {
        const newRestriction = { ...this.state.restrictions };
        newRestriction[key] = !newRestriction[key];
        this.setState({ restrictions: newRestriction });
    }

    _characterChangeHandler(key) {
        const newCharacter = { ...this.state.character };
        newCharacter[key] = !newCharacter[key];
        this.setState({ character: newCharacter });
    }
}

export default NewDogProfile;
