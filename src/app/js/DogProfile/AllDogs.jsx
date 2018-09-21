import React, { Component } from "react";

class AllDogs extends Component {
    render() {
        this.props.list.map((d, i) => {
            console.log("tot");
        });
        return <div />;
    }
}

export default AllDogs;
