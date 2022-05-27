import React from 'react';

const OrderByEmail = ({order, index}) => {

    const {img, price, name, orderQuantity } = order;

    const totalPrice = price * orderQuantity;

    return (
        <tr>
                <th>{index + 1}</th>
                <td>
                    <div class="avatar">
                        <div class="w-16 rounded">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </td>
               
                <td>{name}</td>
                <td>{price}</td>
                <td>{orderQuantity}</td>
                <td>{totalPrice}</td>  
               
                <td><label class="btn btn-sm text-white btn-success">Pay</label></td>

            </tr>
    );
};

export default OrderByEmail;