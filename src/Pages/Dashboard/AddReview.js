import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
const [reviewState, setReviewState] = useState({});

    const handleSubmit = event => {
        event.preventDefault();
        
        const addItem = {
            name: user.displayName,
            description: event.target.description.value,
            rating: event.target.rating.value
        }
        console.log(addItem);
     setReviewState(addItem);
        axios.post('http://localhost:5000/reviews', addItem)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    event.target.reset();
                    toast('Review Added Successfully!');
                }
            })
    }
   

    return (
        <div>
            <h2 className='text-2xl  text-center text-primary'>Add A Review</h2>
            <div>
                <form className='w-96 mx-auto'  onSubmit={handleSubmit}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Share your thoughts about us!</span>
                        </label>
                        <input className='input mb-1 input-bordered w-full' placeholder='Description' name='description' />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Give us a review!</span>
                        </label>
                        <input className='input mb-1 input-bordered w-full' placeholder='Rating' name='rating' />
                    </div>
                    <input className='btn mx-auto btn-block text-white btn-primary' disabled={reviewState.rating >= 5} type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;