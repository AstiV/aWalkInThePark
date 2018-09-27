import React from "react";
import NotFoundImage from "../assets/noun_Dog_78485_cropped.png";

const NotFound = () => {
    return (
        <div className="container">
            <h1>4💩4</h1>
            <div className="not-found-wrapper">
                <div className="not-found">
                    <img src={NotFoundImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;
