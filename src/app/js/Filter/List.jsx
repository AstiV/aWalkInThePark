import React from "react";
import { Link } from "react-router-dom";

const List = ({ dogs }) => {
    console.log("DOGS PROPS: ", dogs);
    return (
        <ul>
            {dogs.map((dog, i) => {
                // return <li key={i}>{dog.name}</li>;
                console.log("DOG: ", dog);
                return (
                    <div className="container" key={i}>
                        <h2>{dog.name}</h2>
                        <p>Breed: {dog.breed}</p>
                        <p>Age: {dog.age}</p>
                        <p>Id: {dog._id}</p>
                        <Link className="link-button" to={`/dog/profile/${dogs._id}`}>
                            Show Profile
                        </Link>
                    </div>
                );
            })}
        </ul>
    );
};

export default List;
