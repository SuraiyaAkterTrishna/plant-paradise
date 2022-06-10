import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img from '../../indoorPlant.png';
import useReviews from '../../utilities/useReviews';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='container mb-5'>
            <div className='top-banner mb-5'>
                <div className="banner-left">
                    <h1 className='display-3'>
                        <span className='green'>Plant<FontAwesomeIcon icon={faLeaf} /></span>Paradise
                    </h1>
                    <h2>Your Next Plant, Your Best Plant!!</h2>
                    <br />
                    <p>Send a living gift to someone important with plant delivery. Whether it’s a tropical orchid, a desert succulent, or something else, plants bring life to any space.</p>
                    <button className='btn btn-success my-4'>Log in for $10 Off</button>
                </div>

                <div className="banner-right">
                    <img src={img} alt="" />
                </div>
            </div>
            <h1 className='mb-4'>Client  Reviews:</h1>
            <div className="card-deck mb-5">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>).slice(0, 3)
                }
            </div>
            <div className="d-flex flex-row-reverse">
                <Link to='/reviews'><button className='btn btn-success'>See All Reviews <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button></Link>
            </div>
        </div>
    );
};

export default Home;