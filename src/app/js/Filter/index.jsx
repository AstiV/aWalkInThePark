import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";

import api from "../utils/api";

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // zip: "",
            age: "",
            breed: "",
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
            }
        };

        this._inputChangeHandler = this._inputChangeHandler.bind(this);
        this._submitData = this._submitData.bind(this);
    }
    render() {
        return (
            <div className="container">
                <h1>Hello, I'm a Filter!</h1>
                {/* <input
                    type="text"
                    value={this.state.zip}
                    placeholder="zip"
                    onChange={evt => this._inputChangeHandler("zip", evt.target.value)}
                /> */}
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
                <h3>Gender</h3>
                <label>
                    <input
                        type="radio"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={evt => this._inputChangeHandler("gender", evt.target.value)}
                    />
                    Male
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={evt => this._inputChangeHandler("gender", evt.target.value)}
                    />
                    Female
                </label>
                <br />
                <h3>Your Dog's Character</h3>
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
                <br />
                <h3>Weight</h3>
                <label>
                    <input
                        type="radio"
                        value="light"
                        checked={this.state.weight === "light"}
                        onChange={evt => this._inputChangeHandler("weight", evt.target.value)}
                    />
                    Less than 15kg
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="middle"
                        checked={this.state.weight === "middle"}
                        onChange={evt => this._inputChangeHandler("weight", evt.target.value)}
                    />
                    15-30kg
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="heavy"
                        checked={this.state.weight === "heavy"}
                        onChange={evt => this._inputChangeHandler("weight", evt.target.value)}
                    />
                    more than 30kg
                </label>
                <br />
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
                <br />
                <br />
                <button onClick={this._submitData}>SUBMIT</button>
            </div>
        );
    }

    _submitData() {
        // console.log("submitting Data", this.state);
        api.post("/api/filter/results", {
            // zip: this.state.zip,
            age: this.state.age,
            breed: this.state.breed,
            gender: this.state.gender,
            character: this.state.character,
            weight: this.state.weight,
            restrictions: this.state.restrictions,
            aboutMe: this.state.aboutMe
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

export default withRouter(Filter);
