import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderByEmail from './OrderByEmail';

const MyOrders = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        const email = user.email;
        const url = `http://localhost:5000/order-by/${email}`;
        fetch(url,{
            method: 'GET',
            headers: {
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data));


    },[user])

    return (
        <div>
            <h2 className='text-xl font-bold text-primary py-2'>Total Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Order Quantity</th>
                            <th>Total</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrderByEmail
                            key={order._id}
                            order={order}
                            index={index}
                            ></OrderByEmail>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;