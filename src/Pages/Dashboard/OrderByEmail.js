import React from 'react';
import { Link } from 'react-router-dom';

const OrderByEmail = ({order, index}) => {

    const {_id, img, price, name, orderQuantity } = order;

    const totalPrice = price * orderQuantity;

    return (
        <tr>
                <th>{index + 1}</th>
                <td>
                    <div className="avatar">
                        <div className="w-16 rounded">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </td>
               
                <td>{name}</td>
                <td>{price}</td>
                <td>{orderQuantity}</td>
                <td>{totalPrice}</td>  
               
                <td>
                    <Link to={`/payment/${_id}`} className='btn btn-success'>Pay</Link>
                </td>

            </tr>
    );
};

export default OrderByEmail;