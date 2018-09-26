import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import api from "../utils/api";

class WalkList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: ""
        };
    }
    componentDidMount() {
        api.get("/api/walk/list")
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
        let walks;
        if (this.state.list) {
            walks = this.state.list.map((w, i) => {
                console.log("List", this.state.list);
                return (
                    <div key={i}>
                        <h2>{w.title}</h2>
                        <p>Date: {moment(w.startDate).format("DD.MM.YYYY")}</p>
                        <p>Time: {moment(w.startDate).format("HH:mm")}</p>
                        <p>Location: {w.location}</p>
                        <Link className="link-button" to={`/walk/${this.state.list[i]._id}`}>
                            Show Walk
                        </Link>
                    </div>
                );
            });
            console.log("walks", walks);
        } else {
            walks = <img src="https://loading.io/spinners/spin/lg.ajax-spinner-gif.gif" />;
        }
        // TODO render view if user has no walks, yet
        return <div>{walks}</div>;
    }
}

export default WalkList;
