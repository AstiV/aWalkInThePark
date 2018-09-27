import React from "react";
import { Link } from "react-router-dom";

const List = ({ dogs }) => {
    console.log("DOGS PROPS: ", dogs);
    return (
        <ul className="dog-list">
            {dogs.map((dog, i) => {
                // return <li key={i}>{dog.name}</li>;
                console.log("DOG: ", dog);
                return (
                    <div className="dog-card" key={i}>
                        <div className="dog-card-picture">
                            <img src={dog.dogPicture} alt="" />
                            <Link className="link-button dog-button" to={`/dog/profile/${dog._id}`}>
                                Show Profile
                            </Link>
                        </div>
                        <div className="dog-card-info">
                            <h2>{dog.name}</h2>
                            <p>Breed: {dog.breed}</p>
                            <p>Age: {dog.age}</p>
                        </div>
                    </div>
                );
            })}
        </ul>
    );
};

export default List;
