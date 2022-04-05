import React from 'react';
import useReviews from '../../utilities/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className="card-deck my-5 d-flex flex-wrap">
            <div className="row mb-4">
            {
                reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>).slice(0, 3)
            }
            </div>
            <div className="row">
            {
                reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>).slice(3, 6)
            }
            </div>
            
        </div>
    );
};

export default Reviews;