import React, { Component } from "react";

import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import api from "../utils/api";

class NewWalk extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            startDate: moment(),
            date: "",
            time: "",
            location: "",
            participants: [],
            dogs: [],
            public: "public"
        };

        this._inputChangeHandler = this._inputChangeHandler.bind(this);
        this._submitData = this._submitData.bind(this);
        this._dateChangeHandler = this._dateChangeHandler.bind(this);
    }

    render() {
        console.log("Show me the DATE: ", this.state.startDate);
        return (
            <div className="container">
                <h1>Create a new Walk</h1>
                <input
                    type="text"
                    value={this.state.title}
                    placeholder="title"
                    onChange={evt => this._inputChangeHandler("title", evt.target.value)}
                />
                <div>
                    <h3>Select Date and Time</h3>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this._dateChangeHandler}
                        timeFormat="HH:mm"
                    />
                    <input
                        type="text"
                        value={this.state.time}
                        placeholder="time"
                        onChange={evt => this._inputChangeHandler("time", evt.target.value)}
                    />
                </div>
                <h3>Location</h3>
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

    _dateChangeHandler(date) {
        this.setState({
            startDate: date
        });
    }

    _submitData() {
        api.post("/api/walk/new", {
            title: this.state.title,
            startDate: this.state.startDate,
            time: this.state.time,
            location: this.state.location,
            // participants: [],
            // dogs: [],
            public: this.state.public
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
