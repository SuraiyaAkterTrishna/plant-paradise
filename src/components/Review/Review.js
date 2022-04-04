import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { picture, name, description, rating } = review;
    return (
        <div className="card review-card">
            <div>
                <img className="card-img-top" src={picture} alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">Rating: {rating} star</small></p>
            </div>
        </div>
    );
};

export default Review;