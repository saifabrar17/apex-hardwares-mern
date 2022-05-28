import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDollarSign, faTools } from '@fortawesome/free-solid-svg-icons';
const BusinessSummary = () => {
    return (
        <div>
            <h1 className='text-4xl py-10 text-center font-bold text-primary pt-10'>MILLIONS BUSINESS TRUSTS US</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 py-12'>
                <div className="card w-100 bg-base-100 shadow-xl ">
                    <div className="card-body text-center">
                        <FontAwesomeIcon className='text-6xl text-primary' icon={faUser} />

                        <h2 className="text-5xl">100+</h2>
                        <h2 className='text-2xl'>Customers Served!</h2>
                    </div>

                </div>
                <div className="card w-100 bg-base-100 shadow-xl ">
                    <div className="card-body text-center">
                        <FontAwesomeIcon className='text-6xl text-primary' icon={faDollarSign} />
                        <h2 className="text-5xl">120M+</h2>
                        <h2 className='text-2xl'>Annual Revenue</h2>
                    </div>
                </div>
                <div className="card w-100 bg-base-100 shadow-xl ">
                    <div className="card-body text-center">
                        <FontAwesomeIcon className='text-6xl text-primary' icon={faTools} />
                        <h2 className="text-5xl">30+</h2>
                        <h2 className='text-2xl'>Tools In Stock</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;