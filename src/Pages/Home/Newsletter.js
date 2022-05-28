import React from 'react';
import { toast } from 'react-toastify';

const Newsletter = () => {

    const handleSubmitNewsletter = (event) =>{
        event.preventDefault();
        toast.success('Thanks for joining our Newsletter!');
    }
 
    return (
        <div className='py-20'>
            <h1 className='text-4xl py-10 text-center font-bold text-primary '>Join Our Newsletter</h1>
            <div className='text-center'>
                <input type="text" placeholder="Type here" class="input input-bordered mx-auto w-full max-w-lg" />
                <div class="card-actions justify-center">
                    <button onClick={handleSubmitNewsletter} class="btn btn-primary text-white mt-3">Subscribe!</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;