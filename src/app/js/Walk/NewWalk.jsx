import React, { Component } from "react";

class NewWalk extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            date: "",
            location: "",
            participants: [],
            dogs: [],
            public: "public"
        };

        this._inputChangeHandler = this._inputChangeHandler.bind(this);
        this._submitData = this._submitData.bind(this);
    }

    render() {
        return (
            <div className="container">
                <h1>Create a new Walk</h1>
                <input
                    type="text"
                    value={this.state.title}
                    placeholder="title"
                    onChange={evt => this._inputChangeHandler("title", evt.target.value)}
                />
                <input
                    type="text"
                    value={this.state.location}
                    placeholder="location"
                    onChange={evt => this._inputChangeHandler("location", evt.target.value)}
                />
                <h3>Public or Private?</h3>
                <label>
                    <input
                        type="radio"
                        value="public"
                        checked={this.state.public === "public"}
                        onChange={evt => this._inputChangeHandler("public", evt.target.value)}
                    />
                    Public
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="private"
                        checked={this.state.public === "private"}
                        onChange={evt => this._inputChangeHandler("public", evt.target.value)}
                    />
                    Private
                </label>
                <br />
                <br />
                <button onClick={this._submitData}>SUBMIT</button>
            </div>
        );
    }

    _inputChangeHandler(key, newValue) {
        this.setState({
            [key]: newValue
        });
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
}

export default NewWalk;
