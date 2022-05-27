import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = ({}) => {
    const {id} =useParams()
    return (
        <div>
            <p>pay for {id}</p>
        </div>
    );
};

export default Payment;