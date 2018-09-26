import React, { Component } from "react";

import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { withRouter } from "react-router-dom";

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
                <form onSubmit={this._submitData}>
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
                            showTimeSelect
                            timeFormat="HH:mm"
                            dateFormat="DD.MM.YYYY HH:mm"
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
                    <button type="submit">SUBMIT</button>
                </form>
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

    _submitData(e) {
        e.preventDefault();

        // const data= {...this.state, startDate: this.state.startDate} // Handle Date / Time

        api.post(`/api/walk/new/${this.props.match.params.id}`, {
            title: this.state.title,
            startDate: this.state.startDate,
            time: this.state.time,
            location: this.state.location,
            dog: this.props.match.params.id,
            public: this.state.public
        })
            .then(result => {
                console.log(result);
                this.props.history.push(`/walk/all`);
            })
            .catch(err => {
                console.log(err.description);
            });
    }
}

export default withRouter(NewWalk);
