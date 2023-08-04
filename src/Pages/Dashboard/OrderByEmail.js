import React from 'react';
import { Link } from 'react-router-dom';

const OrderByEmail = ({order, index}) => {

    const {_id, img, price, name, orderQuantity, paymentStatus } = order;

    const totalPrice = price * orderQuantity;
    console.log(order);
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
               
               {paymentStatus === "unpaid" ?  <td>
                    <Link to={`/payment/${_id}`} className='btn btn-success'>Unpaid</Link>
                </td> : <button className='btn btn-success'>Paid</button>}

            </tr>
    );
};

export default OrderByEmail;