import React from 'react';

const Review = ({ review }) => {

    const { name, description, rating } = review;

    return (
        <div className="card w-96 text-center bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <p>{description}</p>
                <p>Rated us {rating} on 5</p>
            </div>
        </div>
    );
};

export default Review;