import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-woodland-69836.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <h1 className='text-4xl py-10 text-center font-bold text-primary '>Customer Reviews</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 py-12'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;